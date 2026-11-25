(function () {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    document.body.classList.add("reduce-motion");
  }

  /* ── Preloader ───────────────────────────────────────────── */
  const preloader = document.getElementById("preloader");
  const preloaderBar = document.getElementById("preloader-bar");
  const preloaderPercent = document.getElementById("preloader-percent");

  if (preloader) {
    if (prefersReducedMotion) {
      preloader.remove();
    } else {
      let progress = 0;
      const interval = setInterval(() => {
        progress = Math.min(progress + Math.random() * 22 + 12, 100);
        if (preloaderBar) preloaderBar.style.width = `${progress}%`;
        if (preloaderPercent) preloaderPercent.textContent = `${Math.round(progress)}%`;

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.remove(), 350);
          }, 180);
        }
      }, 55);
    }
  }

  /* ── Toast Feedback (Idea 2) ─────────────────────────────── */
  const toastEl = document.getElementById("copy-toast");
  const toastMsgEl = document.getElementById("copy-toast-message");
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl || !toastMsgEl) return;
    toastMsgEl.textContent = message;
    toastEl.classList.remove("hidden");
    requestAnimationFrame(() => {
      toastEl.classList.remove("opacity-0", "translate-y-2");
    });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => toastEl.classList.add("hidden"), 220);
    }, 2200);
  }

  async function copyText(text, label) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const tmp = document.createElement("textarea");
        tmp.value = text;
        tmp.style.position = "fixed";
        tmp.style.opacity = "0";
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand("copy");
        tmp.remove();
      }
      showToast(`${label || "Copied"}: ${text}`);
    } catch (_) {
      showToast("Copy unavailable in this browser");
    }
  }

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const value = btn.getAttribute("data-copy") || "";
      const label = btn.getAttribute("data-copy-label") || "Copied";
      if (value) copyText(value, label);
    });
  });

  /* ── Scroll progress + Navbar blur + Active section ─────── */
  const scrollBar = document.getElementById("scroll-progress");
  const navbar = document.getElementById("main-navbar");
  const desktopLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const mobileLinks = Array.from(document.querySelectorAll("[data-mobile-nav-link]"));
  const sectionIds = desktopLinks
    .map((el) => (el.getAttribute("href") || "").replace("#", ""))
    .filter(Boolean);

  function setActiveNav(activeId) {
    desktopLinks.forEach((link) => {
      const targetId = (link.getAttribute("href") || "").replace("#", "");
      const pill = link.querySelector("[data-nav-pill]");
      const isActive = targetId === activeId;
      link.classList.toggle("text-white", isActive);
      link.classList.toggle("font-medium", isActive);
      link.classList.toggle("text-muted-fg", !isActive);
      if (pill) pill.classList.toggle("hidden", !isActive);
    });

    mobileLinks.forEach((link) => {
      const targetId = (link.getAttribute("href") || "").replace("#", "");
      const isActive = targetId === activeId;
      link.classList.toggle("text-white", isActive);
      link.classList.toggle("font-medium", isActive);
      link.classList.toggle("bg-primary/10", isActive);
      link.classList.toggle("text-muted-fg", !isActive);
    });
  }

  function handleScroll() {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;

    if (scrollBar) {
      scrollBar.style.transform = `scaleX(${ratio})`;
    }

    if (navbar) {
      const scrolled = scrollTop > 20;
      navbar.classList.toggle("glass-nav", scrolled);
      navbar.classList.toggle("bg-transparent", !scrolled);
    }

    const isAtBottom = window.innerHeight + scrollTop >= document.body.offsetHeight - 50;
    if (isAtBottom && sectionIds.length > 0) {
      setActiveNav(sectionIds[sectionIds.length - 1]);
      return;
    }

    let current = "";
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.getBoundingClientRect().top <= 150) {
        current = sectionIds[i];
        break;
      }
    }
    setActiveNav(current);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ── Dual-Resume Navbar Dropdown ─────────────────────────── */
  const resumeBtn = document.getElementById("resume-dropdown-btn");
  const resumeMenu = document.getElementById("resume-dropdown-menu");

  function setResumeMenu(open) {
    if (!resumeBtn || !resumeMenu) return;
    resumeMenu.classList.toggle("hidden", !open);
    resumeBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (resumeBtn && resumeMenu) {
    resumeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setResumeMenu(resumeMenu.classList.contains("hidden"));
    });

    document.addEventListener("click", (e) => {
      if (!resumeMenu.classList.contains("hidden") && !resumeMenu.contains(e.target) && e.target !== resumeBtn) {
        setResumeMenu(false);
      }
    });
  }

  /* ── Mobile drawer toggle ────────────────────────────────── */
  const mobileToggleBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-nav");
  const iconOpen = document.getElementById("mobile-menu-icon-open");
  const iconClose = document.getElementById("mobile-menu-icon-close");

  function setMobileMenu(open) {
    if (!mobileToggleBtn || !mobileDrawer) return;
    mobileDrawer.classList.toggle("hidden", !open);
    mobileToggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    mobileToggleBtn.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
    if (iconOpen) iconOpen.classList.toggle("hidden", open);
    if (iconClose) iconClose.classList.toggle("hidden", !open);
  }

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener("click", () => {
      setMobileMenu(mobileDrawer.classList.contains("hidden"));
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMobileMenu(false));
    });
  }

  /* ── Project Filter Tabs ─────────────────────────────────── */
  const filterTabs = Array.from(document.querySelectorAll("[data-project-filter]"));
  const projectCards = Array.from(document.querySelectorAll("[data-project-card]"));
  const projectsCountEl = document.getElementById("projects-count");

  function applyProjectFilter(category) {
    let visible = 0;
    projectCards.forEach((card) => {
      const cardCat = card.getAttribute("data-category") || "";
      const match = category === "All" || cardCat === category;
      card.classList.toggle("hidden", !match);
      if (match) visible++;
    });

    filterTabs.forEach((tab) => {
      const isSelected = tab.getAttribute("data-project-filter") === category;
      tab.classList.toggle("is-active", isSelected);
      tab.setAttribute("aria-pressed", isSelected ? "true" : "false");
    });

    if (projectsCountEl) {
      projectsCountEl.textContent = `Showing ${visible} of ${projectCards.length}`;
    }
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      applyProjectFilter(tab.getAttribute("data-project-filter") || "All");
    });
  });

  /* ── Project Detail Modal ────────────────────────────────── */
  const projectsJsonEl = document.getElementById("projects-data");
  const modal = document.getElementById("project-modal");
  const modalBackdrop = document.getElementById("project-modal-backdrop");
  const modalCloseBtn = document.getElementById("project-modal-close");

  let projectsList = [];
  if (projectsJsonEl) {
    try {
      projectsList = JSON.parse(projectsJsonEl.textContent || "[]");
    } catch (_) {
      projectsList = [];
    }
  }

  if (modal) {
    const projectsById = new Map(projectsList.map((p) => [String(p.id), p]));
    const modalCategory = document.getElementById("project-modal-category");
    const modalTitle = document.getElementById("project-modal-title");
    const modalSubtitle = document.getElementById("project-modal-subtitle");
    const modalOutcome = document.getElementById("project-modal-outcome");
    const modalDesc = document.getElementById("project-modal-desc");
    const modalArchWrap = document.getElementById("project-modal-arch-wrap");
    const modalArch = document.getElementById("project-modal-arch");
    const modalDetails = document.getElementById("project-modal-details");
    const modalStack = document.getElementById("project-modal-stack");
    const modalGithub = document.getElementById("project-modal-github");
    const modalLive = document.getElementById("project-modal-live");

    let lastFocusedEl = null;

    function openModal(projectId) {
      const project = projectsById.get(String(projectId));
      if (!project) return;

      lastFocusedEl = document.activeElement;
      if (modalCategory) modalCategory.textContent = project.category || "";
      if (modalTitle) modalTitle.textContent = project.title || "";
      if (modalSubtitle) modalSubtitle.textContent = project.subtitle || "";

      if (modalOutcome) {
        if (project.outcome) {
          modalOutcome.textContent = project.outcome;
          modalOutcome.classList.remove("hidden");
        } else {
          modalOutcome.classList.add("hidden");
        }
      }

      if (modalDesc) modalDesc.textContent = project.description || "";

      if (modalArch && modalArchWrap) {
        modalArch.innerHTML = "";
        const arch = project.architecture || [];
        if (arch.length > 0) {
          arch.forEach((step, idx) => {
            const node = document.createElement("span");
            node.className = "arch-node";
            node.textContent = step;
            modalArch.appendChild(node);
            if (idx < arch.length - 1) {
              const arrow = document.createElement("span");
              arrow.className = "text-xs font-mono text-muted-fg";
              arrow.textContent = "→";
              arrow.setAttribute("aria-hidden", "true");
              modalArch.appendChild(arrow);
            }
          });
          modalArchWrap.classList.remove("hidden");
        } else {
          modalArchWrap.classList.add("hidden");
        }
      }

      if (modalDetails) {
        modalDetails.innerHTML = "";
        (project.details || []).forEach((detailText) => {
          const li = document.createElement("li");
          li.className = "text-sm text-muted-fg flex items-start gap-2.5";

          const dot = document.createElement("span");
          dot.className = "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-primary";
          dot.setAttribute("aria-hidden", "true");

          const textNode = document.createTextNode(detailText);
          li.appendChild(dot);
          li.appendChild(textNode);
          modalDetails.appendChild(li);
        });
      }

      if (modalStack) {
        modalStack.innerHTML = "";
        (project.stack || []).forEach((tag) => {
          const chip = document.createElement("span");
          chip.className = "skill-chip text-xs";
          chip.textContent = tag;
          modalStack.appendChild(chip);
        });
      }

      if (modalGithub) {
        if (project.github_url) {
          modalGithub.href = project.github_url;
          modalGithub.setAttribute(
            "aria-label",
            `${project.title} GitHub repository (opens in new tab)`
          );
          modalGithub.classList.remove("hidden");
        } else {
          modalGithub.removeAttribute("href");
          modalGithub.classList.add("hidden");
        }
      }

      if (modalLive) {
        if (project.live_url) {
          modalLive.href = project.live_url;
          modalLive.setAttribute("aria-label", `${project.title} live demo (opens in new tab)`);
          modalLive.classList.remove("hidden");
        } else {
          modalLive.removeAttribute("href");
          modalLive.classList.add("hidden");
        }
      }

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
      if (modalCloseBtn) modalCloseBtn.focus();
    }

    function closeModal() {
      if (modal.classList.contains("hidden")) return;
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
      if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
        lastFocusedEl.focus();
      }
    }

    projectCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("[data-stop-card]")) return;
        openModal(card.getAttribute("data-project-id"));
      });

      card.addEventListener("keydown", (e) => {
        if (e.target.closest("[data-stop-card]")) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(card.getAttribute("data-project-id"));
        }
      });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
        setResumeMenu(false);
      }
    });
  }
})();

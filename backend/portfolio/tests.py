import json
import re

from django.contrib.auth import get_user_model
from django.test import TestCase, override_settings

from .models import Education, Experience, Project, Resume, SiteProfile, SkillCategory

TEST_STORAGES = {
    "default": {"BACKEND": "django.core.files.storage.FileSystemStorage"},
    "staticfiles": {"BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage"},
}


@override_settings(ALLOWED_HOSTS=["localhost", "127.0.0.1", "testserver"], STORAGES=TEST_STORAGES)
class PortfolioViewTests(TestCase):
    fixtures = ["initial_data.json"]

    def test_fixtures_seed_all_portfolio_models(self):
        self.assertEqual(SiteProfile.objects.count(), 1)
        self.assertEqual(Resume.objects.count(), 2)
        self.assertEqual(SkillCategory.objects.count(), 5)
        self.assertEqual(Project.objects.count(), 7)
        self.assertEqual(Experience.objects.count(), 9)
        self.assertEqual(Education.objects.count(), 3)

        projects = list(Project.objects.all())
        self.assertEqual(projects[0].slug, "luxeshop-ecommerce")
        self.assertEqual(projects[-1].slug, "top-500-crypto-coins")

    def test_index_renders_projects_resumes_and_profile_data(self):
        response = self.client.get("/", HTTP_HOST="localhost")
        self.assertEqual(response.status_code, 200)
        html = response.content.decode("utf-8")

        for expected in [
            "Malla",
            "Bala Raju",
            "CGPA: 6.9",
            "LuxeShop-ECommerce",
            "buyX",
            "CloudDataGuard",
            "PhishScope",
            "Smart Resource Predictor",
            "Malla_Bala_Raju_DevOps_Resume.pdf",
            "Malla_Bala_Raju_FullStack_Resume.pdf",
            "DevOps &amp; Cloud",
            "Data &amp; ML",
        ]:
            self.assertIn(expected, html)

    def test_projects_json_payload_and_empty_github_hiding(self):
        response = self.client.get("/", HTTP_HOST="localhost")
        html = response.content.decode("utf-8")

        match = re.search(
            r'<script id="projects-data" type="application/json">(.*?)</script>',
            html,
            re.S,
        )
        self.assertIsNotNone(match)
        payload = json.loads(match.group(1))
        self.assertEqual(len(payload), 7)

        predictor = next(p for p in payload if p["slug"] == "smart-resource-predictor")
        self.assertEqual(predictor["github_url"], "")
        self.assertNotIn("Smart Resource Predictor GitHub repository", html)

    def test_admin_hides_groups_and_shows_all_portfolio_sections(self):
        anon = self.client.get("/admin/", HTTP_HOST="localhost")
        self.assertEqual(anon.status_code, 302)

        user_model = get_user_model()
        user_model.objects.create_superuser(
            username="admin_test",
            email="admin@example.com",
            password="test-password-123",
        )
        self.client.force_login(user_model.objects.get(username="admin_test"))

        admin_home = self.client.get("/admin/", HTTP_HOST="localhost")
        self.assertEqual(admin_home.status_code, 200)
        html = admin_home.content.decode("utf-8")

        self.assertNotIn("Groups", html)
        for section in [
            "Site Profile",
            "Resumes",
            "Skill Categories",
            "Projects",
            "Experiences",
            "Education",
            "Users",
        ]:
            self.assertIn(section, html)

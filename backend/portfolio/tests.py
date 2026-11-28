import json
import re

from django.test import TestCase, override_settings

from .models import Project

TEST_STORAGES = {
    "default": {"BACKEND": "django.core.files.storage.FileSystemStorage"},
    "staticfiles": {"BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage"},
}


@override_settings(ALLOWED_HOSTS=["localhost", "127.0.0.1", "testserver"], STORAGES=TEST_STORAGES)
class PortfolioViewTests(TestCase):
    fixtures = ["initial_data.json"]

    def test_fixtures_seed_all_seven_projects_in_order(self):
        projects = list(Project.objects.all())
        self.assertEqual(len(projects), 7)
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

    def test_admin_route_redirects_anonymous_users(self):
        response = self.client.get("/admin/", HTTP_HOST="localhost")
        self.assertEqual(response.status_code, 302)

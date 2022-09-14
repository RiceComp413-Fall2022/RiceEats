from django.test import TestCase
from main.models import FullReview, ReviewItem

# https://docs.djangoproject.com/en/4.1/topics/testing/overview/

class DummyTestCase(TestCase):
    def test_dummy(self):
        self.assertEqual("This Should be Equal", "This Should be Equal")
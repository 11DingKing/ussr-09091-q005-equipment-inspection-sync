import unittest

from src.equipment_sync.domain import InspectionRecord, SyncState


class SyncSmokeTest(unittest.TestCase):
    def test_record_is_queued(self):
        self.assertEqual(InspectionRecord("demo", "device").state, SyncState.QUEUED)


if __name__ == "__main__":
    unittest.main()

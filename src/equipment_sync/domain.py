from dataclasses import dataclass
from enum import StrEnum


class SyncState(StrEnum):
    QUEUED = "queued"
    APPLIED = "applied"
    CONFLICT = "conflict"


@dataclass(frozen=True)
class InspectionRecord:
    record_id: str
    device_id: str
    state: SyncState = SyncState.QUEUED

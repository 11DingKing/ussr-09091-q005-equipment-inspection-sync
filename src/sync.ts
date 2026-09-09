import { openDB } from "idb";
export type SyncItem = { id: string; revision: number; payload: string };
export function mergeRevision(local: SyncItem, remote: SyncItem): SyncItem {
  if (remote.revision < local.revision) return local;
  if (remote.revision === local.revision && remote.payload !== local.payload) throw new Error("需要人工处理冲突");
  return remote;
}
export function openQueueStore() {
  return openDB("equipment-sync", 1, { upgrade(database) { database.createObjectStore("outbox", { keyPath: "id" }); } });
}

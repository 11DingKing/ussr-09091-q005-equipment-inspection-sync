import test from "node:test";
import assert from "node:assert/strict";
import { mergeRevision } from "../dist/sync.js";
test("旧数据不覆盖新记录", () => assert.equal(mergeRevision({id:"a",revision:3,payload:"new"},{id:"a",revision:2,payload:"old"}).payload, "new"));
test("同版本冲突显式报错", () => assert.throws(() => mergeRevision({id:"a",revision:2,payload:"a"},{id:"a",revision:2,payload:"b"})));

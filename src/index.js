import { KVDockStore } from "kvdock";
import { MemoryAdapter } from "kvdock/adapters/memory";

export const store = new KVDockStore({
  adapter: new MemoryAdapter(),
  prefix: "kvdock-nextjs-kv:",
});

console.log("Initialized kvdock-nextjs-kv with kvdock runtime engine.");

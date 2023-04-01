import {
  Module
} from "./chunk-4QH4YDI4.js";

// src/modules/DataModule/index.ts
var DataModule = class extends Module {
  constructor() {
    super(...arguments);
    this.attach = () => {
      const broadcastChannel = new BroadcastChannel("data");
      broadcastChannel.postMessage({
        eventType: "READY"
      });
    };
  }
};
export {
  DataModule as default
};

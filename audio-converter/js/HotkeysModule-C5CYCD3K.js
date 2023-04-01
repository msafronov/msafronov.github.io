import {
  Module
} from "./chunk-4QH4YDI4.js";

// src/modules/HotkeysModule/index.ts
var HotkeysModule = class extends Module {
  constructor() {
    super(...arguments);
    this.attach = () => {
      const broadcastChannel = new BroadcastChannel(
        "hotkeys" /* Hotkeys */
      );
      broadcastChannel.postMessage({
        eventType: "READY"
      });
    };
  }
};
export {
  HotkeysModule as default
};

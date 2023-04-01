import {
  Module
} from "./chunk-4QH4YDI4.js";

// src/modules/ApplicationModule/index.ts
var ApplicationModule = class extends Module {
  constructor() {
    super(...arguments);
    this.attach = () => {
      const broadcastChannel = new BroadcastChannel(
        "application" /* Application */
      );
      broadcastChannel.postMessage({
        eventType: "READY"
      });
    };
  }
};
export {
  ApplicationModule as default
};

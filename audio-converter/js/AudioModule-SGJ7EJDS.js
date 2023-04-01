import {
  Module
} from "./chunk-4QH4YDI4.js";

// src/modules/AudioModule/index.ts
var AudioModule = class extends Module {
  constructor() {
    super(...arguments);
    this.attach = () => {
      const broadcastChannel = new BroadcastChannel(
        "audio" /* Audio */
      );
      broadcastChannel.postMessage({
        eventType: "READY"
      });
    };
  }
};
export {
  AudioModule as default
};

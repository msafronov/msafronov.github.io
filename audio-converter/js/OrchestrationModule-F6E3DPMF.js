import {
  Module
} from "./chunk-4QH4YDI4.js";

// src/modules/OrchestrationModule/services/InitApplicationService.ts
var InitApplicationService = class {
  constructor(application) {
    this.application = application;
    this.onApplicationReady = () => {
      this.application.postMessage({
        eventType: "INIT"
      });
    };
    this.onApplicationInitSuccess = () => {
    };
    this.application.onmessage = (event) => {
      if (event.data.eventType === "READY") {
        this.onApplicationReady();
      }
      if (event.data.eventType === "INIT_SUCCESS") {
        this.onApplicationInitSuccess();
      }
    };
  }
};

// src/modules/OrchestrationModule/services/InitAudioService.ts
var InitAudioService = class {
  constructor(audio) {
    this.audio = audio;
    this.onAudioReady = () => {
      this.audio.postMessage({
        eventType: "INIT"
      });
    };
    this.onAudioInitSuccess = () => {
    };
    this.audio.onmessage = (event) => {
      if (event.data.eventType === "READY") {
        this.onAudioReady();
      }
      if (event.data.eventType === "INIT_SUCCESS") {
        this.onAudioInitSuccess();
      }
    };
  }
};

// src/modules/OrchestrationModule/services/InitDataService.ts
var InitDataService = class {
  constructor(data) {
    this.data = data;
    this.onDataReady = () => {
      this.data.postMessage({
        eventType: "INIT"
      });
    };
    this.onDataInitSuccess = () => {
    };
    this.data.onmessage = (event) => {
      if (event.data.eventType === "READY") {
        this.onDataReady();
      }
      if (event.data.eventType === "INIT_SUCCESS") {
        this.onDataInitSuccess();
      }
    };
  }
};

// src/modules/OrchestrationModule/services/InitGraphicsService.ts
var InitGraphicsService = class {
  constructor(graphics) {
    this.graphics = graphics;
    this.onGraphicsReady = () => {
      this.graphics.postMessage({
        eventType: "INIT"
      });
    };
    this.onGraphicsInitSuccess = () => {
    };
    this.graphics.onmessage = (event) => {
      if (event.data.eventType === "READY") {
        this.onGraphicsReady();
      }
      if (event.data.eventType === "INIT_SUCCESS") {
        this.onGraphicsInitSuccess();
      }
    };
  }
};

// src/modules/OrchestrationModule/services/InitHotkeysService.ts
var InitHotkeysService = class {
  constructor(hotkeys) {
    this.hotkeys = hotkeys;
    this.onHotkeysReady = () => {
      this.hotkeys.postMessage({
        eventType: "INIT"
      });
    };
    this.onHotkeysInitSuccess = () => {
    };
    this.hotkeys.onmessage = (event) => {
      if (event.data.eventType === "READY") {
        this.onHotkeysReady();
      }
      if (event.data.eventType === "INIT_SUCCESS") {
        this.onHotkeysInitSuccess();
      }
    };
  }
};

// src/modules/OrchestrationModule/index.ts
var OrchestrationModule = class extends Module {
  constructor() {
    super(...arguments);
    this.attach = () => {
      const application = new BroadcastChannel(
        "application" /* Application */
      );
      const audio = new BroadcastChannel(
        "audio" /* Audio */
      );
      const data = new BroadcastChannel(
        "data" /* Data */
      );
      const graphics = new BroadcastChannel(
        "graphics" /* Graphics */
      );
      const hotkeys = new BroadcastChannel(
        "hotkeys" /* Hotkeys */
      );
      new InitApplicationService(
        application
      );
      new InitAudioService(
        audio
      );
      new InitDataService(
        data
      );
      new InitGraphicsService(
        graphics
      );
      new InitHotkeysService(
        hotkeys
      );
    };
  }
};
export {
  OrchestrationModule as default
};

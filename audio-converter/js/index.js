import {
  P,
  _,
  h,
  o,
  p,
  p2,
  s
} from "./chunk-BG32HCWO.js";

// src/components/LazyLoad/DynamicImport/ReattemptDynamicImport.ts
var ReattemptDynamicImport = class {
  constructor(dynamicImportFn) {
    this.dynamicImportFn = dynamicImportFn;
    this.load = async () => {
      try {
        const dynamicImport = await this.dynamicImportFn();
        const LazyLoadInstance = dynamicImport.default;
        return LazyLoadInstance;
      } catch (error) {
      }
    };
  }
};

// src/components/LazyLoad/LazyLoadComponent.tsx
var LazyLoadComponent = (props) => {
  const [Component, setComponent] = p2(null);
  h(() => {
    const dynamicImport = new ReattemptDynamicImport(props.dynamicImportFn);
    dynamicImport.load().then((ComponentInstance) => {
      setComponent(ComponentInstance);
    });
  }, []);
  return Component;
};

// src/components/LazyLoad/LazyLoadModule.tsx
var LazyLoadModule = (props) => {
  const ref = _();
  s(() => {
    const dynamicImport = new ReattemptDynamicImport(props.dynamicImportFn);
    const container = ref.current;
    dynamicImport.load().then((ModuleInstance) => {
      const module = new ModuleInstance(
        container
      );
      module.attach();
    });
  }, []);
  return /* @__PURE__ */ o("div", { ref });
};

// src/components/SystemModules/index.tsx
var SystemModules = () => {
  return /* @__PURE__ */ o(p, { children: [
    /* @__PURE__ */ o(
      LazyLoadModule,
      {
        dynamicImportFn: () => import("./OrchestrationModule-F6E3DPMF.js")
      }
    ),
    /* @__PURE__ */ o(
      LazyLoadModule,
      {
        dynamicImportFn: () => import("./ApplicationModule-IGVGS3L2.js")
      }
    ),
    /* @__PURE__ */ o(
      LazyLoadModule,
      {
        dynamicImportFn: () => import("./AudioModule-SGJ7EJDS.js")
      }
    ),
    /* @__PURE__ */ o(
      LazyLoadModule,
      {
        dynamicImportFn: () => import("./DataModule-YRD5WEJ5.js")
      }
    ),
    /* @__PURE__ */ o(
      LazyLoadModule,
      {
        dynamicImportFn: () => import("./HotkeysModule-C5CYCD3K.js")
      }
    ),
    /* @__PURE__ */ o(
      LazyLoadModule,
      {
        dynamicImportFn: () => import("./GraphicsModule-WCLND7RQ.js")
      }
    )
  ] });
};

// src/components/App.tsx
var App = () => {
  return /* @__PURE__ */ o(p, { children: [
    /* @__PURE__ */ o(SystemModules, {}),
    /* @__PURE__ */ o(
      LazyLoadComponent,
      {
        dynamicImportFn: () => import("./SomeModal-ZR2QMPN6.js")
      }
    )
  ] });
};

// src/index.tsx
P(/* @__PURE__ */ o(App, {}), document.body);

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
/// <reference types="vite/client" />

// interface ImportMeta {
//   env: Record<string, unknown>;
//   glob: any;
// }
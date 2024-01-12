import { _ as __vitePreload } from './preload-helper-C4IDU2nb.js';

const exportSet = new Set(['Module', '__esModule', 'default', '_export_sfc']);
      let moduleMap = {
"./App":()=>{
      dynamicLoadingCss(["style-hIrPaF0-.css"]);
      return __federation_import('./__federation_expose_App-ypOVH_ZA.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},};
    const seen = {};
    const dynamicLoadingCss = (cssFilePaths) => {
      const metaUrl = import.meta.url;
      if (typeof metaUrl == 'undefined') {
        console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
        return
      }
      const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf('about-mfe-entry.js'));

      cssFilePaths.forEach(cssFilePath => {
        const href = curUrl + cssFilePath;
        if (href in seen) return
        seen[href] = true;
        const element = document.head.appendChild(document.createElement('link'));
        element.href = href;
        element.rel = 'stylesheet';
      });
    };
    async function __federation_import(name) {
        return __vitePreload(() => import(name),true?__vite__mapDeps([]):void 0);
    }    const get =(module) => {
      if(!moduleMap[module]) throw new Error('Can not find remote module ' + module)
      return moduleMap[module]();
    };
    const init =(shareScope) => {
      globalThis.__federation_shared__= globalThis.__federation_shared__|| {};
      Object.entries(shareScope).forEach(([key, value]) => {
        const versionKey = Object.keys(value)[0];
        const versionValue = Object.values(value)[0];
        const scope = versionValue.scope || 'default';
        globalThis.__federation_shared__[scope] = globalThis.__federation_shared__[scope] || {};
        const shared= globalThis.__federation_shared__[scope];
        (shared[key] = shared[key]||{})[versionKey] = versionValue;
      });
    };

export { dynamicLoadingCss, get, init };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

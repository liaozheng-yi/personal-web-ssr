import { createApp } from './main';
import { renderToString } from "@vue/server-renderer";
import { setup } from "@css-render/vue3-ssr";

export const render = async (url) => {
  const { app, router,store } = createApp();
  const { collect } = setup(app);

  // set the router to the desired URL before rendering
  router.push(url);
  await router.isReady();
  
  //set asnyc function (unuseful)
  const to = router.currentRoute;
  const matchedRoute = to.value.matched;
  if (to.value.matched.length === 0) {
    return '';
  }
  const matchedComponents = [];
  matchedRoute.map((route) => {
    matchedComponents.push(...Object.values(route.components));
  });

  const asyncDataFuncs = matchedComponents.map((component) => {
    const asyncData = component.asyncData || null;
    if (asyncData) {
      const config = {
        store,
        route: to,
      };
      return asyncData(config);
    }
  });
  await Promise.all(asyncDataFuncs);

  const context = {};
  const appHtml = await renderToString(app,context);
  const cssHtml = collect();

  return {
    cssHtml,
    appHtml,
  };
};

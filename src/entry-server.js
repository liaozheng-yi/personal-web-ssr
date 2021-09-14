import { createApp } from './main';
import { renderToString } from "@vue/server-renderer";
import { setup } from "@css-render/vue3-ssr";

export const render = async (url) => {
  const { app, router,store } = createApp();
  const { collect } = setup(app);

  // set the router to the desired URL before rendering
  router.push(url);
  await router.isReady();
  
  const context = {};
  const appHtml = await renderToString(app,context);
  const cssHtml = collect();

  return {
    cssHtml,
    appHtml,
  };
};

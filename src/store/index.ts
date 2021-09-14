import { createStore as _createStore } from "vuex";

export function createStore() {
  return _createStore({
    state: {
      message: "hello vite ssr",
    },
    mutations: {},
    actions: {
      fetchMessage: ({ state }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            state.message = "hello you did";
            resolve(0);
          }, 200);
        });
      },
    },
    modules: {},
  });
}

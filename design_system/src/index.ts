import * as components from './components';
import type { App, Component } from 'vue';

const componentsList: Component = components?.default;
const QfcComponents = {
  install(app: App) {
    Object.keys(componentsList).forEach((name) => {
      app.component(name, componentsList[name]);
    });
  },
};
export default QfcComponents;

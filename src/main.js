import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify(); // 在这里创建一个Vuetify实例

const app = createApp(App);

app.use(router);
app.use(vuetify); // 在你的Vue应用中使用Vuetify

app.mount('#app');
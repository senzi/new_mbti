import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // 如果您使用了暗色主题，也可以在 dark 主题下设置
        fontFamily: 'LXGWWenKaiScreen, sans-serif',
      },
    },
  },
});
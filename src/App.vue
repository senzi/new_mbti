<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon>
        <img src="./assets/logo.png" alt="logo"/>
      </v-app-bar-nav-icon>

      <v-toolbar-title>NEW MBTI</v-toolbar-title>
      
      <v-tabs>
        <v-tab href="/">首页</v-tab>
        <v-tab href="/personality-types">性格类型</v-tab>
        <v-tab href="/personality-test">性格测试</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon>
               <router-link to="/">
                  <v-avatar size="50">
                    <v-img src="/logo.png" alt="logo"></v-img>
                  </v-avatar>
                </router-link>
      </v-app-bar-nav-icon>

      <v-toolbar-title>NEW MBTI</v-toolbar-title>
      
      <v-tabs>
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

<style>
html, body {
  max-width: 100%;
  overflow-x: auto;
}
</style>
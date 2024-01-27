<template>
<v-main>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-5" outlined tile>
          <v-card-title class="text-h5">
            Personality Test Service
          </v-card-title>
          <v-card-text>
            <p>目前阶段暂时不提供测试服务。请移步到性格类型页面查看。</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/personality-types">
              转到性格类型
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>
export default {
  name: 'PersonalityTest',
};
</script>

<style scoped>
/* 根据需要添加一些CSS样式 */
</style>
<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="pa-5 elevation-12" outlined tile>
            <v-card-title class="text-h5 text-center">
              NEW-MBTI 测试平台
            </v-card-title>
            <v-card-text>
              <p class="text-center">目前阶段暂时不提供测试服务。请移步到性格类型页面查看。</p>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary" to="/personality-types" class="my-2">
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
.v-card {
  border-radius: 16px; /* 圆角边框 */
  transition: box-shadow .25s ease-in-out; /* 平滑过渡效果 */
}

.v-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,.15); /* 鼠标悬停时增加阴影 */
}

.text-center {
  text-align: center; /* 文本居中 */
}

.v-btn {
  text-transform: none; /* 按钮文本样式不变形 */
  font-weight: 600; /* 字体加粗 */
  font-size: 1.1rem; /* 字体大小 */
}

.v-btn.my-2 {
  margin-top: 1rem; /* 按钮顶部外边距 */
  margin-bottom: 1rem; /* 按钮底部外边距 */
}

/* 覆盖 .v-row 的样式 */
.v-row {
  display: flex !important;
  flex-wrap: wrap !important;
  flex: 1 1 auto !important;
  margin: -12px !important;
  align-items: center !important;
  justify-content: space-around !important;
  align-content: space-between !important;
  flex-direction: row !important;
}

/* 覆盖 .v-card-actions 的样式 */
.v-card-actions {
  align-items: center !important;
  display: flex !important;
  flex: none !important;
  min-height: 52px !important;
  padding: 0.5rem !important;
  justify-content: space-around !important;
}

/* 响应式设计: 在较小屏幕上调整卡片padding */
@media (max-width: 600px) {
  .v-card {
    padding: 3rem 1rem !important; /* 在小屏幕上减少padding */
  }
}
</style>
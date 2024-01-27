<template>
  <v-main>
    <v-container>
      <!-- 应用的介绍，使用 flex 布局居中 -->
      <v-row justify="center">
        <v-col cols="12">
          <h1>欢迎来到NEW-MBTI平台</h1>
          <div class="text-block">
          <p class="subtitle-1">
            探索更深层次的自我，扩展你对性格维度的认识。
          </p>
          <p class="body-1">
            传统MBTI的四个维度为我们提供了性格的基础框架，而NEW-MBTI平台则在此基础上进一步，
            引入了13个维度，提供了更为丰富和细致的个性描述。
          </p>
          <p class="body-1">
            从你的社交偏好到决策风格，从你处理压力的方式到你的价值观和动机，
            NEW-MBTI将带你走进一个更宽广的性格世界，让你从不同角度了解自己。
          </p>
          <p class="body-1">
            但请记住，任何性格评估都不应定义你是谁或限制你的可能性。
            NEW-MBTI提供的维度只是帮助你更好地认识自己的工具，
            而非固定不变的标签。享受探索的过程，但不要让任何标签框定你的个性和潜力。
          </p>
          </div>
        </v-col>
      </v-row>
      
      <!-- 功能概览，卡片垂直排列 -->
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="mx-auto my-2" outlined>
            <v-card-title class="justify-center">
              <h3>性格类型</h3>
            </v-card-title>
            <v-card-text>
              了解各种性格维度及其含义。
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary" :to="{name: 'PersonalityTypes'}">了解更多</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="mx-auto my-2" outlined>
            <v-card-title class="justify-center">
              <h3>性格测试</h3>
            </v-card-title>
            <v-card-text>
              进行测试，找出你独特的新MBTI性格类型。
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary" :to="{name: 'PersonalityTest'}">参加测试</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.text-block {
  max-width: 600px; /* 或者你想要的最大宽度 */
  margin-left: auto;
  margin-right: auto;
}

.body-1 {
  text-align: justify;
  margin: 1rem 0;
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle-1 {
  text-align: center;
  margin-bottom: 2rem;
}

h3 {
  text-align: center;
  font-size: 1.5rem;
}

.v-card-text {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.v-card-actions {
  justify-content: center;
}

/* 适当的间距使得卡片在垂直方向上有一定的间隔 */
.my-2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.v-row {
  justify-content: space-around !important;
}

/* 响应式设计，卡片在不同屏幕上的宽度调整 */
@media (min-width: 600px) {
  .v-card {
    width: 100%; /* 卡片宽度根据屏幕大小调整 */
  }
}
</style>
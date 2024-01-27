<template>
  <v-main>
    <v-container>
      <!-- 为 custom-row 添加 justify-center 类以在所有屏幕尺寸上居中 -->
      <v-row class="custom-row justify-center">
        <!-- cols="12" 会使 v-col 在小屏幕上占满整个宽度，在 md 屏幕尺寸和以上居中 -->
        <v-col cols="12" md="6" lg="4">
          <!-- 添加 text-center 类使文本在其容器中居中 -->
          <h1 class="text-h4 py-4 text-center">性格类型分析</h1>
          <h2 class="text-center">({{ personalityType }})性格</h2>
          <div v-for="(description, index) in personalityDescriptions" :key="index" class="my-4">
            <v-card class="custom-card elevation-3" :class="{ 'hover-elevation-6': hover }" @mouseover="hover = true" @mouseleave="hover = false">
              <v-card-title class="custom-card-title subtitle-1">
                <h2 class="text-h5">{{ description.Title }}</h2>
              </v-card-title>
              <v-card-text class="body-1">
                <div v-for="(paragraph, pIndex) in description.Content" :key="`paragraph-${pIndex}`">
                  <p>{{ paragraph }}</p>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// 引入traits.json文件
import traitsData from '@/assets/traits.json';

export default {
  data() {
    return {
      traits: {},
      personalityType: '' ,// 初始值为空，稍后从路由获取
      hover: false // 用于控制 hover 状态
    };
  },
computed: {
  personalityDescriptions() {
    if (!this.personalityType) return [];

    return this.personalityType.split('').map(letter => {
      const trait = this.traits[letter];
      if (trait) {
        return {
          Title: trait.Title,
          // 使用 split 方法按 [下一段] 标记分割 Content
          Content: trait.Content.split('[下一段]').map(paragraph => paragraph.trim()),
        };
      }
      return {
        Title: `未知 (${letter})`,
        Content: ['没有找到对应的描述。']
      };
    });
  }
},
  methods: {
    loadTraits() {
      // 假设 JSON 文件的结构是数组形式的
      traitsData.forEach((trait) => {
        if (trait.Letter) {
          this.traits[trait.Letter] = {
            Title: trait.Title,
            Content: trait.Content
          };
        }
      });
    }
  },
  created() {
    // 从路由中获取 personalityType
    this.personalityType = this.$route.params.personalityType;
    // 加载性格特质数据
    this.loadTraits();
  }
};
</script>


<style>
  .custom-row {
    justify-content: center !important;
  }

  .custom-card-title h2 {
    color: #5c6bc0 !important; /* 修改颜色为所需值 */
    background-color: #e8eaf6; /* 添加浅色背景 */
    padding: 8px; /* 添加一些内边距 */
    border-radius: 4px; /* 轻微圆角 */
  }

  /* 设置 v-card 的最小 padding，同时设置垂直外边距 */
  .custom-card {
    padding: 16px !important; /* 示例最小值，可以根据需要更改 */
    margin-top: 8px; /* 上外边距 */
    margin-bottom: 8px; /* 下外边距 */
    transition: box-shadow 0.3s; /* 平滑阴影过渡效果 */
  }

  /* 为移动端设置特定的最小 padding */
  @media (max-width: 600px) {
    .custom-card {
      padding: 24px !important; /* 示例移动端最小值，可以根据需要更改 */
    }
  }

  /* hover 状态时增加阴影 */
  .hover-elevation-6 {
    box-shadow: 0 6px 6px -3px rgba(0,0,0,0.2), 0 10px 14px 1px rgba(0,0,0,0.14), 0 4px 18px 3px rgba(0,0,0,0.12);
  }
</style>
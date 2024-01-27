<template>
  <v-main>
    <v-container>
      <h1>你的性格类型：</h1>
      <h2 v-if="computedPersonalityType" class="personality-type">{{ computedPersonalityType }}</h2>
      <p v-else>性格类型将在选择完毕后显示。</p>
      <p v-if="computedPersonalityDescription">{{ computedPersonalityDescription }}</p>
      <!-- 生成range sliders -->
      <div v-for="(item, index) in personalityTraits" :key="index" class="my-4">
        <div class="slider-label">
          {{ item.leftText }} / {{ item.rightText }}
        </div>
        <v-slider
          v-model="item.value"
          color="orange"
          track-color="green"
          thumb-color="purple"
          thumb-label
          @change="updatePersonalityType"
        ></v-slider>
      </div>
      <div class="text-center">
        <v-btn color="red" @click="submitPersonality">提交</v-btn>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    personalityTraits: [
      {
        label: 'EI',
        leftText: 'Extraversion (外向)',
        rightText: 'Introversion (内向)',
        value: 50
      },
      {
        label: 'SN',
        leftText: 'Sensing (实感)',
        rightText: 'iNtuition (直觉)',
        value: 50
      },
      {
        label: 'TF',
        leftText: 'Thinking (思考)',
        rightText: 'Feeling (感受)',
        value: 50
      },
      {
        label: 'JP',
        leftText: 'Judging (判断)',
        rightText: 'Perceiving (感知)',
        value: 50
      },
      {
        label: 'QU',
        leftText: 'Quirky (古怪)',
        rightText: 'Uniform (一致)',
        value: 50
      },
      {
        label: 'VY',
        leftText: 'Vigilant (警觉)',
        rightText: 'YOLO (随遇而安)',
        value: 50
      },
      {
        label: 'AR',
        leftText: 'Adventurous (爱冒险)',
        rightText: 'Reserved (内敛)',
        value: 50
      },
      {
        label: 'ZL',
        leftText: 'Zealous (热情)',
        rightText: 'Laid-back (悠闲)',
        value: 50
      },
      {
        label: 'OD',
        leftText: 'Observant (观察力强)',
        rightText: 'Dreamy (多梦)',
        value: 50
      },
      {
        label: 'MB',
        leftText: 'Meticulous (一丝不苟)',
        rightText: 'Big-picture (宏观)',
        value: 50
      },
      {
        label: 'HG',
        leftText: 'Hardy (坚韧)',
        rightText: 'Gentle (温柔)',
        value: 50
      },
      {
        label: 'CK',
        leftText: 'Curious (好奇)',
        rightText: 'Knowledgeable (博学)',
        value: 50
      },
      {
        label: 'WX',
        leftText: 'Warm (热情)',
        rightText: 'X-factor (有魅力)',
        value: 50
      }
    ],
    computedPersonalityType: '',
    computedPersonalityDescription: '',
  }),
  methods: {
    updatePersonalityType() {
      // 计算性格类型
      let type = '';
      let description = [];
      for (const trait of this.personalityTraits) {
        if (trait.value === 50) continue;

        const isPositive = trait.value > 50;
        type += isPositive ? trait.label[1] : trait.label[0];

        if (isPositive) {
          description.push(trait.rightText.split(' ')[1].replace('(', '').replace(')', ''));
        } else {
          description.push(trait.leftText.split(' ')[1].replace('(', '').replace(')', ''));
        }
      }
      
      this.computedPersonalityType = type;
      this.computedPersonalityDescription = description.length ? '你是一个' + description.join('、') + '的人' : '';
    },
    submitPersonality() {
      // 检查是否有任何维度值为50%
      const hasFiftyPercent = this.personalityTraits.some(trait => trait.value === 50);
      if (hasFiftyPercent) {
        alert('所有性格维度必须明确选择，不能有值为50%的维度。');
        return;
      }
      // 导航到结果页面
      this.$router.push(`/result/${this.computedPersonalityType}`);
    },
  },
  watch: {
    // 当性格特征值变化时，实时更新性格类型和描述
    personalityTraits: {
      handler: 'updatePersonalityType',
      deep: true,
    },
  },
};
</script>

<style scoped>
.personality-type {
  text-align: center;
  margin-bottom: 20px;
}

.slider-label {
  text-align: center;
  font-weight: bold;
}

.text-center {
  text-align: center;
}

.my-4 {
  margin-top: 50px;
  margin-bottom: 50px;
}

/* 其他样式 */
</style>


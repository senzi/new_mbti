<template>
<v-main>
  <v-container>
    <!-- 应用的介绍 -->
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Welcome to the New MBTI Platform</h1>
        <p class="subtitle-1">
          Discover more about yourself with our comprehensive personality assessment.
        </p>
      </v-flex>
    </v-layout>
    
    <!-- 功能的概览 -->
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-card-title>
            <h3>Personality Types</h3>
          </v-card-title>
          <v-card-text>
            Learn about the various personality dimensions and what they mean.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" :to="{name: 'PersonalityTypes'}">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-card-title>
            <h3>Personality Test</h3>
          </v-card-title>
          <v-card-text>
            Take the test to find out your unique New MBTI personality type.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" :to="{name: 'PersonalityTest'}">Take the Test</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-main>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Add your styles here */
</style>
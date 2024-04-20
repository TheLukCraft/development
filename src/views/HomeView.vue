<template>
  <NavBar />
  <v-main class="bg-color">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-sheet rounded="lg">
            <CarouselHome />
            <MainContent />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

// Components
import NavBar from '../components/NavBar.vue';
import MainContent from '../components/Home/MainContent.vue';
import CarouselHome from '@/components/Home/CarouselHome.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    MainContent,
    CarouselHome
  },
}
</script>
<style>
.bg-color {
  background-color: #F2F2F2;
}
</style>
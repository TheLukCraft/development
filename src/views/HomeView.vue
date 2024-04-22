<template>
  <NavBar />
  <MainContent />
  <FooterGlobal />
</template>

<script>

// Components
import NavBar from '../components/NavBar.vue';
import MainContent from '@/components/Home/MainContent.vue';
import FooterGlobal from '@/components/ExperimentalComponents/FooterGlobal.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    MainContent,
    FooterGlobal,
  },
}
</script>
<script setup>
</script>
<style>
.bg-page {
  background-color: #F2F2F2;
}
</style>
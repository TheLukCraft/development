<template>
  <NavBar />
  <AboutUs />
  <AboutFAQ />
  <FooterGlobal />
</template>

<script>

// Components
import NavBar from '../components/NavBar.vue';
import AboutUs from '../components/About/AboutUs.vue';
import AboutFAQ from '../components/About/AboutFAQ.vue';
import FooterGlobal from '@/components/ExperimentalComponents/FooterGlobal.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    AboutUs,
    AboutFAQ,
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
<template>
    <NavBar />
    <ArticlesPage />
    <FooterGlobal />
</template>

<script>

// Components
import NavBar from '../components/NavBar.vue';
import ArticlesPage from '../components/Articles/ArticlesPage.vue';
import FooterGlobal from '@/components/ExperimentalComponents/FooterGlobal.vue';

export default {
    name: 'ArticlesView',
    components: {
        NavBar,
        ArticlesPage,
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
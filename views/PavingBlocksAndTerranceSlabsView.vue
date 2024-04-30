<template>
    <NavBar />
    <PBATSText />
    <PBATSGallery />
    <GalleryPage2 />
    <FooterGlobal />
</template>

<script>

// Components
import NavBar from '../components/NavBar.vue';
import PBATSText from '@/components/PBATS/PBATSText.vue';
import PBATSGallery from '@/components/PBATS/PBATSGallery.vue';
import GalleryPage2 from '@/components/ExperimentalComponents/GalleryPage2.vue';
import FooterGlobal from '@/components/ExperimentalComponents/FooterGlobal.vue';

export default {
    name: 'PavingBlocksAndTerranceSlabsView',
    components: {
        NavBar,
        PBATSText,
        PBATSGallery,
        GalleryPage2,
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
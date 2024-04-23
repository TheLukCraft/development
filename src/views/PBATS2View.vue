<template>
    <NavBar />
    <PBATSText2 />
    <ContactUs />
    <PBATSText3 />
    <PBATSGallery />
    <FooterGlobal />
</template>

<script>

// Components
import NavBar from '../components/NavBar.vue';
import PBATSText2 from '@/components/PBATS/PBATSText2.vue';
import ContactUs from '@/components/ContactUs.vue';
import PBATSText3 from '@/components/PBATS/PBATSText3.vue';
import PBATSGallery from '@/components/PBATS/PBATSGallery.vue';
import FooterGlobal from '@/components/ExperimentalComponents/FooterGlobal.vue';

export default {
    name: 'PBATS2View',
    components: {
        NavBar,
        PBATSText2,
        ContactUs,
        PBATSText3,
        PBATSGallery,
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
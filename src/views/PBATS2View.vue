<template>
    <NavBar v-if="isLargeScreen" />
    <NavBarMobile v-else />
    <PBATSText2 />
    <ContactUs />
    <PBATSText3 />
    <v-container>
        <ArticlesCarousel />
        <ArticlesCarouselMobile />
    </v-container>
    <PBATSGallery />
    <FooterGlobal />
</template>

<script>

// Components
import NavBar from '../components/NavBar.vue';
import NavBarMobile from '../components/NavBarMobile.vue';
import PBATSText2 from '@/components/PBATS/PBATSText2.vue';
import ContactUs from '@/components/ContactUs.vue';
import PBATSText3 from '@/components/PBATS/PBATSText3.vue';
import ArticlesCarousel from '@/components/ExperimentalComponents/ArticlesCarousel.vue';
import ArticlesCarouselMobile from '@/components/ExperimentalComponents/ArticlesCarouselMobile.vue';
import PBATSGallery from '@/components/PBATS/PBATSGallery.vue';
import FooterGlobal from '@/components/ExperimentalComponents/FooterGlobal.vue';

export default {
    name: 'PBATS2View',
    components: {
        NavBar,
        NavBarMobile,
        PBATSText2,
        ContactUs,
        PBATSText3,
        ArticlesCarousel,
        ArticlesCarouselMobile,
        PBATSGallery,
        FooterGlobal,
    },
    data() {
        return {
            isLargeScreen: false, // Początkowo zakładamy, że ekran nie jest szeroki
        };
    },
    mounted() {
        // Sprawdzanie szerokości ekranu po zamontowaniu komponentu
        this.checkScreenWidth();
        // Słuchanie zmian szerokości ekranu
        window.addEventListener('resize', this.checkScreenWidth);
    },
    beforeUnmount() {
        // Usunięcie słuchacza zdarzeń przed usunięciem komponentu
        window.removeEventListener('resize', this.checkScreenWidth);
    },
    methods: {
        checkScreenWidth() {
            // Sprawdzenie szerokości ekranu i ustawienie odpowiedniego flaga
            this.isLargeScreen = window.innerWidth >= 960; // Ustawienie wartości na podstawie własnych kryteriów
        },
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
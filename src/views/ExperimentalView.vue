<template>
    <NavBar />
    <v-main class="bg-page">
        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <v-sheet rounded="lg">
                        <ExperimentalComponents />
                        <CompanyCard />
                        <ArticlesCarousel />
                        <CookiesInfo />
                        <WhyUs />
                        <CompanyAchievements />
                        <BlogPage />
                        <FAQ />
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>

// Components
import NavBar from '../components/NavBar.vue';
import CompanyCard from '../components/ExperimentalComponents/CompanyCard.vue';
import ArticlesCarousel from '../components/ExperimentalComponents/ArticlesCarousel.vue';
import CookiesInfo from '../components/ExperimentalComponents/CookiesInfo.vue';
import WhyUs from '../components/ExperimentalComponents/WhyUs.vue';
import CompanyAchievements from '../components/ExperimentalComponents/CompanyAchievements.vue';
import BlogPage from '../components/ExperimentalComponents/BlogPage.vue';
import FAQ from '../components/ExperimentalComponents/FAQ.vue';
import ExperimentalComponents from '@/components/ExperimentalComponents.vue';

export default {
    name: 'ExperimentalView',
    components: {
        NavBar,
        ExperimentalComponents,
        CompanyCard,
        ArticlesCarousel,
        CookiesInfo,
        WhyUs,
        CompanyAchievements,
        BlogPage,
        FAQ,
    },
}
</script>
<style>
.bg-page {
    background-color: #F2F2F2;
}

.bg-section {
    background-color: #D2F2C9
}

.headliner-color {
    color: #1E403C;
}
</style>
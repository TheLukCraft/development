<template>
    <NavBar />
    <v-main class="bg-page">
        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <v-sheet rounded="lg">
                        <PavingBlocksContent />
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
import PavingBlocksContent from '../components/PavingBlocksAndTerranceSlabs/PavingBlocksContent.vue';
import CompanyCard from '../components/CompanyCard.vue';
import ArticlesCarousel from '../components/ArticlesCarousel.vue';
import CookiesInfo from '../components/CookiesInfo.vue';
import WhyUs from '../components/WhyUs.vue';
import CompanyAchievements from '../components/CompanyAchievements.vue';
import BlogPage from '../components/BlogPage.vue';
import FAQ from '../components/FAQ.vue';

export default {
    name: 'PavingBlocksAndTerranceSlabs',
    components: {
        NavBar,
        PavingBlocksContent,
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
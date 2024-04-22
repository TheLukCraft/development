<template>
    <v-container class="bg-section">
        <v-img id="CompanyAchievementImg" height="250" class="w-100" cover
            src="https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div class="overlay"></div>
            <div class="text-overlay">

                <v-row justify="space-around">
                    <v-col v-for="n in 4" :key="n" cols="3">
                        <v-row class="justify-center" align-center>
                            <v-col cols="6" class="d-flex justify-center align-center">

                            </v-col>
                            <v-col cols="6" class="text-center d-flex align-center">
                                <v-icon size="36">mdi-account</v-icon>
                                <div class="display-1"> 600</div>
                                <v-divider :style="{ backgroundColor: 'green' }"></v-divider>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">

                            </v-col>
                            <v-col cols="6" class="text-center">
                                tekst
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

            </div>
        </v-img>
    </v-container>
</template>
<script setup>
</script>
<script>
export default {
    name: 'AboutAchievements',
}
</script>
<style>
#CompanyAchievementImg .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    filter: blur(2px) brightness(70%);
}

#CompanyAchievementImg .text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    z-index: 10;
    font-size: 2rem;
}

#CompanyAchievementImg {
    position: relative;
}

.display-1 {
    font-size: 2.25rem;
    /* Ustawia większy rozmiar tekstu dla liczb */
}
</style>
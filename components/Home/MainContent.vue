<template>
    <v-container class="d-flex">
        <v-col cols="12" md="12">
            <v-row class="align-center justify-center">
                <h3 class="text-h3 text-high-emphasis"><span class="header2">Przemień swój dom </span> w brukowaną oazę
                </h3>
                <h5 class="text-h5 text-medium-emphasis">Oto usługi, które oferujemy dla Ciebie</h5>
            </v-row>
            <v-row>
                <v-col cols="4" md="4">
                    <v-img :width="300" aspect-ratio="16/9" cover src="img\cobblestone.png"></v-img>
                    <h5 class="text-h5 header2 font-weight-bold d-flex justify-center">Kostka brukowa</h5>
                </v-col>
                <v-col cols="4" md="4">

                </v-col>
                <v-col cols="4" md="4">
                    <v-img :width="300" aspect-ratio="16/9" cover src="img\fence.png"></v-img>
                    <h5 class="text-h5 header2 font-weight-bold d-flex justify-center">Ogrodzenia</h5>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4" md="4">

                </v-col>
                <v-col cols="4" md="4">
                    <v-img :width="500" aspect-ratio="16/9" cover src="img\logo_no_bg.png"></v-img>
                </v-col>
                <v-col cols="4" md="4">

                </v-col>
            </v-row>
            <v-row class="align-center justify-center">
                <v-col cols="4" md="4">
                    <v-img :width="200" aspect-ratio="16/9" cover src="img\bio-climatic.png"></v-img>
                    <h5 class="text-h5 header2 font-weight-bold d-flex justify-center">Pergole Aluminiowe Bioklimatyczne
                    </h5>
                </v-col>
                <v-col cols="4" md="4">

                </v-col>
                <v-col cols="4" md="4">
                    <v-img :width="300" aspect-ratio="16/9" cover src="img\house.png"></v-img>
                    <h5 class="text-h5 header2 font-weight-bold d-flex justify-center">Domy z keramzytobetonu</h5>
                </v-col>
            </v-row>
        </v-col>
    </v-container>
</template>
<script setup>
</script>
<script>
export default {
    name: 'MainContent',
}
</script>
<style>
@import "/public/css/globalStyles.css";

.image-container {
    max-width: 300px;
    margin: auto;
}

.image-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.text-center {
    text-align: center;
    padding-top: 20px;
}
</style>
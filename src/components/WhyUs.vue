<template>
    <v-container>
        <v-row class="d-flex justify-space-around">
            <v-col cols="7" md="7">
                <h3 class="text-h3"><span class="text-green-darken-3">Czemu</span> akurat my?</h3>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor
                    tellus
                    sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                </p>
            </v-col>
            <v-col cols="3" md="3" class="d-flex ">
                <v-img :width="300" aspect-ratio="16/9" cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="3" md="3" class="d-flex flex-direction-row">
                <v-col cols="4" md="4">
                    <v-icon size="x-large" style="color: green;" icon="mdi-clock-time-eight"></v-icon>
                </v-col>
                <v-col cols="8" md="8">
                    <v-row>
                        <p class="text-subtitle-2"> Jakiś tekst tutaj
                        </p>
                    </v-row>
                    <v-row>
                        <p>dalsza część</p>
                    </v-row>
                </v-col>
                <v-col cols="4" md="4">
                    <v-icon size="x-large" style="color: green;" icon="mdi-store"></v-icon>
                </v-col>
                <v-col cols="8" md="8">
                    <v-row>
                        <p class="text-subtitle-2"> Jakiś tekst tutaj
                        </p>
                    </v-row>
                    <v-row>
                        <p>dalsza część</p>
                    </v-row>
                </v-col>
            </v-col>
            <v-col cols="4" md="4">
            </v-col>
            <v-col cols="3" md="3">
            </v-col>
            <v-col cols="3" md="3" class="d-flex flex-direction-row">
                <v-col cols="4" md="4">
                    <v-icon size="x-large" style="color: green;" icon="mdi-truck-delivery"></v-icon>
                </v-col>
                <v-col cols="8" md="8">
                    <v-row>
                        <p class="text-subtitle-2"> Jakiś tekst tutaj
                        </p>
                    </v-row>
                    <v-row>
                        <p>dalsza część</p>
                    </v-row>
                </v-col>

                <v-col cols="4" md="4">
                    <v-icon size="x-large" style="color: green;" icon="mdi-package-variant"></v-icon>
                </v-col>
                <v-col cols="8" md="8">
                    <v-row>
                        <p class="text-subtitle-2"> Jakiś tekst tutaj
                        </p>
                    </v-row>
                    <v-row>
                        <p>dalsza część</p>
                    </v-row>
                </v-col>
            </v-col>
            <v-col cols="4" md="4">
            </v-col>
            <v-col cols="3" md="3">


            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
</script>
<script>
export default {
    name: 'ArticlesCarousel',
}
</script>
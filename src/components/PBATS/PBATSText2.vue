<template>
    <div>
        <v-container>
            <v-sheet>
                <v-col cols="12" md="12">
                    <v-row class="d-flex">
                        <v-col cols="4" md="4">
                            <v-img :width="300" aspect-ratio="16/9" cover src="/img/james-kovin.png"></v-img>
                        </v-col>
                        <v-col cols="8" md="8" class="">
                            <h3 class="text-h3 text-high-emphasis"><span class="header2">GORMI</span><span
                                    class="header"> prosty wybór</span></h3>
                            <div class="py-md-4 "></div>
                            <p class="text-medium-emphasis text-justify">Jesteśmy liderami na rynku kostki brukowej,
                                oferując produkty niezrównanej jakości. Nasza kostka jest trwała, estetycznie wykonana i
                                dostępna w różnorodnych wzorach, idealnie komponujących się z każdym otoczeniem.
                                Stosujemy nowoczesne technologie, aby nasze produkty służyły przez lata, niezależnie od
                                warunków atmosferycznych.
                            </p>
                            <div class="py-md-4 "></div>
                            <v-row>
                                <v-col cols="1" md="1" class="d-flex align-center justify-center">
                                    <v-icon class="icon-color" size="x-large" icon="mdi-truck-fast"></v-icon>
                                </v-col>
                                <v-col cols="4" md="4">
                                    <h6 class="text-h6 text-high-emphasis">Szybka realizacja</h6>
                                    <div class="py-md-1 "></div>
                                    <p class="text-medium-emphasis">Nasze procesy produkcyjne i logistyczne są
                                        zoptymalizowane, by dostarczać produkty zawsze na czas.
                                    </p>
                                </v-col>
                                <v-col cols="1" md="1">
                                    <!-- vertical break -->
                                </v-col>
                                <v-col cols="1" md="1" class="d-flex align-center justify-center">
                                    <v-icon class="icon-color" size="x-large" icon="mdi-shield-check"></v-icon>
                                </v-col>
                                <v-col cols="4" md="4">
                                    <h6 class="text-h6 text-high-emphasis">Profesjonalna dostawa</h6>
                                    <div class="py-md-1 "></div>
                                    <p class="text-medium-emphasis">Zarządzamy własnym transportem, zapewniając
                                        bezpieczne i terminowe dostawy bezpośrednio do klienta.
                                    </p>
                                </v-col>
                            </v-row>
                            <div class="py-md-6 "></div>
                            <v-row>
                                <v-col cols="1" md="1" class="d-flex align-center justify-center">
                                    <v-icon class="icon-color" size="x-large" icon="mdi-view-grid"></v-icon>
                                </v-col>
                                <v-col cols="4" md="4">
                                    <h6 class="text-h6 text-high-emphasis">Różnorodność produktów</h6>
                                    <div class="py-md-1 "></div>
                                    <p class="text-medium-emphasis">Oferujemy szeroką gamę produktów, umożliwiającą
                                        wybór idealnej kostki na każdy projekt.
                                    </p>
                                </v-col>
                                <v-col cols="1" md="1">
                                    <!-- vertical break -->
                                </v-col>
                                <v-col cols="1" md="1" class="d-flex align-center justify-center">
                                    <v-icon class="icon-color" size="x-large" icon="mdi-map-marker-multiple"></v-icon>
                                </v-col>
                                <v-col cols="4" md="4">
                                    <h6 class="text-h6 text-high-emphasis">Dostępność w PL</h6>
                                    <div class="py-md-1 "></div>
                                    <p class="text-medium-emphasis">Dzięki rozbudowanej sieci dystrybucji, nasze
                                        produkty są łatwo dostępne na terenie całego kraju.
                                    </p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-sheet>
        </v-container>
    </div>
</template>
<script>

export default {
    name: 'PBATSText2',
}
</script>
<script setup>
</script>
<style>
@import "/public/css/globalStyles.css";
</style>

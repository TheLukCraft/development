<template>
    <div>
        <v-container>
            <v-sheet>
                <v-col cols="12" md="12">
                    <v-row class="d-flex">
                        <v-col class="order-md-1 d-flex align-center justify-center" cols="4" md="4">
                            <v-img :width="800" aspect-ratio="1" cover src="/img/hunters-race.png"></v-img>
                        </v-col>
                        <v-col class="order-md-0" cols="8" md="8">
                            <h3 class="text-h3 text-high-emphasis"><span class="header2">Czemu </span><span
                                    class="header">akurat my?
                                </span></h3>
                            <div class="py-md-4 "></div>
                            <p class="text-medium-emphasis text-justify">Jesteśmy liderami na rynku kostki brukowej,
                                zapewniając produkty najwyższej jakości. Nasza kostka brukowa jest trwała, estetyczna i
                                dostępna w różnorodnych wzorach, idealnie pasujących do każdego otoczenia. Dzięki
                                zaawansowanej technologii produkcji, zapewniamy wyroby, które wytrzymają lata, bez
                                względu na warunki atmosferyczne.</p>
                            <div class="py-md-4 "></div>
                            <v-row>
                                <v-col cols="1" md="1" class="d-flex align-center justify-center">
                                    <v-icon class="icon-color" size="x-large" icon="mdi-truck-fast"></v-icon>
                                </v-col>
                                <v-col cols="4" md="4">
                                    <h6 class="text-h6 text-high-emphasis">Szybka realizacja zamówień</h6>
                                    <div class="py-md-1 "></div>
                                    <p class="text-medium-emphasis">Nasze procesy logistyczne i produkcyjne są
                                        zoptymalizowane, by dostarczać produkty na czas.</p>
                                </v-col>
                                <v-col cols="1" md="1">
                                    <!-- vertical break -->
                                </v-col>
                                <v-col cols="1" md="1" class="d-flex align-center justify-center">
                                    <v-icon class="icon-color" size="x-large" icon="mdi-map-marker-multiple"></v-icon>
                                </v-col>
                                <v-col cols="4" md="4">
                                    <h6 class="text-h6 text-high-emphasis">Sklepy i punkty dystrybucji</h6>
                                    <div class="py-md-1 "></div>
                                    <p class="text-medium-emphasis">Posiadamy rozbudowaną sieć sprzedaży, co ułatwia
                                        dostęp do naszych produktów na terenie Polski.</p>
                                </v-col>
                            </v-row>
                            <div class="py-md-6 "></div>
                            <v-row>
                                <v-col cols="1" md="1" class="d-flex align-center justify-center">
                                    <v-icon class="icon-color" size="x-large" icon="mdi-truck-delivery"></v-icon>
                                </v-col>
                                <v-col cols="4" md="4">
                                    <h6 class="text-h6 text-high-emphasis">Profesjonalna dostawa</h6>
                                    <div class="py-md-1 "></div>
                                    <p class="text-medium-emphasis">Zarządzamy własnym transportem, zapewniając
                                        bezpieczne i terminowe dostawy bezpośrednio do klienta.</p>
                                </v-col>
                                <v-col cols="1" md="1">
                                    <!-- vertical break -->
                                </v-col>
                                <v-col cols="1" md="1" class="d-flex align-center justify-center">
                                    <v-icon class="icon-color" size="x-large" icon="mdi-view-grid"></v-icon>
                                </v-col>
                                <v-col cols="4" md="4">
                                    <h6 class="text-h6 text-high-emphasis">Różnorodność produktów</h6>
                                    <div class="py-md-1 "></div>
                                    <p class="text-medium-emphasis">Oferujemy szeroką gamę produktów, umożliwiając
                                        klientom wybór idealnej kostki na każdy projekt.</p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-sheet>
        </v-container>
    </div>
</template>
<script setup>
</script>
<script>
export default {
    name: 'AboutUs',
}
</script>
<style>
@import "/public/css/globalStyles.css";
</style>
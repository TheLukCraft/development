<template>
    <v-container class="bg-section">
        <v-row class="d-flex">
            <v-col cols="7" md="7">
                <h3 class="text-h3"><span class="text-green-darken-3">Czemu</span> akurat my?</h3>
                <br />
                <p>Jesteśmy liderami na rynku kostki brukowej, zapewniając produkty najwyższej jakości. Nasza kostka
                    brukowa jest trwała, estetyczna i dostępna w różnorodnych wzorach, idealnie pasujących do każdego
                    otoczenia. Dzięki zaawansowanej technologii produkcji, zapewniamy wyroby, które wytrzymają lata,
                    bez względu na warunki atmosferyczne.
                </p>
            </v-col>
            <!-- <v-col cols="3" md="3" class="d-flex ">
                <v-img :width="300" aspect-ratio="16/9" cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
            </v-col> -->
        </v-row>
        <v-row class="d-flex">
            <v-col cols="3" md="3" class="d-flex flex-direction-row">
                <v-col cols="4" md="4">
                    <v-icon size="x-large" style="color: green;" icon="mdi-clock-time-eight"></v-icon>
                </v-col>
                <v-col cols="8" md="8">
                    <v-row>
                        <p class="text-subtitle-2"> Szybka realizacja zamówień
                        </p>
                    </v-row>
                    <v-row>
                        <p>Nasze procesy logistyczne i produkcyjne są zoptymalizowane, by dostarczać produkty na czas.
                        </p>
                    </v-row>
                </v-col>
                <v-col cols="4" md="4">
                    <v-icon size="x-large" style="color: green;" icon="mdi-store"></v-icon>
                </v-col>
                <v-col cols="8" md="8">
                    <v-row>
                        <p class="text-subtitle-2"> Sklepy i punkty dystrybucji
                        </p>
                    </v-row>
                    <v-row>
                        <p>Posiadamy rozbudowaną sieć sprzedaży, co ułatwia dostęp do naszych produktów na terenie
                            Polski.
                        </p>
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
                        <p class="text-subtitle-2"> Profesjonalna dostawa
                        </p>
                    </v-row>
                    <v-row>
                        <p>Zarządzamy własnym transportem, zapewniając bezpieczne i terminowe dostawy bezpośrednio do
                            klienta.</p>
                    </v-row>
                </v-col>

                <v-col cols="4" md="4">
                    <v-icon size="x-large" style="color: green;" icon="mdi-package-variant"></v-icon>
                </v-col>
                <v-col cols="8" md="8">
                    <v-row>
                        <p class="text-subtitle-2"> Różnorodność produktów
                        </p>
                    </v-row>
                    <v-row>
                        <p>Oferujemy szeroką gamę produktów, umożliwiając klientom wybór idealnej kostki na każdy
                            projekt.</p>
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
    name: 'AboutUs',
}
</script>
<style>
@import "/public/css/globalStyles.css";
</style>
<template>
    <div class="bg-page">
        <v-container class="bg-section">
            <v-row>
                <v-col cols="12" md="12">
                    <v-sheet rounded="lg" class="bg-section">
                        <v-container>
                            <v-sheet rounded="lg" class="bg-section">
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-img min-height="100" max-height="300" aspect-ratio="16/9" cover
                                            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                                            <h2 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
                                                class="d-flex justify-center text-h2 text-high-emphasis header">Kostka
                                                Brukowa</h2>
                                        </v-img>
                                        <br />
                                    </v-col>

                                </v-row>
                                <v-row>
                                </v-row>
                                <v-row class="d-flex  justify-space-around">
                                    <v-col cols="7" md="7">

                                        <div class="text-medium-emphasis">
                                            <p class="text-justify ">
                                                Kostka brukowa

                                                Kostka brukowa to popularny materiał wykorzystywany do budowy dróg,
                                                chodników, alejek czy placów. Znana jest ze swojej trwałości i estetyki,
                                                co sprawia, że jest często wybierana zarówno do zastosowań publicznych,
                                                jak i prywatnych. Kostka produkowana jest z różnych materiałów, w tym z
                                                betonu, kamienia naturalnego lub klinkieru, oferując szeroką gamę
                                                kształtów, rozmiarów i kolorów. Montaż kostki brukowej nie jest
                                                skomplikowany, ale wymaga precyzyjnego przygotowania podłoża oraz
                                                umiejętności prawidłowego układania, aby zapewnić jej równość i
                                                trwałość. Kostka brukowa, dzięki swojej modułowości i różnorodności,
                                                umożliwia tworzenie unikatowych i funkcjonalnych przestrzeni.</p>
                                            <br />
                                            <p><v-icon style="color: icon-color;" icon="mdi-thumb-up"></v-icon>
                                                Wytrzymała na warunki atmosferyczne</p>
                                            <p><v-icon style="color: icon-color;" icon="mdi-recycle"></v-icon>
                                                Ekologiczna</p>
                                            <p><v-icon style="color: icon-color;" icon="mdi-palette"></v-icon>
                                                Szeroka gama kolorów i wzorów</p>
                                            <br />
                                        </div>
                                    </v-col>
                                    <v-col cols="5" md="5" class="d-flex flex-direction: column">
                                        <v-img class="justify-center" :width="300" aspect-ratio="16/9" cover
                                            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7" md="7">
                                        <h5 class="text-h5 text-high-emphasis header">Dlaczego warto?</h5>
                                        <br>
                                        <div class="text-medium-emphasis">
                                            <p class="text-justify">Kostka brukowa to znakomity wybór dla tych, którzy
                                                cenią sobie trwałość oraz estetyczny wygląd swojej posesji. Dzięki
                                                odporności na warunki atmosferyczne i intensywne użytkowanie, kostka
                                                jest bardzo praktycznym rozwiązaniem w miejskich i wiejskich
                                                krajobrazach. Zastosowanie odpowiedniej techniki układania pozwala na
                                                stworzenie powierzchni, która będzie służyła przez wiele lat bez
                                                potrzeby częstej renowacji. Ponadto, możliwość recyklingu użytych
                                                materiałów czyni kostkę brukową wyborem przyjaznym dla środowiska.</p>
                                            <br />
                                            <v-img class="justify-center" aspect-ratio="16/9" cover
                                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                                            <br />
                                            <h5 class="text-h5 text-high-emphasis header">Gdzie warto stosować kostkę
                                                brukową?</h5>
                                            <br>
                                            <p class="text-justify text-medium-emphasis">Kostka brukowa, ze względu na
                                                swoje właściwości, jest często wykorzystywana w miejscach, które
                                                wymagają solidnej i estetycznej nawierzchni. Jest to idealne rozwiązanie
                                                zarówno do nowoczesnych, jak i tradycyjnych projektów
                                                architektonicznych. Przy odpowiedniej pielęgnacji i konserwacji, kostka
                                                brukowa może zachować swoje piękno i funkcjonalność przez
                                                dziesięciolecia. Możliwości zastosowania tego materiału są niemal
                                                nieograniczone, co sprawia, że kostka brukowa nieustannie cieszy się
                                                dużą popularnością na rynku budowlanym.
                                            </p>
                                            <br />

                                            <v-row>
                                                <v-col cols="6" md="6">
                                                    <p><v-icon style="color: icon-color;"
                                                            icon="mdi-check-circle"></v-icon>
                                                        Jakiś tekst tutaj
                                                    </p>
                                                    <p><v-icon style="color: icon-color;"
                                                            icon="mdi-check-circle"></v-icon>
                                                        Jakiś tekst tutaj
                                                    </p>
                                                </v-col>
                                                <v-col cols="6" md="6">
                                                    <p><v-icon style="color: icon-color;"
                                                            icon="mdi-check-circle"></v-icon>
                                                        Jakiś tekst tutaj
                                                    </p>
                                                    <p><v-icon style="color: icon-color;"
                                                            icon="mdi-check-circle"></v-icon>
                                                        Jakiś tekst tutaj
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-sheet>
                        </v-container>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    name: 'PBATSText',
}
</script>
<script setup>
</script>
<style>
@import "/public/css/globalStyles.css";
</style>
<template>
    <v-carousel show-arrows="hover">
        <v-carousel-item cover>
            <v-row class="d-flex justify-space-around">
                <v-col cols="4" md="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card class="mx-auto" max-width="400" v-bind="props">
                            <v-card-title class="wrap-text">Kostka brukowa a płyty tarasowe: Porównanie
                                materiałów</v-card-title>
                            <v-img class="align-end text-white" height="200" src="img\niklas.jpg" cover>
                            </v-img>



                            <v-card-text>
                                <div>Zbadaj różnice w wytrzymałości, estetyce i kosztach między kostką brukową a płytami
                                    tarasowymi, aby pomóc właścicielom domów w wyborze najlepszego rozwiązania.</div>
                            </v-card-text>
                            <v-overlay :model-value="isHovering" class="align-center justify-center" scrim="#036358"
                                contained>
                                <v-btn variant="flat">Czytaj dalej</v-btn>
                            </v-overlay>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="4" md="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card class="mx-auto" max-width="400" v-bind="props">
                            <v-card-title class="wrap-text">Płyty tarasowe: Idealne rozwiązanie dla Twojego
                                ogrodu</v-card-title>
                            <v-img class="align-end text-white" height="200" src="img\martina-jorden.jpg" cover>
                            </v-img>



                            <v-card-text>
                                <div>Odkryj zalety płyt tarasowych, w tym ich trwałość, estetykę oraz łatwość montażu,
                                    idealne dla każdego, kto pragnie stworzyć wyjątkową przestrzeń na zewnątrz.</div>
                            </v-card-text>
                            <v-overlay :model-value="isHovering" class="align-center justify-center" scrim="#036358"
                                contained>
                                <v-btn variant="flat">Czytaj dalej</v-btn>
                            </v-overlay>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="4" md="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card class="mx-auto" max-width="400" v-bind="props">
                            <v-card-title class="wrap-text">
                                Kruszywo dekoracyjne: Elegancja w ogrodzie</v-card-title>
                            <v-img class="align-end text-white" height="200" src="img\william-warby.jpg" cover>
                            </v-img>



                            <v-card-text>
                                <div>Zapoznaj się z funkcjonalnością i estetyką kruszywa dekoracyjnego, które dodaje
                                    charakteru i stylu do każdej przestrzeni zewnętrznej.</div>
                            </v-card-text>
                            <v-overlay :model-value="isHovering" class="align-center justify-center" scrim="#036358"
                                contained>
                                <v-btn variant="flat">Czytaj dalej</v-btn>
                            </v-overlay>
                        </v-card>
                    </v-hover>
                </v-col>




            </v-row>
        </v-carousel-item>

        <v-carousel-item cover>

        </v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
    </v-carousel>
</template>
<script setup>
</script>
<script>
export default {
    name: 'ArticlesCarousel',
}
</script>
<style>
@import "/public/css/globalStyles.css";

.wrap-text {
    white-space: normal;
}

.v-carousel__controls {
    display: none;
}
</style>
<template>
    <v-container class="d-flex">
        <v-col cols="6" md="6">
            <h3 class="text-h3 text-high-emphasis"><span class="header2">Dlaczego wybrać </span> nasze płyty tarasowe?
            </h3>
            <div class="ma-md-8"></div>
            <p class="text-medium-emphasis">Jesteśmy wiodącym dostawcą płyt tarasowych, które są nie tylko trwałe i
                estetyczne, ale także dostępne w wielu wzorach, idealnie pasujących do różnorodnych przestrzeni
                zewnętrznych. Nasze płyty są wyprodukowane z wykorzystaniem nowoczesnych technologii, co gwarantuje ich
                długotrwałą jakość i odporność na zmienne warunki atmosferyczne.
            </p>
            <div class="ma-md-5"></div>
            <p class="text-h6 font-weight-medium"><v-icon class="icon-color icon-text" icon="mdi mdi-palette"
                    size="x-large"></v-icon> Elastyczność projektowa
                Access</p>
            <div class="ma-md-2"></div>
            <p class="text-h6 font-weight-medium"><v-icon class="icon-color icon-text" icon="mdi mdi-weather-sunny"
                    size="x-large"></v-icon> Wytrzymałość na warunki atmosferyczne
                Access</p>
            <div class="ma-md-2"></div>
            <p class="text-h6 font-weight-medium"><v-icon class="icon-color icon-text" icon="mdi mdi-toolbox"
                    size="x-large"></v-icon> Prosty montaż
                Access</p>

        </v-col>
        <v-col cols="6" md="6" class="d-flex justify-end align-self-start">
            <v-img class="centered-image" :width="100" aspect-ratio="1.3" cover src="/img/james-kovin.png"></v-img>
        </v-col>
    </v-container>
</template>
<script>

export default {
    name: 'PBATSText3',
}
</script>
<script setup>
</script>
<style>
@import "/public/css/globalStyles.css";

.centered-image {
    max-width: 100%;
    /* dostosuj maksymalną szerokość według potrzeb */
    height: auto;
    /* utrzymuje proporcje obrazu */
}
</style>

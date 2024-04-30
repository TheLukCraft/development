<template>
    <div class=" d-none d-md-block">
        <v-system-bar class="white">
            <v-spacer></v-spacer>
            <v-icon icon="mdi mdi-facebook" class="ms-2"></v-icon>
            <v-icon icon="mdi mdi-instagram" class="ms-2"></v-icon>
            <v-icon icon="mdi mdi-youtube" class="ms-2"></v-icon>
        </v-system-bar>
        <v-app-bar height="100" flat>
            <v-app-bar-title>
                <v-img class="logo-gormi" src="https://i.imgur.com/h4D2HPH.png"></v-img>
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-card color="#f2f2f2" flat outlined height="50" width="500" class="mt-6 pt-1">
                <v-row>
                    <v-col cols="12" sm="10">
                        <v-text-field density="compact" placeholder="Wyszukaj" variant="" class="header"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2">
                        <v-icon color="#1e403c" icon="mdi mdi-magnify" size="large" class="mt-2 ml-4"></v-icon>
                    </v-col>
                </v-row>
            </v-card>

            <v-spacer></v-spacer>
            <div>
                <span class="ml-4 text-caption header">Ulubione</span><br />
                <v-btn append-icon="mdi mdi-heart-outline" class="account header">
                    Lista życzeń
                    <template v-slot:append>
                        <v-icon></v-icon>
                    </template>
                </v-btn>
            </div>
            <v-divider vertical inset class="mr-6"></v-divider>
            <div>
                <span class="ml-4 text-caption header">Zaloguj/Zarejestruj </span><br />
                <v-btn append-icon="mdi mdi-lock-open-outline" class="account header">
                    Moje konto
                    <template v-slot:append>
                        <v-icon></v-icon>
                    </template>
                </v-btn>
            </div>
            <v-divider vertical inset class="mr-6"></v-divider>
            <v-icon class="mr-10 header">mdi mdi-shopping-outline</v-icon>
        </v-app-bar>
        <v-app-bar height="50" flat color="#5aa646 ">
            <v-btn variant="text" color="#1e403c"> Strona główna </v-btn>
            <v-btn variant="text" class="account"> Sklep </v-btn>
            <v-btn variant="text" class="account"> Kostka brukowa i Płyty Tarasowe </v-btn>
            <v-btn variant="text" class="account"> Ogrodzenia </v-btn>
            <v-btn variant="text" class="account"> Pergole Aluminiowe Bioklimatyczne </v-btn>
            <v-btn variant="text" class="account"> Domy z keramzytobetonu </v-btn>
            <v-btn variant="text" class="account"> Kontakt </v-btn>
            <v-spacer></v-spacer>
            <!-- <v-btn density="comfortable" icon="mdi mdi-phone" class="phone mr-2"></v-btn>
        <div>
            <span class="text-caption">Zadzwoń</span><br />
            <span class="text-grey text-caption mr-2">534-970-120</span>
        </div> -->
        </v-app-bar>
    </div>
</template>

<script setup>


</script>

<script>
export default {
    name: 'NavBar',
    data: () => ({
        links: [
            'Dashboard',
            'Messages',
            'Profile',
            'Updates',
        ],
    }),
}
</script>
<style>
@import "/public/css/globalStyles.css";

.logo-gormi {
    max-height: 100px;
}

.white {
    background-color: white;
}
</style>
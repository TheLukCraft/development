<template>
    <v-container class="d-flex">
        <v-col cols="8" md="8">
            <h3 class="text-h3"><span class="text-green-darken-3">Pytania</span> i Odpowiedzi</h3>
            <br />
            <v-expansion-panels v-model="panel">
                <v-expansion-panel readonly>
                    <v-expansion-panel-title>
                        Dlaczego my?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <br />
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                        Korzyści usługowe
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <br />
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                        Jak działamy?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <br />
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                        Gdzie znajdują się nasze sklepy?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <br />
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                        Co sądzą o nas klienci?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
        <div class="d-flex align-center  flex-direction: column">
            <v-col>
                <h5 class="text-h5 mb-md-10"><span class="text-green-darken-3">Bądź z nami</span> w kontakcie!</h5>
                <p class=" mb-md-3 text-green-darken-3 "><v-icon icon="mdi-domain text-green-darken-3"></v-icon> GORMI
                </p>
                <p class="mb-md-3"><v-icon icon="mdi-map text-green-darken-3"></v-icon> Góra
                    Libertowska 22, 30-444
                    Libertów</p>
                <p class="mb-md-3"><v-icon icon="mdi-phone text-green-darken-3"></v-icon> +48 000 000</p>
                <br />
                <v-divider :thickness="3"></v-divider>
                <br />
                <p class=" mb-md-3 text-green-darken-3"><v-icon icon="mdi-domain"></v-icon> GORMI Kraków Bibice Węgrzce
                </p>
                <p class="mb-md-3"><v-icon icon="mdi-map text-green-darken-3"></v-icon> Warszawska 40A, 32-086 Węgrzyce
                </p>
                <p class="mb-md-3"><v-icon icon="mdi-phone text-green-darken-3"></v-icon> +48 000 000</p>
                <br />
                <v-divider :thickness="3"></v-divider>
                <br />
                <p class=" mb-md-3 text-green-darken-3"><v-icon icon="mdi-domain"></v-icon> GORMI Magazyn II Węgrzyce
                </p>
                <p class="mb-md-3"><v-icon icon="mdi-map text-green-darken-3"></v-icon> Zapole 2, 32-086 Węgrzyce</p>
                <p class="mb-md-3"><v-icon icon="mdi-phone text-green-darken-3"></v-icon> +48 000 000</p>
                <br />
                <v-divider :thickness="3"></v-divider>
            </v-col>
        </div>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'

const panel = ref([0]) 
</script>
<script>
export default {
    name: 'FAQ',
}
</script>
<template>
    <v-container class="d-flex">
        <v-col cols="8" md="8">
            <h3 class="text-h3"><span class="header2">Pytania</span> i Odpowiedzi</h3>
            <br />
            <v-expansion-panels v-model="panel">
                <v-expansion-panel readonly>
                    <v-expansion-panel-title color="#5aa646">
                        Dlaczego my?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text styles="color: #d2f2c9">
                        Wybierając naszą firmę, zyskujesz nie tylko wysoką jakość produktów, ale także wsparcie
                        doświadczonych specjalistów. Nasze rozwiązania są dopasowane do indywidualnych potrzeb klientów,
                        co potwierdza zadowolenie i zaufanie, którym nas obdarzają.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <br />
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-menu-down" color="#5aa646">
                        Korzyści usługowe
                    </v-expansion-panel-title>
                    <v-expansion-panel-text color="#d2f2c9">Oferujemy kompleksową obsługę od projektowania po
                        realizację, zapewniając
                        przy tym elastyczność i przystępne ceny. Nasze usługi cechuje szybkość działania oraz gwarancja
                        długotrwałej satysfakcji z wyboru naszych produktów.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <br />
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-menu-down" color="#5aa646">
                        Jak działamy?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Proces współpracy z nami jest prosty i przejrzysty. Rozpoczynamy od
                        konsultacji, aby zrozumieć Twoje potrzeby, następnie przystępujemy do realizacji projektu,
                        dbając o każdy szczegół. Naszym celem jest zapewnienie najwyższej jakości i zadowolenia klienta.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <br />
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-menu-down" color="#5aa646">
                        Gdzie znajdują się nasze sklepy?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Nasze sklepy znajdziesz w wielu lokalizacjach w całej Polsce. Każdy punkt
                        jest dobrze wyposażony i zapewnia pełną dostępność naszych produktów oraz usług. Więcej
                        informacji, włącznie z dokładnymi adresami, można znaleźć na naszej stronie internetowej.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <br />
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-menu-down" color="#5aa646">
                        Co sądzą o nas klienci?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text> Jesteśmy dumni z pozytywnych opinii, które otrzymujemy od naszych klientów.
                        Ich zadowolenie i lojalność są najlepszym potwierdzeniem jakości naszych usług i produktów.
                        Zachęcamy do zapoznania się z recenzjami na naszej stronie oraz profilach społecznościowych.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
        <div class="d-flex align-center  flex-direction: column">
            <v-col>
                <h5 class="text-h5 mb-md-10"><span class="header2">Bądź z nami</span> w kontakcie!</h5>
                <p class=" mb-md-3 header2 "><v-icon icon="mdi-domain header2"></v-icon> GORMI
                </p>
                <p class="mb-md-3"><v-icon icon="mdi-map header2"></v-icon> Góra
                    Libertowska 22, 30-444
                    Libertów</p>
                <p class="mb-md-3"><v-icon icon="mdi-phone header2"></v-icon> +48 000 000</p>
                <br />
                <v-divider :thickness="3"></v-divider>
                <br />
                <p class=" mb-md-3 header2"><v-icon icon="mdi-domain"></v-icon> GORMI Kraków Bibice Węgrzce
                </p>
                <p class="mb-md-3"><v-icon icon="mdi-map header2"></v-icon> Warszawska 40A, 32-086 Węgrzyce
                </p>
                <p class="mb-md-3"><v-icon icon="mdi-phone header2"></v-icon> +48 000 000</p>
                <br />
                <v-divider :thickness="3"></v-divider>
                <br />
                <p class=" mb-md-3 header2"><v-icon icon="mdi-domain"></v-icon> GORMI Magazyn II Węgrzyce
                </p>
                <p class="mb-md-3"><v-icon icon="mdi-map header2"></v-icon> Zapole 2, 32-086 Węgrzyce</p>
                <p class="mb-md-3"><v-icon icon="mdi-phone header2"></v-icon> +48 000 000</p>
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
    name: 'AboutFAQ',
}
</script>
<style>
@import "/public/css/globalStyles.css";
</style>
<template>
    <v-footer class="d-flex flex-column">
        <div class="px-4 py-2 bgTop  w-100">
            <v-toolbar color="transparent" height="40">
                <v-icon class="mr-2 links-menu">mdi-refresh</v-icon><span class="mr-2 links-menu">Polityka
                    zwrotów</span>
                <v-icon class="mr-2 links-menu">mdi-lock</v-icon><span class="links-menu">Polityka prywatności</span>
            </v-toolbar>
        </div>
        <div class=" d-flex w-100 bgMidum px-4 pb-10 text-menu bg-footer">
            <v-row>
                <v-col col="12" sm="3">
                    <h4 class="mt-2">GORMI sp. z o.o.</h4>
                    <span class="text-caption">Dystrybutor kostki brukowej, płyt</span><br>
                    <span class="text-caption">tarasowych i kruszywa dekoracyjnego.</span><br>
                    <span class="text-caption">Zapraszamy do naszych ogrodów</span><br>
                    <span class="text-caption">wystawowych.</span><br>
                </v-col>
                <v-col col="12" sm="3">
                    <h4 class="mt-2">KONTAKT LIBERTÓW :</h4>
                    <v-icon class="text-caption">mdi-home</v-icon><span class="text-caption"> ul. Góra Libertowska
                        22</span><br>
                    <v-icon class="text-caption">mdi-phone</v-icon><span class="text-caption"> 12 256-00-33</span><br>
                    <v-icon class="text-caption">mdi-cellphone</v-icon><span class="text-caption">
                        534-421-014</span><br>
                    <v-icon class="text-caption">mdi-email</v-icon><span class="text-caption"> biuro@gormi.pl</span><br>
                    <v-icon class="text-caption">mdi-clock</v-icon><span class="text-caption"> pon. – pt.
                        7.00-17.00</span><br>
                    <v-icon class="text-caption">mdi-clock</v-icon><span class="text-caption"> sob. 8.00-13.00</span>
                </v-col>
                <v-col col="12" sm="3">
                    <h4 class="mt-2">KONTAKT BIELSKO-BIAŁA :</h4>
                    <v-icon class="text-caption">mdi-home</v-icon><span class="text-caption"> ul. Cieszyńska
                        259</span><br>
                    <v-icon class="text-caption">mdi-phone</v-icon><span class="text-caption"> 533-823-766</span><br>
                    <v-icon class="text-caption">mdi-email</v-icon><span class="text-caption">
                        bielsko@gormi.pl</span><br>
                    <v-icon class="text-caption">mdi-clock</v-icon><span class="text-caption">pon. – pt.
                        7.00-17.00</span><br>
                    <v-icon class="text-caption">mdi-clock</v-icon><span class="text-caption">sob. 8.00-13.00</span><br>
                </v-col>
                <v-col col="12" sm="3">
                    <h4 class="mt-2">KONTAKT WĘGRZCE :</h4>
                    <v-icon class="text-caption">mdi-home</v-icon><span class="text-caption"> ul. Warszawska
                        40A</span><br>
                    <v-icon class="text-caption">mdi-phone</v-icon><span class="text-caption"> 12 660-99-82</span><br>
                    <v-icon class="text-caption">mdi-cellphone</v-icon><span class="text-caption">
                        534-421-166</span><br>
                    <v-icon class="text-caption">mdi-email</v-icon><span class="text-caption">
                        wegrzce@gormi.pl</span><br>
                    <v-icon class="text-caption">mdi-clock</v-icon><span class="text-caption">pon. – pt.
                        7.00-17.00</span><br>
                    <v-icon class="text-caption">mdi-clock</v-icon><span class="text-caption">sob. 8.00-13.00</span><br>
                </v-col>
            </v-row>
        </div>

        <div class="px-4 py-2 bgTop text-center w-100">
            <v-icon class="mr-2 links-menu">mdi-copyright</v-icon><span class="links-menu">{{ new
                Date().getFullYear() }} — </span>
            <strong class="links-menu">Gormi.
                Wszelkie prawa
                zastrzeżone | Autor: Łukasz Capała</strong>
        </div>
    </v-footer>
</template>

<script>
export default {};
</script>

<style>
.v-footer {
    padding: 0 0 !important;
}

.bgTop {
    background-color: #1e403c;
}

.bgMidum {
    background-color: #dbdbdb;
}
</style>
<template>
    <v-container>
        <v-img class="width:100%" aspect-ratio="16/9" cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        <v-row class="d-flex  justify-space-around">
            <v-col cols="12" md="12">
                <br />
                <h4 class="text-h4 text-high-emphasis">Test</h4>
                <br>
                <p class="text-subtitle-1  text-high-emphasis"> 12.04.2024</p>
                <br />
                <div class="text-medium-emphasis">
                    <p class="text-justify ">Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque
                        porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae
                        vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed
                        sit
                        amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been ndustry standard dummy text ever since the 1500s, when an
                        unknown printer.</p>
                    <br />
                    <p class="text-justify ">Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque
                        porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae
                        vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed
                        sit
                        amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been ndustry standard dummy text ever since the 1500s, when an
                        unknown printer.</p>
                    <br />
                    <p class="text-justify ">Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque
                        porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae
                        vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed
                        sit
                        amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been ndustry standard dummy text ever since the 1500s, when an
                        unknown printer.</p>
                    <br />
                    <h5>Tagi: </h5>
                    <br />
                    <v-chip>
                        Kostka brukowa
                    </v-chip>
                    <v-chip>
                        Jak kupować
                    </v-chip>
                    <v-chip>
                        Poradnik
                    </v-chip>
                    <br />
                    <br />
                    <v-divider :thickness="5"></v-divider>
                    <br />
                </div>
                <h5 class="text-h5">Komentarze (1)</h5>
                <br />
                <div class="d-flex">
                    <v-col cols="2" md-2 class="d-flex justify-center align-center">
                        <v-avatar image="/img/john-smirk.png" size="50"></v-avatar>
                    </v-col>
                    <v-col cols="10" md-10>
                        <v-row>
                            <p class="text-subtitle-2">Jan Kowalski</p>
                        </v-row>
                        <v-row>
                            <p class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                totam
                                quasi fugit, atque modi omnis quo nulla nostrum quas molestiae iusto eaque non qui
                                nesciunt,
                                dolorum commodi. Aliquam, corporis aspernatur.</p>
                            <br />
                        </v-row>
                        <v-row>

                        </v-row>
                    </v-col>
                </div>
                <v-divider :thickness="5"></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
</script>
<script>
export default {
    name: 'BlogPage',
}
</script>
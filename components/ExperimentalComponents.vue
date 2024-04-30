<template>
    <v-container>
        <v-sheet min-height="70vh" rounded="lg" color="">
            <v-row>
                <v-col cols="12" md="12">
                    <v-img min-height="100" max-height="300" aspect-ratio="16/9" cover
                        src="https://images.unsplash.com/photo-1678822235394-04b6ef60eba8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></v-img>
                    <br />
                </v-col>

            </v-row>
            <v-row>
                <v-col cols="12" md="12">
                    <h2 class="text-h2 text-center text-high-emphasis headliner-color">Kostka
                        Brukowa</h2>
                </v-col>
            </v-row>
            <v-row class="d-flex  justify-space-around">
                <v-col cols="7" md="7">
                    <h4 class="text-h4 text-high-emphasis">Test</h4>
                    <br>
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
                        <p><v-icon style="color: green;" icon="mdi-check-circle"></v-icon> Jakiś tekst tutaj</p>
                        <p><v-icon style="color: green;" icon="mdi-check-circle"></v-icon> Jakiś tekst tutaj</p>
                        <p><v-icon style="color: green;" icon="mdi-check-circle"></v-icon> Jakiś tekst tutaj</p>
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
                    <h5 class="text-h5 text-high-emphasis">Test</h5>
                    <br>
                    <div class="text-medium-emphasis">
                        <p class="text-justify">Lorem ipsum is simply free text used by copytyping
                            refreshing. Neque
                            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae
                            vitae
                            dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed
                            sit
                            amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been ndustry standard dummy text ever since the 1500s, when an
                            unknown printer.</p>
                        <br />
                        <v-img class="justify-center" aspect-ratio="16/9" cover
                            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                        <br />
                        <h5 class="text-h5 text-high-emphasis">Test</h5>
                        <br>
                        <p class="text-justify text-medium-emphasis">Lorem ipsum is simply free text used by
                            copytyping
                            refreshing. Neque
                            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae
                            vitae
                            dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed
                            sit
                        </p>
                        <br />

                        <v-row>
                            <v-col cols="6" md="6">
                                <p><v-icon style="color: green;" icon="mdi-check-circle"></v-icon> Jakiś tekst tutaj
                                </p>
                                <p><v-icon style="color: green;" icon="mdi-check-circle"></v-icon> Jakiś tekst tutaj
                                </p>
                            </v-col>
                            <v-col cols="6" md="6">
                                <p><v-icon style="color: green;" icon="mdi-check-circle"></v-icon> Jakiś tekst tutaj
                                </p>
                                <p><v-icon style="color: green;" icon="mdi-check-circle"></v-icon> Jakiś tekst tutaj
                                </p>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
    <v-container>
        <v-row>
            <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
                <v-col :cols="image.cols">
                    <v-img :src="`https://picsum.photos/500/300?image=${image.cols * 20}`" height="100%" cover></v-img>
                </v-col>

                <v-col v-if="image.children" class="d-flex flex-column" cols="6">
                    <v-row>
                        <v-col v-for="(children, childIdx) in image.children" :key="childIdx" :cols="children.cols">
                            <v-img :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                                height="100%" cover></v-img>
                        </v-col>
                    </v-row>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>
<script setup>
const imageLayout = [
    { cols: 4 },
    {
        cols: 8,
        children: [{ cols: 12 }, { cols: 12 }],
    },
    { cols: 6 },
    { cols: 3 },
    { cols: 9 },
    { cols: 4 },
    { cols: 8 },
]
</script>
<script>
export default {
    name: 'ExperimentalComponents',
}
</script>
<style>
v-container {
    background-color: #39c912;
}
</style>
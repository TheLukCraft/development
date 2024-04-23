<template>
    <v-img class="blur-and-darken" :height="200" aspect-ratio="16/9" cover src="img\teemu-paaananen.jpg">
        <h3 style="color: white; display: flex; justify-content: center; align-items: center; height: 100%;"
            class="text-h4"><span class="">Potrzebujesz <span class="font-weight-black">pomocy</span></span>
            &nbsp;z doborem
            kostki
            brukowej?<v-chip class="font-weight-black" size="x-large"><v-icon size="large"
                    icon="mdi-phone"></v-icon>&nbsp;Zadzwoń do
                nas!</v-chip></h3>
    </v-img>
</template>
<script setup>
</script>

<script>
export default {
    name: 'ContactUs',
}
</script>
<style>
@import "/public/css/globalStyles.css";
</style>
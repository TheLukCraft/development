<template>
    <div class="d-none d-md-block">
        <v-img class="blur-and-darken " :height="200" aspect-ratio="16/9" cover src="img\teemu-paaananen.jpg">
            <h3 style="color: white; display: flex; justify-content: center; align-items: center; height: 100%;"
                class="text-h4"><span class="">Potrzebujesz <span class="font-weight-black">pomocy</span></span>
                &nbsp;z doborem
                kostki
                brukowej?<v-chip class="font-weight-black" size="x-large"><v-icon size="large"
                        icon="mdi-phone"></v-icon>&nbsp;Zadzwoń do
                    nas!</v-chip></h3>
        </v-img>
    </div>
    <!-- Mobile Version -->
    <v-img class="blur-and-darken d-md-none" :height="150" aspect-ratio="16/9" cover src="img/teemu-paaananen.jpg">
        <div class="text-white text-h5 d-flex flex-column align-items-center justify-center" style="height: 100%;">
            <h5 class="align-self-center ">
                Potrzebujesz <span class="font-weight-black">&nbsp;pomocy?</span></h5>
            <div class="ma-2"></div>
            <v-chip class="font-weight-black align-self-center " size="x-large" href="tel:+48123456789">
                <v-icon size=" large" icon="mdi-phone"></v-icon>&nbsp;Zadzwoń do nas!
            </v-chip>

        </div>
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
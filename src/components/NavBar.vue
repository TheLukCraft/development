<template>
    <v-app-bar class="px-3 bg-menu" density="compact" flat>
        <v-avatar class="hidden-md-and-up" color="grey-lighten-1" size="32"></v-avatar>

        <v-spacer></v-spacer>
        <v-tabs color="links-menu" centered>
            <v-tab color="links-menu" v-for="link in links" :key="link" :text="link"></v-tab>
        </v-tabs>
        <v-spacer></v-spacer>

        <v-avatar class="hidden-sm-and-down" size="32"></v-avatar>
    </v-app-bar>
</template>

<script setup>

const links = [
    'Dashboard',
    'Messages',
    'Profile',
    'Updates',
]
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
</style>
<template>
    <v-app-bar class="px-3" density="compact" flat color="green lighten-4">
        <v-avatar class="hidden-md-and-up" color="green lighten-4" size="32"></v-avatar>

        <v-spacer></v-spacer>

        <v-tabs color="light-green darken-1" centered>
            <v-tab v-for="link in links" :key="link" :text="link"></v-tab>
        </v-tabs>
        <v-spacer></v-spacer>

        <v-avatar class="hidden-sm-and-down" color="green lighten-4" size="32"></v-avatar>
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
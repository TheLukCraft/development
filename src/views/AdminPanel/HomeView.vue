<template>
    <AdminPanelNavBar />
    <AdminPanelHome />
</template>

<script>

// Components
import AdminPanelHome from '@/components/AdminPanel/Home.vue';
import AdminPanelNavBar from '@/components/AdminPanel/NavBar.vue';

export default {
    name: 'AdminPanelHomeView',
    components: {
        AdminPanelNavBar,
        AdminPanelHome,
    },
}
</script>
<script setup>
</script>
<style></style>
<template>
    <v-card :disabled="loading" :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <v-img height="250"
            src="https://lh3.googleusercontent.com/p/AF1QipNJG0QHVu5cxLwetcqlOKkIDBIHzjT1By-ddorg=s680-w680-h510-rw"
            cover></v-img>

        <v-card-item>
            <v-card-title>GORMI</v-card-title>

            <v-card-subtitle>
                <span class="me-1">Zakupy stacjonarne - dostawa</span>

                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating :model-value="4.7" color="amber" density="compact" size="small" half-increments
                    readonly></v-rating>

                <div class="text-grey ms-4">
                    4.7 (16)
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                $ • Sklep z ogrodzeniami
            </div>

            <div></div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Godziny otwarcia</v-card-title>
        <v-card-text>
            <p>pon-pt 7:00-17:00</p>
            <p>sob 8:00-13:00</p>
            <p>nd zamknięte</p>
        </v-card-text>
        <v-card flat>
            <v-card-title>Adres</v-card-title>
            <v-card-text>
                <p>Góra Libertowska 22</p>
                <p>30-444 Libertów</p>
            </v-card-text>
        </v-card>
        <v-divider class="mx-4 mb-1"></v-divider>
        <div class="d-flex flex-column align-center justify-center">
            <v-chip-group class="d-flex justify-center mb-3">
                <v-chip><v-icon icon="mdi-phone"></v-icon> Zadzwoń</v-chip>

                <v-chip><v-icon icon="mdi-map"></v-icon> Trasa</v-chip>

                <v-chip><v-icon icon="mdi-star"></v-icon> Opinie</v-chip>
            </v-chip-group>
        </div>
    </v-card>
</template>

<script setup>

</script>

<script>
export default {
    name: 'CompanyCard'
}
</script>
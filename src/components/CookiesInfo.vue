<template>
    <v-sheet border="md" class="pa-6 text-white mx-auto" color="#141518" max-width="400">
        <h4 class="text-h5 font-weight-bold mb-4">Polityka Prywatności</h4>

        <p class="mb-8">
            Polityka prywatności określa, jak zbierane, przetwarzane i przechowywane są dane osobowe Użytkowników
            niezbędne do świadczenia usług drogą elektroniczną za pośrednictwem serwisu internetowego Gormi.pl (dalej:
            Serwis).
            Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i rozwoju usług w nim oferowanych.
            Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane zgodnie z Rozporządzeniem Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych, dalej RODO) oraz ustawą o ochronie danych osobowych z
            dnia 10 maja 2018 r.

            <br>
            <br>

            Proszę, przeczytaj naszą <a class="text-red-accent-2" href="#">politykę prywatności</a> dowiedz się więcej
        </p>

        <v-btn class="text-none text-black mb-4" color="red-accent-2" size="x-large" variant="flat" block>
            Akceptuję
        </v-btn>

        <v-btn class="text-none text-black" color="red-accent-2" size="x-large" variant="outlined" block>
            Odrzucam
        </v-btn>
    </v-sheet>
</template>
<script setup>
</script>
<script>
export default {
    name: 'CookiesInfo',
}
</script>
<template>
    <NavbarLayout />
    <PriceComponent />
    <FrequentlyQuestionsComponent />
    <MentionsComponent />
    <JoinWithUsComponent />
    <FooterLayout />
</template>

<script setup>
import FrequentlyQuestionsComponent from '../components/pricing/FrequentlyQuestionsComponent.vue';
import MentionsComponent from '../components/pricing/MentionsComponent.vue';
import PriceComponent from '../components/pricing/PriceComponent.vue';
import NavbarLayout from '../layouts/NavbarLayout.vue';
import JoinWithUsComponent from '../components/features/JoinWithUsComponent.vue';
import FooterLayout from '../layouts/FooterLayout.vue';
</script>
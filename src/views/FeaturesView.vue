<template>
    <NavbarLayout />
    <StadisticComponent />
    <ProceedsComponent />
    <InstantFeaturesComponent />
    <JoinWithUsComponent />
    <FooterLayout />
</template>


<script setup>
import InstantFeaturesComponent from '../components/features/InstantFeaturesComponent.vue';
import JoinWithUsComponent from '../components/features/JoinWithUsComponent.vue';
import ProceedsComponent from '../components/features/ProceedsComponent.vue';
import StadisticComponent from '../components/features/StadisticComponent.vue';
import NavbarLayout from '../layouts/NavbarLayout.vue';
import FooterLayout from '../layouts/FooterLayout.vue';
</script>
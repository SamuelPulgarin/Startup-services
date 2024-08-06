<template>
    <div class="bg-gray-800 px-10">
        <NavbarLayout />
        <VideoComponent
        :thumb="thumbImage"
        :thumbWidth="768"
        :thumbHeight="432"
        :video="videoVideo"
        :videoWidth="1920"
        :videoHeight="1080" />
        <ImagesComponent />
    </div>

</template>

<script setup>
    import ImagesComponent from '../components/home/ImagesComponent.vue';
    import VideoComponent from '../components/home/VideoComponent.vue';
    import NavbarLayout from '../layouts/NavbarLayout.vue';
    import thumbImage from '../video/Example-video.jpg';
    import videoVideo from '../video/Example-video.mp4';

</script>
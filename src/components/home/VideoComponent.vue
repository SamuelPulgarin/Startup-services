<script setup>
import { ref, watch } from 'vue';
import {
    Dialog,
    DialogPanel,
    TransitionRoot,
    TransitionChild,
} from '@headlessui/vue';

// Reactive variables
const modalOpen = ref(false);
const videoRef = ref(null);

// Watch for changes in videoRef and play the video if it is defined
watch(videoRef, () => {
    videoRef.value?.play();
});

// Define component props
const props = defineProps({
    thumb: String,
    thumbWidth: Number,
    thumbHeight: Number,
    thumbAlt: String,
    video: String,
    videoWidth: Number,
    videoHeight: Number,
});
</script>

<template>

    <section class="mt-20">

        <div class="flex flex-col items-center">
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                class="text-6xl font-bold text-gray-200 text-center w-150">Landing for you business
            </h1>
            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="300" class="text-lg font-medium text-gray-400 text-center m-5 px-20 w-150">Our landing
                page template works
                on all devices, so you only have to set it up once, and get beautiful
                results forever.</h3>
        </div>

        <div class="mb-12 flex justify-center">
            <button data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"
            data-aos-delay="500" class="mr-5 bg-indigo-500 text-white rounded py-3 px-8 hover:opacity-90">Start with us</button>
            <button data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"
            data-aos-delay="600" class="ml-5 bg-gray-900 text-white rounded py-3 px-8 hover:opacity-90">Learn more</button>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="300" data-aos-offset="-200" class="flex justify-center">

            <!-- Video thumbnail -->
            <button
                class="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                @click="modalOpen = true" aria-label="Watch the video">
                <img class="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out" :src="props.thumb"
                    :width="props.thumbWidth" :height="props.thumbHeight" alt="Modal video thumbnail" />
                <!-- Play icon -->
                <svg class="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                    <circle class="fill-white" cx="36" cy="36" r="36" fill-opacity=".8" />
                    <path class="fill-indigo-500 drop-shadow-2xl"
                        d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
                </svg>
            </button>
            <!-- End: Video thumbnail -->

            <TransitionRoot :show="modalOpen" as="template">
                <Dialog :initialFocus="videoRef" @close="modalOpen = false">

                    <!-- Modal backdrop -->
                    <TransitionChild class="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                        enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
                        leave="transition ease-out duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                        aria-hidden="true" />
                    <!-- End: Modal backdrop -->

                    <!-- Modal dialog -->
                    <TransitionChild class="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
                        enter="transition ease-out duration-300" enterFrom="opacity-0 scale-75"
                        enterTo="opacity-100 scale-100" leave="transition ease-out duration-200"
                        leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-75">
                        <div class="max-w-5xl mx-auto h-full flex items-center">
                            <DialogPanel
                                class="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                                <video ref="videoRef" loop controls>
                                    <source :src="props.video" :width="props.videoWidth" :height="props.videoHeight"
                                        type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </DialogPanel>
                        </div>
                    </TransitionChild>
                    <!-- End: Modal dialog -->

                </Dialog>
            </TransitionRoot>
        </div>


        <div class="flex flex-col items-center mt-32">
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
            class="text-5xl font-bold text-gray-200 text-center w-150">
                Built exclusively for you
            </h1>
            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="300" class="text-lg font-medium text-gray-400 text-center m-5 px-20 w-150">Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quo natus eaque
                quas
                omnis
            </h3>
        </div>

        <div>
            <ol class="flex justify-center items-center sm:flex">
                <li data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                class="relative mb-6 sm:mb-0 w-80 m-10 text-center">
                    <div class="flex items-center">
                        <div
                            class="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-indigo-600 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span class="material-symbols-outlined text-white text-lg">
                                subject
                            </span>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
                        <!-- <time
                            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released
                            on
                            December 2, 2021</time> -->
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web
                            components
                            and interactive elements.</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="300" class="relative mb-6 sm:mb-0 w-80 m-10 text-center">
                    <div class="flex items-center">
                        <div
                            class="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-indigo-600 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span class="material-symbols-outlined text-white text-lg">
                                view_kanban
                            </span>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
                        <!-- <time
                            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released
                            on
                            December 23, 2021</time> -->
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web
                            components
                            and interactive elements.</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="450" class="relative mb-6 sm:mb-0 w-80 m-10 text-center">
                    <div class="flex items-center">
                        <div
                            class="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-indigo-600 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span class="material-symbols-outlined text-white text-lg">
                                checklist
                            </span>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
                        <!-- <time
                            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released
                            on January
                            5, 2022</time> -->
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web
                            components
                            and interactive elements.</p>
                    </div>
                </li>
            </ol>
        </div>

        <div class="hidden mt-12 sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>

    </section>
</template>

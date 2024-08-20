<template>

    <section>
        <div class="mt-20">

            <div class="flex flex-col items-center">
                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                    class="mt-5 text-4xl font-bold text-gray-200 text-center w-150">
                    The majority our customers do not understand their workflows.
                </h1>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                    data-aos-delay="300" class="text-lg font-medium text-gray-400 text-center m-5 px-20 w-150">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </h3>
            </div>

            <div class="flex justify-center mt-10">
                <div class="grid grid-cols-3 gap-14 w-170 justify-items-center">
                    <div v-for="feature in InstantFeatures" :key="feature.id"
                     data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                     :data-aos-delay="feature.aosDelay"
                        class="w-132 flex flex-col justify-center items-center text-center">
                        <div
                            class="z-10 flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full ring-white">
                            <span class="material-symbols-outlined text-gray-200 text-3xl">
                                {{ feature.icon }}
                            </span>
                        </div>
                        <div class="mt-3">
                            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white my-2">
                                {{ feature.subTitle }}
                            </h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                {{ feature.paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="hidden mt-16 sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </section>
</template>


<script setup>


const InstantFeatures = [
    {
        id: 1,
        icon: "star",
        subTitle: "Instant Features",
        paragraph: `Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat.`,
        aosDelay: 100,
    },
    {
        id: 2,
        icon: "developer_board",
        subTitle: "Instant Features",
        paragraph: `Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat.`,
        aosDelay: 200,
    },
    {
        id: 3,
        icon: "language",
        subTitle: "Instant Features",
        paragraph: `Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat.`,
        aosDelay: 300,
    },
    {
        id: 4,
        icon: "psychology",
        subTitle: "Instant Features",
        paragraph: `Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat.`,
        aosDelay: 400,
    },
    {
        id: 5,
        icon: "thumb_up",
        subTitle: "Instant Features",
        paragraph: `Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat.`,
        aosDelay: 500,
    },
    {
        id: 6,
        icon: "headset_mic",
        subTitle: "Instant Features",
        paragraph: `Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat.`,
        aosDelay: 600,
    }
]
</script>
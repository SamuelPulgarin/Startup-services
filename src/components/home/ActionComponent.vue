<template>
    <section>
        <div class="flex flex-col items-center justify-center mt-20">
            <div class="flex flex-col items-center w-150">
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                class="text-center text-5xl font-semibold text-gray-200 my-2">Integrated workflow designed for
                    product teams
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="300" class="text-lg font-medium text-gray-400 text-center m-5 px-20 w-150">Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Laboriosam ullam nam perspiciatis natus porro quaerat necessitatibus
                    accusamus.
                </h3>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="500" class="flex gap-x-5 justify-center mt-10">
                <button
                    :class="{
                        'flex items-center gap-x-2 px-6 py-2 text-base text-gray-400 bg-gray-900 rounded-3xl': true, 
                        'opacity-70': card !== 1,
                        'focus:opacity-100': card === 1,
                        }"
                    @click="setCard(1)">
                    <span class="material-symbols-outlined text-lg text-indigo-700">
                        favorite
                    </span>
                    <p>Quick action</p>
                </button>
                <button
                    class="flex items-center gap-x-2 px-6 py-2 text-base text-gray-400 bg-gray-900 rounded-3xl opacity-70 focus:opacity-100"
                    @click="setCard(2)">
                    <span class="material-symbols-outlined text-lg text-indigo-700">
                        local_fire_department
                    </span>
                    <p>Quick action</p>
                </button>
                <button
                    class="flex items-center gap-x-2 px-6 py-2 text-base text-gray-400 bg-gray-900 rounded-3xl opacity-70 focus:opacity-100"
                    @click="setCard(3)">
                    <span class="material-symbols-outlined text-lg text-indigo-700">
                        electric_bolt
                    </span>
                    <p>Quick action</p>
                </button>
                <button
                    class="flex items-center gap-x-2 px-6 py-2 text-base text-gray-400 bg-gray-900 rounded-3xl opacity-70 focus:opacity-100"
                    @click="setCard(4)">
                    <span class="material-symbols-outlined text-lg text-indigo-700">
                        pace
                    </span>
                    <p>Quick action</p>
                </button>
                <button
                    class="flex items-center gap-x-2 px-6 py-2 text-base text-gray-400 bg-gray-900 rounded-3xl opacity-70 focus:opacity-80"
                    @click="setCard(5)">
                    <span class="material-symbols-outlined text-lg text-indigo-700">
                        psychiatry
                    </span>
                    <p>Quick action</p>
                </button>
            </div>

            <TransitionGroup data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
            name="fade" mode="out-in" tag="div" class="max-h-96">
                <div v-if="card === 1" class="flex justify-center items-center mt-20 bg-gray-700 w-168">
                    <div class="w-132 px-6">
                        <h3 class="text-2xl font-semibold text-gray-200">Optimize and scale your projects</h3>
                        <p class="text-lg font-normal text-gray-400 pt-3">Lorem ipsum dolor sit amet consectetur,
                            adipisicing
                            elit. Eius aliquid ducimus quisquam libero consectetur eligendi officiis nisi quam neque,
                            laborum hic commodi ut delectus perspiciatis aspernatur vero incidunt, explicabo reiciendis.
                        </p>
                        <button class="text-base mt-5 bg-indigo-500 text-white rounded py-2 px-5 hover:opacity-90">Learn
                            more →</button>
                    </div>
                    <div class="w-136">
                        <img class="w-full opacity-75" src="../../assets/images/home/product_team.jpg"
                            alt="Product team image">
                    </div>
                </div>

                <div v-if="card === 2" class="flex justify-center items-center mt-20 bg-gray-700 w-168 max-h-fu">
                    <div class="w-136">
                        <img class="w-full opacity-75" src="../../assets/images/home/product_team.jpg"
                            alt="Product team image">
                    </div>
                    <div class="w-132 px-6">
                        <h3 class="text-2xl font-semibold text-gray-200">Optimize and scale your projects</h3>
                        <p class="text-lg font-normal text-gray-400 pt-3">Lorem ipsum dolor sit amet consectetur,
                            adipisicing
                            elit. Eius aliquid ducimus quisquam libero consectetur eligendi officiis nisi quam neque,
                            laborum hic commodi ut delectus perspiciatis aspernatur vero incidunt, explicabo reiciendis.
                        </p>
                        <button class="text-base mt-5 bg-indigo-500 text-white rounded py-2 px-5 hover:opacity-90">Learn
                            more →</button>
                    </div>
                </div>

                <div v-if="card === 3" class="flex justify-center items-center mt-20 bg-gray-700 w-168">
                    <div class="w-132 px-6">
                        <h3 class="text-2xl font-semibold text-gray-200">Optimize and scale your projects</h3>
                        <p class="text-lg font-normal text-gray-400 pt-3">Lorem ipsum dolor sit amet consectetur,
                            adipisicing
                            elit. Eius aliquid ducimus quisquam libero consectetur eligendi officiis nisi quam neque,
                            laborum hic commodi ut delectus perspiciatis aspernatur vero incidunt, explicabo reiciendis.
                        </p>
                        <button class="text-base mt-5 bg-indigo-500 text-white rounded py-2 px-5 hover:opacity-90">Learn
                            more →</button>
                    </div>
                    <div class="w-136">
                        <img class="w-full opacity-75" src="../../assets/images/home/product_team.jpg"
                            alt="Product team image">
                    </div>
                </div>

                <div v-if="card === 4" class="flex justify-center items-center mt-20 bg-gray-700 w-168">
                    <div class="w-136">
                        <img class="w-full opacity-75" src="../../assets/images/home/product_team.jpg"
                            alt="Product team image">
                    </div>
                    <div class="w-132 px-6">
                        <h3 class="text-2xl font-semibold text-gray-200">Optimize and scale your projects</h3>
                        <p class="text-lg font-normal text-gray-400 pt-3">Lorem ipsum dolor sit amet consectetur,
                            adipisicing
                            elit. Eius aliquid ducimus quisquam libero consectetur eligendi officiis nisi quam neque,
                            laborum hic commodi ut delectus perspiciatis aspernatur vero incidunt, explicabo reiciendis.
                        </p>
                        <button class="text-base mt-5 bg-indigo-500 text-white rounded py-2 px-5 hover:opacity-90">Learn
                            more →</button>
                    </div>
                </div>

                <div v-if="card === 5" class="flex justify-center items-center mt-20 bg-gray-700 w-168">
                    <div class="w-132 px-6">
                        <h3 class="text-2xl font-semibold text-gray-200">Optimize and scale your projects</h3>
                        <p class="text-lg font-normal text-gray-400 pt-3">Lorem ipsum dolor sit amet consectetur,
                            adipisicing
                            elit. Eius aliquid ducimus quisquam libero consectetur eligendi officiis nisi quam neque,
                            laborum hic commodi ut delectus perspiciatis aspernatur vero incidunt, explicabo reiciendis.
                        </p>
                        <button class="text-base mt-5 bg-indigo-500 text-white rounded py-2 px-5 hover:opacity-90">Learn
                            more →</button>
                    </div>
                    <div class="w-136">
                        <img class="w-full opacity-75" src="../../assets/images/home/product_team.jpg"
                            alt="Product team image">
                    </div>
                </div>
            </TransitionGroup>
        </div>

        <div class="hidden mt-28 sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const card = ref(1);

const setCard = (number) => {
    card.value = number
}

</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.fade-enter-active {
    transition-delay: 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.99);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>
<!-- 
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(0.99);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.fade-out-card {
    animation: fadeOut 1s forwards;
} 

@keyframes fadeOut {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(0.99);
    }
} -->

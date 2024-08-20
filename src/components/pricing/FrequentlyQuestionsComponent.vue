<template>
    <section>
        <div class="mt-20">
            <div class="mx-auto max-w-4xl text-center">
                <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">Pricing plans for
                    teams of&nbsp;all&nbsp;sizes</h2>
            </div>

            <div class="flex justify-center mt-10">
                <div class="grid grid-cols-2 gap-14 w-170 justify-items-center">
                    <div v-for="question in frequentlyQuestions" :key="question.id" data-aos="fade-up"
                        data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
                        :data-aos-delay="question.aosDelay"
                        class="flex flex-col justify-center items-start text-start">
                        <h4 class="text-xl text-gray-200">
                            {{ question.question }}
                        </h4>
                        <p class="text-lg text-gray-400 leading-6 mt-3">
                            {{ question.answer }}
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="mt-20 hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </section>
</template>

<script setup>

const frequentlyQuestions = [
    {
        id: 1,
        question: "Publishing industries for previewing layouts?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
        aosDelay: 100
    },
    {
        id: 2,
        question: "Publishing industries for previewing layouts?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
        aosDelay: 100
    },
    {
        id: 3,
        question: "Publishing industries for previewing layouts?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
        aosDelay: 100
    },
    {
        id: 4,
        question: "Publishing industries for previewing layouts?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
        aosDelay: 100
    },
    {
        id: 5,
        question: "Publishing industries for previewing layouts?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
        aosDelay: 100
    },
    {
        id: 6,
        question: "Publishing industries for previewing layouts?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
        aosDelay: 100
    }
]

</script>
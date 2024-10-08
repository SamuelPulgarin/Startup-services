<template>
    <section>
        <div class="py-24 sm:py-16">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-4xl text-center">
                    <h2 class="text-lg font-architects font-medium text-indigo-500">Pricing for you</h2>
                    <p class="mt-2 text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">Pricing plans for
                        teams of&nbsp;all&nbsp;sizes</p>
                </div>
                <p class="mx-auto mt-6 max-w-2xl text-center font-medium text-lg leading-8 text-gray-400">Distinctio et nulla
                    eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
                    Explicabo id ut laborum.</p>
                <div
                    class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
                        :class="[tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8', tierIdx === 0 ? 'lg:rounded-r-none' : '', tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '', 'flex flex-col justify-between rounded-3xl bg-gray-700 p-8 ring-1 ring-gray-600 xl:p-10']">
                        <div>
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 :id="tier.id"
                                    :class="[tier.mostPopular ? 'text-gray-200' : 'text-gray-200', 'text-lg font-semibold leading-8']">
                                    {{ tier.name }}</h3>
                                <p v-if="tier.mostPopular"
                                    class="rounded-full bg-gray-600 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-400">
                                    Most popular</p>
                            </div>
                            <p class="mt-4 text-sm leading-6 text-gray-400">{{ tier.description }}</p>
                            <p class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-indigo-200">{{ tier.priceMonthly
                                    }}</span>
                                <span class="text-sm font-semibold leading-6 text-gray-200">/month</span>
                            </p>
                            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-400">
                                <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                    <CheckIcon class="h-6 w-5 flex-none text-indigo-500" aria-hidden="true" />
                                    {{ feature }}
                                </li>
                            </ul>
                        </div>
                        <a :href="tier.href" :aria-describedby="tier.id"
                            :class="[tier.mostPopular ? 'bg-indigo-500 text-white shadow-sm hover:opacity-90' : 'text-indigo-400 ring-1 ring-inset ring-gray-600 hover:ring-gray-500', 'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500']">Buy
                            plan</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>

        <div class="my-8 flex justify-center items-center gap-x-96">
            <p class="text-lg text-gray-200 font-medium">Expecting more than 1000 Active End Users?</p>
            <button class="text-base font-medium bg-indigo-500 text-gray-200 hover:opacity-90 py-1.5 px-4 rounded-sm">Contact Us</button>
        </div>

        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'


const tiers = [
    {
        name: 'Freelancer',
        id: 'tier-freelancer',
        href: '#',
        priceMonthly: '$24',
        description: 'The essentials to provide your best work for clients.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
        mostPopular: false,
    },
    {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        priceMonthly: '$32',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
        ],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$48',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automations',
        ],
        mostPopular: false,
    },
]
</script>
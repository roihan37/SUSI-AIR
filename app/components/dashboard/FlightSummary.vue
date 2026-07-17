<script setup lang="ts">
    defineProps<{
        name: number
        base?: string
    }>()

</script>
<template>
    <UCard class="bg-white p-2 shadow-md sm:hidden">

            <div class="flex flex-row  rounded-xl  justify-between items-center ">
                <div class="">
                    <p class="text-xs sm:text-md font-semibold">Total Flight Hours</p>
                    <h1 class="text-xl sm:text-4xl font-bold mt-1">{{ name }} h</h1>
                </div>
                <div class="flex flex-row">
                    <div class="ml-15">
                        <USeparator orientation="vertical" size="xs" />
                    </div>
                    <div class="ml-5 flex flex-row items-center">
                        <div>
                            <p class="text-xs">Base</p>
                            <h1 class="text=xl font-bold">{{base}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </UCard>
</template>
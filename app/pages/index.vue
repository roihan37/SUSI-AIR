<script setup lang="ts">
import * as v from 'valibot'
import HeadsetIcon from '@iconify-vue/lucide/headset';
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <!-- <UCard > -->
    <div class="flex flex-col lg:flex-row  min-h-screen">

      <div >
        <img src="/images/auth/loginImage.png" alt="Login"  />
      </div>

      <div class="flex lg:w-1/2 flex-col px-20 py-10 bg-white rounded-[5vw] -mt-20 lg:mt-0">

        <div class="hidden lg:flex flex-row items-center gap-2 justify-end mb-25">
          <HeadsetIcon height="1em" />
          <p class="text-sm font-bold">Need help? <a class="text-red-500">Contact CRD</a></p>
        </div>

        <div class="flex flex-col gap-1 mb-5 lg:mb-9">
          <h1 class="text-4xl lg:text-xl font-bold">Sign In</h1>
          <p class="text-xl lg:text-base">Welcome back, Captain!</p>
        </div>

        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormField label="Username" name="email" >
            <UInput v-model="state.email" class="w-full" />
          </UFormField>
  
          <UFormField label="Password" name="password" >
            <UInput v-model="state.password" type="password" class="w-full" />
          </UFormField>
          <UCheckbox required label="Remember me" />
          <UButton type="submit"
            class="w-full flex justify-center bg-[oklch(63.7%_0.237_25.331)] hover:bg-[oklch(58%_0.237_25.331)] py-2">
            Sign In
          </UButton>
          <USeparator label="OR" class="my-6" />
          <UButton type="submit" class="w-full flex justify-center bg-white py-2 text-black border border-zinc-300">
            Continue as Guest
          </UButton>
        </UForm>

        <div class="flex flex-row items-center gap-2 justify-center mt-5 lg:hidden">
          <HeadsetIcon height="1em" />
          <p class="text-sm font-bold">Need help? <a class="text-red-500">Contact CRD</a></p>
        </div>

      </div>
    </div>
  <!-- </UCard> -->
</template>

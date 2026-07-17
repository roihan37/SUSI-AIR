<script setup lang="ts">
import * as v from 'valibot'
import HeadsetIcon from '@iconify-vue/lucide/headset'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: 'auth'
})

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(
    v.string(),
    v.minLength(8, 'Must be at least 8 characters')
  )
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  password: '',
  remember: false
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'Login successful',
    color: 'success'
  })

  console.log(event.data)

  await navigateTo('/dashboard')
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 lg:grid lg:grid-cols-2">

    <!-- Hero Image -->
    <div class="relative">

      <!-- Desktop -->
      <NuxtImg
        src="/images/auth/loginImage.png"
        class="hidden lg:block absolute inset-0 h-full w-full object-cover"
      />

      <!-- Mobile -->
      <NuxtImg
        src="/images/auth/loginImage.png"
        class="lg:hidden h-64 w-full object-cover"
      />

      <div class="absolute inset-0 bg-slate-900/35"></div>

      <div
        class="absolute bottom-10 left-10 hidden lg:block text-white max-w-md"
      >
        

        <h1 class="text-4xl font-bold leading-tight">
          Pilot Logbook & Schedule Companion
        </h1>

        <p class="mt-4 text-lg opacity-90">
          Your Flight. Your Logbook.
        </p>
      </div>

    </div>

    <!-- Login -->
    <div
      class="flex items-center justify-center bg-white px-6 pb-5 -mt-10 lg:mt-0 lg:px-20 lg:py-10 relative rounded-2xl
    z-20
"
    >

      <div class="w-full max-w-md">

        <!-- Desktop Help -->
        <div class="hidden lg:flex justify-end mb-10">

          <button class="flex items-center gap-2 text-sm font-medium">

            <HeadsetIcon class="w-4 h-4" />

            Need Help?

            <span class="text-red-500">
              Contact CRD
            </span>

          </button>

        </div>

        <NuxtNuxtImg
          src="/images/logo.png"
          class="mx-auto h-24 mb-8"
        />

        <h2 class="text-3xl font-bold">
          Welcome Back
        </h2>

        <p class="mt-2 text-gray-500">
          Sign in to continue your flight activities.
        </p>

        <UForm
          :schema="schema"
          :state="state"
          class="mt-8 space-y-5"
          @submit="onSubmit"
        >

          <UFormField
            label="Username"
            name="email"
          >

            <UInput
              v-model="state.email"
              class="w-full"
              size="xl"
              icon="i-lucide-user"
              placeholder="Enter your username"
            />

          </UFormField>

          <UFormField
            label="Password"
            name="password"
          >

            <UInput
              v-model="state.password"
              type="password"
              class="w-full"
              size="xl"
              icon="i-lucide-lock"
              placeholder="Enter your password"
            />

          </UFormField>

          <div class="flex items-center justify-between">

            <UCheckbox
              v-model="state.remember"
              label="Remember me"
            />

            <button
              type="button"
              class="text-sm text-red-500 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <UButton
            type="submit"
            color="error"
            size="xl"
            block
            class="h-12"
          >
            Sign In
          </UButton>

          <USeparator label="OR" />

          <UButton
            variant="outline"
            size="xl"
            block
            class="h-12"
            @click="navigateTo('/dashboard')"
          >
            Continue as Guest
          </UButton>

        </UForm>

        <!-- Mobile Help -->
        <div
          class="mt-8 flex items-center justify-center gap-2 lg:hidden"
        >

          <HeadsetIcon class="w-4 h-4" />

          <p class="text-sm">

            Need Help?

            <span class="font-semibold text-red-500">
              Contact CRD
            </span>

          </p>

        </div>

      </div>

    </div>

  </div>
</template>
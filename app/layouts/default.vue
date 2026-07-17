<template>
  <div class="flex min-h-screen bg-gray-50">

    <NavigationSidebar />

    <main class="flex-1 overflow-y-auto p-6 pb-30 lg:pb-6">
      <slot />
    </main>

    <NavigationBottomNav />

  </div>
</template>
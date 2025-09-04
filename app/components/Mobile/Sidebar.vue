<script setup></script>

<template>
  <section
    class="h-50 ease group fixed bottom-[60px] right-0 z-[1000] flex w-[40px] items-center overflow-hidden rounded-l-md border-y-2 border-l-2 border-gray-500 bg-[#121212] px-1 py-3 shadow-xl shadow-black"
  >
    <nav class="flex flex-col gap-5">
      <NuxtLink class="p-1 hover:ml-[-5px]" to="#landing">
        <Icon size="1.3em" name="material-symbols:home-outline-rounded" />
      </NuxtLink>

      <NuxtLink class="p-1 hover:ml-[-5px]" to="#skill">
        <Icon size="1.3em" name="material-symbols:check" />
      </NuxtLink>

      <NuxtLink class="p-1 hover:ml-[-5px]" to="#project">
        <Icon size="1.3em" name="pajamas:project" />
      </NuxtLink>

      <NuxtLink class="p-1 hover:ml-[-5px]" to="#contact">
        <Icon size="1.3em" name="material-symbols:call-outline" />
      </NuxtLink>
    </nav>
  </section>
</template>

<style scoped>
* {
  transition: all 0.4s ease;
}
</style>

<template>
  <button
    class="h-35 w-35 group flex flex-col items-center gap-2 rounded-md border-2 border-gray-700 bg-black/25 p-3 hover:border-gray-600 hover:bg-black/50"
  >
    <slot name="skill-icon"> <Icon size="7em" name="ph:placeholder" /></slot>
    <p class="uppercase text-gray-500 group-hover:text-white">
      <slot name="skill-name">Replaceable</slot>
    </p>
  </button>
</template>

<template>
  <button
    class="flex flex-col items-center gap-2 border-2 border-gray-600 border-opacity-60 bg-black bg-opacity-25 rounded-md p-3 w-full h-max hover:bg-opacity-50 hover:border-opacity-100 group"
  >
    <slot name="skill-icon"><Icon size="7em" name="ph:placeholder" /></slot>
    <p class="uppercase opacity-50 group-hover:opacity-100">
      <slot name="skill-name">Replaceable</slot>
    </p>
  </button>
</template>

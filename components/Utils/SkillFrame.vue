<template>
  <button
    class="group flex h-35 w-35 flex-col items-center gap-2 rounded-md border-2 border-gray-600/60 bg-black/25 p-3 hover:border-gray-600/100 hover:bg-black/50"
  >
    <slot name="skill-icon"> <Icon size="7em" name="ph:placeholder" /></slot>
    <p class="uppercase opacity-50 group-hover:opacity-100">
      <slot name="skill-name">Replaceable</slot>
    </p>
  </button>
</template>

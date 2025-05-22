<template>
  <article
    class="flex flex-col gap-2 w-full md:w-2/3 xl:w-1/3 px-4 md:px-0 md:m-4"
  >
    <h2 class="border-b py-2 border-indigo-700 pl-3">
      <slot name="competence-title"></slot>
    </h2>
    <h3 class="pl-3">
      <slot name="competence-subtitle"></slot>
    </h3>
    <p class="md:border-l-2 border-indigo-700 p-4">
      <slot name="competence-text"></slot>
    </p>
  </article>
</template>

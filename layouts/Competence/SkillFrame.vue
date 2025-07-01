<template>
  <section
    class="rounded-md h-[80vh] w-2/3 border-2 border-gray-500 bg-gray-700 bg-opacity-50 perspectivy overflow-y-auto"
  >
    <article
      class="sticky top-2 text-center py-2 m-2 rounded-md bg-gray-700 bg-opacity-50"
    >
      <h3>Data of skill</h3>
      <h4 class="opacity-60"><slot name="skill-name"></slot></h4>
    </article>
    <section class="flex flex-col gap-5">
      <slot name="skill-level"></slot>
    </section>
  </section>
</template>

<style scoped>
.perspectivy {
  transform: perspective(1500px) rotateY(30deg) scale(1.09);
}

.slideIn {
  animation: slideIn 1s ease;
}

@keyframes slideIn {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

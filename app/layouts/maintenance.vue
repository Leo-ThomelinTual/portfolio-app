<template>
  <section class="flex flex-col text-center">
    <article class="mt-20 text-center">
      <h2 class="text-2xl">Site en maintenance...</h2>
      <p>Site en maintenance revener plus tard.</p>
    </article>

    <article
      class="absolute left-1/2 top-1/2 flex w-5/6 -translate-x-1/2 flex-col gap-10"
    >
      <p>Des projects que j'ai réaliser pour patienter :</p>

      <div class="flex w-full flex-wrap gap-3">
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </div>
    </article>
    <slot />
  </section>
</template>

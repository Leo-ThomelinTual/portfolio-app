<script setup>
useHead({
  titleTemplate: "%s Centre d'intérêt",
});
</script>
<template>
  <main
    class="flex flex-col gap-[3rem] items-center justify-center pb-[150px] md:mb-0"
  >
    <section
      class="relative flex justify-center m-[4rem] items-center w-[90%] h-[90vh] border border-gray-500 rounded-xl mx-auto"
    >
      <article
        class="absolute text-center flex flex-col gap-5 mx-2 md:w-[50em]"
      >
        <h2>Pourquoi cette page ?</h2>
        <h3>Parce que je trouvais ça stylée.</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          cum deserunt commodi pariatur omnis, non, maiores excepturi odit
          distinctio illum, ipsam eaque nulla temporibus veritatis. Laudantium,
          eius. Quam, nostrum nulla!
        </p>
      </article>

      <NuxtLink
        class="button primary-Button absolute bottom-10 left-1/2 transform -translate-x-1/2"
        to="#gaming"
        >Passer au suivant</NuxtLink
      >
    </section>
    <section
      id="gaming"
      class="relative flex justify-center m-[3rem] items-center w-[90%] h-[90vh] border border-gray-500 rounded-xl mx-auto bg-[url('~/public/images/Frame-3.png')] bg-cover bg-center"
    >
      <h1 class="absolute">Le Gaming.</h1>
      <article>
        <NuxtLink
          class="button primary-Button absolute bottom-10 left-1/2 transform -translate-x-1/2"
          to="#sport"
          >Passer au suivant</NuxtLink
        >
      </article>
    </section>
    <section
      id="sport"
      class="relative flex justify-center items-center w-[90%] h-[90vh] border border-gray-500 rounded-xl mx-auto bg-[url('~/public/images/Frame-3.png')] bg-cover bg-center"
    >
      <h1 class="absolute">Le Sport.</h1>
      <article>
        <NuxtLink
          class="button primary-Button absolute bottom-10 left-1/2 transform -translate-x-1/2"
          to=""
          >Passer au suivant</NuxtLink
        >
      </article>
    </section>
  </main>
</template>
<style scoped></style>

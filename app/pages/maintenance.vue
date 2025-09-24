<script>
export default {
  mounted: function () {
    console.log(this.$route.path);
  },
};
definePageMeta({
  layout: "maintenance",
});
</script>

<template>
  <main>
    <section class="flex flex-col text-center">
      <article class="mt-20 text-center">
        <h2 class="text-2xl">Site en maintenance...</h2>
        <p>Site en maintenance revenez plus tard.</p>
      </article>

      <slot />
    </section>

    <div>
      <UtilsBubbleBluet
        class="fixed bottom-[150px] right-[0] z-[-10] hidden h-[25em] w-[40em] md:flex"
      />
      <UtilsBubbleBluet
        class="fixed left-[50%] top-[-450px] z-[-100] hidden h-[50em] w-[50em] -translate-x-1/2 md:flex"
      />
      <UtilsBubbleBlue
        class="fixed bottom-[0] left-[100px] z-[-10] h-[25em] w-[35em]"
      />
      <UtilsBubblePurple
        class="fixed bottom-[0] left-[0] z-[-10] h-[20em] w-[20em]"
      />
      <UtilsMapping class="hidden md:flex" />
    </div>
  </main>
</template>

<script>
export default {
  mounted: function () {
    console.log(this.$route.path);
  },
};
definePageMeta({
  layout: "background-layout",
});
</script>

<template>
  <main>
    <section class="flex flex-col text-center">
      <article class="mt-20 text-center">
        <h2 class="text-2xl">Site en maintenance...</h2>
        <p>Site en maintenance revenez plus tard.</p>
      </article>
    </section>
  </main>
</template>

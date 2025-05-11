<script setup>
useHead({
  titleTemplate: "%s Contact",
});
</script>
<template>
  <main>
    <section
      class="flex flex-wrap justify-center gap-[3em] py-[20%] md:py-[150px]"
    >
      <h2 class="md:hidden">Me Contacter</h2>
      <section class="card bg-gray-500 bg-opacity-25 h-[100%]">
        <Icon class="social-icon circle" size="5rem" name="logos:facebook" />
        <article>
          <h5>Facebook</h5>
        </article>
        <NuxtLink
          class="mb-4 button button-secondary"
          href="https://www.facebook.com/profile.php?id=61564035716349"
          target="_blank"
          >Me contacter</NuxtLink
        >
      </section>

      <section class="card bg-gray-500 bg-opacity-25 h-[100%]">
        <Icon class="social-icon circle" size="5em" name="fa6-brands:github" />
        <article>
          <h5>GitHub</h5>
        </article>
        <NuxtLink
          class="mb-4 button button-secondary"
          href="https://github.com/Leo-ThomelinTual?tab=repositories"
          target="_blank"
          >Me contacter</NuxtLink
        >
      </section>

      <section class="card bg-gray-500 bg-opacity-25 h-[100%]">
        <Icon class="social-icon square" size="5em" name="devicon:linkedin" />
        <article>
          <h5>LinkedIn</h5>
        </article>
        <NuxtLink
          class="mb-4 button button-secondary"
          href="https://www.linkedin.com/in/leo-thomelintual/"
          target="_blank"
          >Me contacter</NuxtLink
        >
      </section>

      <section class="card bg-gray-500 bg-opacity-25 h-[100%]">
        <Icon class="social-icon square" size="5em" name="mdi:email" />
        <article>
          <h5>LinkedIn</h5>
        </article>
        <NuxtLink
          class="mb-4 button button-secondary"
          href="mailto:leo.thomelintual@gmail.com"
          >Me contacter</NuxtLink
        >
      </section>
    </section>
  </main>
</template>
<style scoped>
.social-icon {
  position: relative;
  bottom: 30px;
  outline: 3px solid var(--primaryColor);
  box-shadow: 0 0 10px 5px var(--dark-var1);
  transition: all 0.5s ease;
}

.square {
  border-radius: var(--border-radius);
}

.circle {
  border-radius: 50%;
}

.card:hover .social-icon {
  outline-offset: 3px;
  transform: translateX(200%);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 450px;
  outline: 2px solid var(--primaryColor);
  border-radius: var(--border-radius);
  transition: all 0.5s ease;
}
.card:hover {
  outline-offset: 3px;
  transform: scale(1.05) perspective(350px) rotateY(10deg);
}
</style>

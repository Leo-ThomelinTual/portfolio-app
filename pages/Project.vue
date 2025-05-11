<script setup></script>

<template>
  <main>
    <Wrapper class="hidden md:flex" />
    <section
      class="flex flex-row flex-wrap justify-center gap-10 w[70%] md:w-[100%] my-10 mx-2 md:mx-auto"
    >
      <h2 class="md:hidden uppercase">Mes projets</h2>
      <section
        class="group flex flex-col gap-3 w-[450px] overflow-hidden border-2 md:border-transparent border-gray-500 p-2 md:p-5 rounded-xl md:hover:border-white case"
      >
        <NuxtLink class="relative" to="/">
          <img
            class="m-auto rounded-md md:hover:scale-[1.05] brightness-[0.5] md:brightness-[1] md:group-hover:brightness-[0.5]"
            src="../public/images/nomansky.jpg"
          />
          <p
            class="group-hover:flex md:hidden absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-max"
          >
            Click pour accéder projet
          </p>
        </NuxtLink>
        <h3 class="border-b border-indigo-700 pb-2">TEST</h3>
        <p class="flex justify-center">
          2019 <Icon size="1.3em" name="material-symbols:arrow-forward" /> 2024
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo aut
          corporis molestias nobis illo architecto cupiditate laborum veniam
          quia amet, temporibus laboriosam dolores labore unde dolorem natus, id
          quos illum.
        </p>
        <article class="flex flex-row gap-1">
          <p
            class="border border-gray-600 bg-gray-500 bg-opacity-25 w-max p-1 rounded-md text-white-500 hover:bg-opacity-40 hover:border-gray-500"
          >
            TailwindsCSS <Icon name="devicon:tailwindcss" />
          </p>
          <p
            class="border border-gray-600 bg-gray-500 bg-opacity-25 w-max p-1 rounded-md text-white-500 hover:bg-opacity-40 hover:border-gray-500"
          >
            PHP <Icon name="devicon:php" />
          </p>
        </article>
      </section>
    </section>
  </main>
</template>

<style scoped>
* {
  transition: all 0.5s ease;
}

@media (min-width: 1024px) {
  .case {
    transform-style: preserve-3d;
  }

  .case:hover {
    transform: perspective(1000px) rotateY(10deg) scale(1.05);
  }
}
</style>

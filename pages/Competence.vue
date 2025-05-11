<template>
  <main>
    <section class="absolute bottom-[0] right-[0]">
      <article class="blur-item-blue"></article>
    </section>
    <section class="flex items-center h-[100vh] SlideInFrom_Left-Bounce">
      <!-- <section class="absolute top-2/4 transform -translate-y-1/2 w-2/4 mx-5"> -->
      <section class="border-l-2 ml-4 pl-3 py-8 flex flex-col gap-5">
        <article class="flex flex-col gap-3 border-b border-gray-500 pb-3">
          <h2>A propos de mes <strong>Compétences.</strong></h2>
          <h3 class="text-4xl ml-10">
            <Icon name="material-symbols:arrow-forward-rounded" /><strong
              class="animation-title"
            ></strong>
          </h3>
        </article>

        <article class="card-text flex gap-3 text-5xl icon-container">
          <Icon name="line-md:chevron-small-right" />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="vscode-icons:file-type-html"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="vscode-icons:file-type-css2"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="vscode-icons:file-type-php"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="vscode-icons:file-type-mysql"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="devicon:javascript"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="material-icon-theme:figma"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="octicon:mark-github-16"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="skill-icons:symfony-dark"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="devicon:bootstrap"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="devicon:tailwindcss"
          />
          <Icon name="line-md:chevron-small-left" />
        </article>
      </section>
    </section>
    <section class="flex md:flex-col gap-[30em]">
      <article class="flex flex-col gap-2 w-1/3 m-4">
        <h2 class="border-b py-2 border-indigo-700 pl-3">Symfony</h2>
        <h3 class="pl-3">Symfony (Framework PHP)</h3>
        <p class="border-l-2 border-indigo-700 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          repudiandae, voluptatem, ipsa doloremque, voluptas voluptatum
          perspiciatis voluptatibus aut eum voluptates provident.
        </p>
      </article>
      <article class="flex flex-col gap-2 w-1/3 m-4">
        <h2 class="border-b py-2 border-indigo-700 pl-3">Symfony</h2>
        <h3 class="pl-3">Symfony (Framework PHP)</h3>
        <p class="border-l-2 border-indigo-700 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          repudiandae, voluptatem, ipsa doloremque, voluptas voluptatum
          perspiciatis voluptatibus aut eum voluptates provident.
        </p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.animation-title::after {
  content: "";
  animation: animation_title 7s linear infinite alternate;
}
</style>

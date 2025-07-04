<template>
  <section
    id="contact"
    class="grid w-full grid-cols-[1fr_max-content] grid-rows-[1fr_1fr] gap-2"
  >
    <article
      class="col-span-1 row-span-1 flex h-full flex-col gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-2"
    >
      <h2>Other Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
    </article>
    <article
      class="col-span-1 row-span-3 flex h-full flex-col gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-2"
    >
      <NuxtLink
        class="flex w-max gap-2 rounded-md border-2 border-white p-2"
        to="/"
      >
        <Icon name="mdi:github" />
        Download paper CV
      </NuxtLink>
      <NuxtLink
        class="flex w-max gap-2 rounded-md border-2 border-white p-2"
        to="/"
      >
        <Icon name="mdi:github" />
        Source code
      </NuxtLink>
    </article>
    <article
      class="col-span-1 row-span-2 flex h-full flex-col gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-4"
    >
      <h2 class="text-2xl">Me contactez par email :</h2>
      <article class="grid grid-cols-[65%_max-content_max-content] gap-5">
        <form class="flex w-1/2 flex-col gap-5" action="">
          <label for="subject">Sujet :</label>
          <input
            class="h-9 rounded-md bg-gray-500/50 p-2 text-white"
            type="text"
            id="subject"
            name="subject"
            placeholder="sujet de votre email"
            required
          />
          <label for="email">Email :</label>
          <input
            class="h-9 w-1/2 rounded-md bg-gray-500/50 p-2 text-white"
            type="email"
            id="email"
            name="email"
            placeholder="votre email"
            required
          />
          <label for="message">Message :</label>
          <textarea
            class="h-9 rounded-md bg-gray-500/50 p-2 text-white"
            id="message"
            name="message"
            placeholder="Votre message"
            required
          ></textarea>

          <button class="button button-primary mx-auto">Envoyer le mail</button>
        </form>
        <p class="flex items-center border-l-2 border-white px-2">OU</p>
        <article class="flex flex-col gap-5">
          <NuxtLink
            class="flex w-max gap-2 rounded-md border-2 border-white p-2 hover:bg-gray-700/50"
            to="/"
          >
            <Icon name="mdi:linkedin" />
            Me contacter par LinkedIn
          </NuxtLink>
          <NuxtLink
            class="flex w-max gap-2 rounded-md border-2 border-white p-2 hover:bg-gray-700/50"
            to="/"
          >
            <Icon name="mdi:facebook" />
            Me contacter par Facebook
          </NuxtLink>
        </article>
      </article>
    </article>
  </section>
</template>

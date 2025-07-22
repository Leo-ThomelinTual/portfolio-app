<template>
  <section
    id="contact"
    class="grid w-[100%] grid-cols-1 grid-rows-1 gap-2 md:w-full lg:grid-cols-[1fr_max-content] lg:grid-rows-[auto_auto]"
  >
    <article
      class="col-span-1 row-span-1 flex h-full flex-col gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-2"
    >
      <h2>Mes projects futurs</h2>
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
      class="col-span-1 row-span-3 flex h-max flex-col flex-wrap items-start gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-2 md:h-full"
    >
      <h2
        class="mx-auto flex flex-wrap items-center gap-3 border-b-2 border-white px-4 py-2 text-2xl"
      >
        Liens utils <Icon name="mdi:link" />
      </h2>

      <UtilsButtonTertiary to="/CV.pdf" external download target="_blank">
        <template #ButtonContent>
          <Icon name="mdi:download" />
          Téléchargé CV - Version papier
        </template>
      </UtilsButtonTertiary>

      <UtilsButtonTertiary to="/portfolio-history">
        <template #ButtonContent>
          <Icon name="material-symbols-light:history" />
          Historique visuel du portfolio
        </template>
      </UtilsButtonTertiary>

      <UtilsButtonTertiary
        to="https://github.com/Leo-ThomelinTual"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:github" />
          Mon repository GitHub
        </template>
      </UtilsButtonTertiary>

      <UtilsButtonTertiary
        to="https://github.com/Leo-ThomelinTual/portfolio-app"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:github" />
          Code Source
        </template>
      </UtilsButtonTertiary>
    </article>
    <article
      class="col-span-1 row-span-2 flex h-max w-full flex-col flex-wrap gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-4"
    >
      <h2 class="text-2xl">Me contactez par email :</h2>
      <article class="grid w-full grid-cols-[1fr] gap-10">
        <form class="flex w-full flex-col gap-5 md:w-1/2" action="">
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
            class="h-9 rounded-md bg-gray-500/50 p-2 text-white md:w-1/2"
            type="email"
            id="email"
            name="email"
            placeholder="votre email"
            required
          />
          <label for="message">Message :</label>
          <textarea
            class="h-40 rounded-md bg-gray-500/50 p-2 text-white"
            id="message"
            name="message"
            placeholder="Votre message"
            required
          ></textarea>

          <UtilsButtonPrimary to="/" class="mx-auto">
            <template #ButtonContent>Envoyer un mail</template>
          </UtilsButtonPrimary>
        </form>
        <p class="mr-auto flex items-center border-t-2 border-white px-40">
          OU
        </p>
        <article class="flex flex-col gap-2">
          <UtilsButtonTertiary to="/" target="_blank">
            <template #ButtonContent>
              <Icon name="mdi:linkedin" />
              Me contacter par LinkedIn
            </template>
          </UtilsButtonTertiary>

          <UtilsButtonTertiary to="/" target="_blank">
            <template #ButtonContent>
              <Icon name="mdi:facebook" />
              Me contacter par Facebook
            </template>
          </UtilsButtonTertiary>
        </article>
      </article>
    </article>
  </section>
</template>

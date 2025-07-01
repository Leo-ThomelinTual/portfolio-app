<template>
  <section class="flex flex-col items-center justify-center h-[100vh]">
    <h2 class="p-3 border-b-2">Les moyens de me contacter</h2>
    <section
      class="flex flex-wrap justify-center gap-[3em] py-[20%] md:py-[150px]"
    >
      <h2 class="md:hidden">Me Contacter</h2>
      <ContactCard>
        <template #contactCard-icon>
          <Icon class="social-icon circle" size="5rem" name="logos:facebook" />
        </template>
        <template #contactCard-title>Facebook</template>
        <template #contactCard-link>
          <NuxtLink
            class="mb-4 button button-secondary"
            href="https://www.facebook.com/profile.php?id=61564035716349"
            target="_blank"
            >Me contacter</NuxtLink
          >
        </template>
      </ContactCard>

      <ContactCard>
        <template #contactCard-icon>
          <Icon
            class="social-icon circle"
            size="5em"
            name="fa6-brands:github"
          />
        </template>
        <template #contactCard-title>GitHub</template>
        <template #contactCard-link>
          <NuxtLink
            class="mb-4 button button-secondary"
            href="https://github.com/Leo-ThomelinTual?tab=repositories"
            target="_blank"
            >Me contacter</NuxtLink
          ></template
        >
      </ContactCard>

      <ContactCard>
        <template #contactCard-icon>
          <Icon class="social-icon square" size="5em" name="devicon:linkedin" />
        </template>
        <template #contactCard-title>LinkedIn</template>
        <template #contactCard-link>
          <NuxtLink
            class="mb-4 button button-secondary"
            href="https://www.linkedin.com/in/leo-thomelintual/"
            target="_blank"
            >Me contacter</NuxtLink
          ></template
        >
      </ContactCard>

      <ContactCard>
        <template #contactCard-icon>
          <Icon class="social-icon square" size="5em" name="mdi:email" />
        </template>
        <template #contactCard-title>Email</template>
        <template #contactCard-link>
          <NuxtLink
            class="mb-4 button button-secondary"
            href="mailto:leo.thomelintual@gmail.com"
            >Me contacter</NuxtLink
          ></template
        >
      </ContactCard>
    </section>
  </section>
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
</style>

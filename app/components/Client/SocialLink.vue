<template>
  <article>
    <UtilsButtonSweet
      to="https://www.facebook.com/profile.php?id=61564035716349"
    >
      <template #icon>
        <Icon class="flex-shrink-0" size="2em" name="mdi:facebook" />
      </template>

      <template #SocialName>Léo Thomelin-Tual</template>
    </UtilsButtonSweet>

    <UtilsButtonSweet to="https://github.com/Leo-ThomelinTual">
      <template #icon>
        <Icon class="flex-shrink-0" size="2em" name="mdi:github" />
      </template>

      <template #SocialName>Léo Thomelin-Tual</template>
    </UtilsButtonSweet>

    <UtilsButtonSweet to="https://www.linkedin.com/in/leo-thomelintual/">
      <template #icon>
        <Icon class="flex-shrink-0" size="2em" name="mdi:linkedin" />
      </template>

      <template #SocialName>Léo Thomelin-Tual</template>
    </UtilsButtonSweet>

    <UtilsButtonSweet
      class="hover:w-[320px]"
      to="mailto:leo.thomelintual@gmail.com"
    >
      <template #icon>
        <Icon class="flex-shrink-0" size="2em" name="mdi:email" />
      </template>

      <template #SocialName>leo.thomelintual@gmail.com</template>
    </UtilsButtonSweet>
  </article>
</template>

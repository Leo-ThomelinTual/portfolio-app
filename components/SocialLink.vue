<template>
  <div class="gap-2">
    <NuxtLink class="social p-2" to="">
      <Icon size="2em" name="mdi:facebook" />
    </NuxtLink>
    <NuxtLink class="social p-2" to="">
      <Icon size="2em" name="mdi:github" />
    </NuxtLink>
    <NuxtLink class="social p-2" to="">
      <Icon size="2em" name="mdi:linkedin" />
    </NuxtLink>
    <NuxtLink class="social p-2" to="">
      <Icon size="2em" name="mdi:email" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.social {
  border-radius: 50%;
  background: var(--secondaryColor);
  outline-offset: 0;
  transition: all 0.5s ease;
}
.social:hover {
  background: var(--dark-contrast);
  color: var(--light-contrast);
  outline-offset: 3px;
  outline: 2px solid var(--primaryColor);
  box-shadow: 0px 0px 15px var(--light-var1);
}
</style>

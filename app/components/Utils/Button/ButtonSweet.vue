<template>
  <NuxtLink
    class="social group h-[3em] w-[50px] gap-2 px-2 hover:w-[230px] hover:px-4"
    to="/"
    target="_blank"
  >
    <slot name="icon"
      ><Icon class="flex-shrink-0" size="2em" name="mdi:sticker" />
    </slot>

    <p class="opacity-0 group-hover:opacity-100">
      <slot name="SocialName"></slot>
    </p>
  </NuxtLink>
</template>

<style scoped>
.social {
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: row;
  text-wrap: nowrap;
  border-radius: 50%;
  background: var(--secondaryColor);
  outline-offset: 0;
  transition: all 0.5s ease;
}
.social:hover {
  border-radius: 5px;
  background: var(--dark-contrast);
  color: var(--light-contrast);
  outline-offset: 3px;
  outline: 2px solid var(--primaryColor);
  box-shadow: 0px 0px 15px var(--light-var1);
}
</style>

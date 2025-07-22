<template>
  <NuxtLink class="button button-primary flex gap-1 hover:gap-2" to="">
    <slot name="ButtonContent" />
  </NuxtLink>
</template>

<style>
.button {
  width: max-content;
  align-items: center;
  vertical-align: middle;
  outline: 2px solid var(--primaryColor);
  height: 40px;
  color: var(--dark-contrast);
  padding: 0 10px;
  border-radius: var(--border-radius);
  transition: all 0.5s ease;
}
.button:hover {
  outline-offset: 3px;
  shape-outside: 50px;
  box-shadow: 0px 0px 15px var(--light-var1);
  background-color: var(--dark-contrast);
  color: var(--secondaryColor);
}

.button-primary {
  background-color: var(--secondaryColor);
}

.button-secondary {
  background-color: transparent;
}
</style>

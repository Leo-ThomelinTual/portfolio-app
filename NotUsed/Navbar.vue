<script setup>
const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>
<template>
  <nav
    class="fixed md:top-1 bottom-2 md:left-[50%] md:-translate-x-1/2 w-full md:h-[70px] md:w-[max-content] md:px-20 bg-gray-500 flex justify-center bg-opacity-25 backdrop-blur-sm rounded-md border border-gray-500 border-opacity-75 z-[1000]"
  >
    <ul class="hidden md:flex flex p-5 text-white gap-10 text-xl">
      <li>
        <NuxtLink :class="['nav-item', { active: isActive('/') }]" to="/"
          >Accueil</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="['nav-item', { active: isActive('/competence') }]"
          to="/competence"
          >Compétences</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="['nav-item', { active: isActive('/project') }]"
          to="/project"
          >Projet</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="['nav-item', { active: isActive('/centreInteret') }]"
          to="/centreInteret"
          >Centre d'intérêt</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="['nav-item', { active: isActive('/contact') }]"
          to="/contact"
          >Contact</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="['nav-item', { active: isActive('/onepage') }]"
          to="/onepage"
          >Onepage</NuxtLink
        >
      </li>
    </ul>
    <ul
      class="md:hidden relative flex justify-around p-2 w-[100%] text-white text-xl"
    >
      <li class="hover:-translate-y-[5px]">
        <NuxtLink to="/" :class="['', { active: isActive('/') }]">
          <Icon size="2.7rem" name="material-symbols:home-outline-rounded" />
        </NuxtLink>
      </li>
      <li class="hover:-translate-y-[5px]">
        <NuxtLink
          to="/competence"
          :class="['', { active: isActive('/competence') }]"
          ><Icon size="2.7rem" name="material-symbols:check-rounded"
        /></NuxtLink>
      </li>
      <li class="hover:-translate-y-[5px]">
        <NuxtLink to="/project" :class="['', { active: isActive('/project') }]"
          ><Icon size="2.7rem" name="pajamas:project"
        /></NuxtLink>
      </li>
      <li class="hover:-translate-y-[5px]">
        <NuxtLink
          :class="['', { active: isActive('/centreInteret') }]"
          to="/centreInteret"
          ><Icon size="2.7rem" name="fluent:target-arrow-16-regular"
        /></NuxtLink>
      </li>
      <li class="hover:-translate-y-[5px]">
        <NuxtLink to="/contact" :class="['', { active: isActive('/contact') }]"
          ><Icon size="2.7rem" name="material-symbols:call-outline"
        /></NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  transition: all 0.5s ease;
}
.nav-item {
  position: relative;
  padding: 8px;
  color: var(--dark-contrast);
  transition: all 0.5s ease;
}
.nav-item:hover {
  color: var(--primaryColor);
  text-shadow: 0 0 15px var(--primaryColor);
}
.nav-item:after {
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  border-top: 4px solid transparent;
  border-radius: var(--border-radius);
  transition: all 0.5s ease;
}
.nav-item:hover:after {
  content: "";
  width: 100%;
  border-top: 4px solid var(--primaryColor);
}

.active {
  color: var(--primaryColor);
}

.active:hover {
  color: var(--dark-contrast);
}
.active::after {
  content: "";
  border-top: 4px solid var(--primaryColor);
  width: 100%;
}
</style>

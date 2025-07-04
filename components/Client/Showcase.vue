<script setup>
function toggleHomepageShowcase() {
  const showcase = document.querySelector("#showcase");
  const sections = document.querySelectorAll("article:not(#showcase)");
  const social = document.querySelector("#social-test");
  if (showcase) {
    if (showcase.classList.contains("w-[95%]")) {
      showcase.classList.remove(
        "w-[95%]",
        "right-[50%]",
        "translate-x-[50%]",
        "z-[10000]",
        "fixed",
      );
      showcase.classList.add("right-10", "w-[40%]", "absolute");
      document.getElementById("text-box-expand").textContent =
        "Click to expand";
      sections.forEach((section) => {
        section.classList.remove("blur-md");
      });
      setTimeout(() => {
        social.classList.remove("flex");
        social.classList.add("hidden");
      }, 0);
    } else {
      showcase.classList.remove("w-[40%]", "right-10", "absolute");
      showcase.classList.add(
        "w-[95%]",
        "right-[50%]",
        "translate-x-[50%]",
        "z-[10000]",
        "fixed",
      );
      document.getElementById("text-box-expand").textContent =
        "Click to reduce";
      sections.forEach((section) => {
        section.classList.add("blur-md");
      });
      setTimeout(() => {
        social.classList.add("flex");
        social.classList.remove("hidden");
      }, 0);
    }
  }
}
</script>

<template>
  <section
    @click="toggleHomepageShowcase"
    id="showcase"
    class="showcase group SlideInFrom_Right-Bounce absolute top-2/4 right-10 hidden h-[95%] w-[40%] -translate-y-1/2 transform rounded-md border-2 border-gray-500 bg-black bg-cover bg-center bg-no-repeat shadow-xl shadow-black hover:border-x-white hover:border-t-white md:flex"
  >
    <section
      class="m-3 ml-auto flex h-max w-max items-center gap-2 rounded-md border-2 bg-black p-3 opacity-50 group-hover:opacity-100 hover:gap-4"
    >
      <p id="text-box-expand">Click to expand</p>
      <Icon size="1.5rem" name="mdi:mouse-right-click" />
    </section>
    <div
      id="social-test"
      class="bg-opacity-50 absolute right-0 bottom-0 m-1 hidden w-max flex-col gap-3 rounded-md bg-black p-1"
    >
      <NuxtLink
        class="flex items-center gap-2 text-red-500 hover:text-white"
        to="https://github.com/trending"
        target="_blank"
      >
        <Icon size="1.5em" name="mdi:youtube" />
        See on Youtube
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.showcase {
  transition: border-color 5s ease width 1s ease;
}
</style>

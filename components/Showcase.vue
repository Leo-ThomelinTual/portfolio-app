<script setup>
function toggleHomepageShowcase() {
  const showcase = document.querySelector("#showcase");
  const sections = document.querySelectorAll("section:not(#showcase)");
  const social = document.querySelector("#social-test");
  if (showcase) {
    if (showcase.classList.contains("w-[95%]")) {
      showcase.classList.remove(
        "w-[95%]",
        "right-[50%]",
        "translate-x-[50%]",
        "z-[10000]",
        "fixed"
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
        "fixed"
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
    class="showcase group w-[40%] h-[95%] border-2 border-gray-500 hover:border-x-white hover:border-t-white hidden md:flex bg-black rounded-md fixed top-2/4 right-10 transform -translate-y-1/2 bg-cover bg-center bg-no-repeat SlideInFrom_Right-Bounce"
  >
    <article
      class="flex items-center ml-auto gap-2 hover:gap-4 p-3 border-2 rounded-md bg-black w-max h-max m-3 opacity-50 group-hover:opacity-100"
    >
      <p id="text-box-expand">Click to expand</p>
      <Icon size="1.5rem" name="mdi:mouse-right-click" />
    </article>
    <div
      id="social-test"
      class="hidden gap-3 flex-col rounded-md absolute m-1 p-1 bottom-0 right-0 w-max bg-black bg-opacity-50"
    >
      <NuxtLink
        class="flex gap-2 items-center text-red-500 hover:text-white"
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

<script setup>
function toggleHomepageShowcase() {
  const showcase = document.querySelector("#showcase");
  const sections = document.querySelectorAll("article:not(#showcase)");
  const social = document.querySelector("#social-test");

  if (showcase) {
    const isExpanded = showcase.classList.contains("w-[95%]");

    showcase.classList.toggle("fixed", !isExpanded);
    showcase.classList.toggle("absolute", isExpanded);
    showcase.classList.toggle("right-10", isExpanded);
    showcase.classList.toggle("right-[50%]", !isExpanded);
    showcase.classList.toggle("translate-x-[50%]", !isExpanded);
    showcase.classList.toggle("z-[10000]", !isExpanded);
    showcase.classList.toggle("w-[40%]", isExpanded);
    showcase.classList.toggle("w-[95%]", !isExpanded);

    document.getElementById("text-box-expand").textContent = isExpanded
      ? "Click to expand"
      : "Click to reduce";

    sections.forEach((section) => {
      section.classList.toggle("blur-md", !isExpanded);
    });

    setTimeout(() => {
      social.classList.toggle("hidden", isExpanded);
      social.classList.toggle("flex", !isExpanded);
    }, 0);
  }
}
</script>

<template>
  <article
    @click="toggleHomepageShowcase"
    id="showcase"
    class="showcase SlideInFrom_Right-Bounce group absolute right-10 top-1/2 h-[95vh] w-[40%] -translate-y-1/2 cursor-pointer overflow-hidden rounded-md border-2 border-gray-500 bg-[url(/img/)] bg-cover bg-no-repeat shadow-xl shadow-black transition-all duration-500 ease-in-out hover:border-x-white hover:border-t-white"
  >
    <!-- EXPAND LABEL -->
    <section
      class="absolute right-0 z-[1000] m-3 flex h-max w-max items-center gap-2 rounded-md border-2 bg-black p-3 opacity-50 hover:gap-4 group-hover:opacity-100"
    >
      <p id="text-box-expand">Click to expand</p>
      <Icon size="1.5rem" name="mdi:mouse-right-click" />
    </section>

    <!-- SOCIAL -->
    <div
      id="social-test"
      class="absolute bottom-0 right-0 z-10 m-1 hidden w-max flex-col gap-3 rounded-md bg-black bg-opacity-50 p-1"
    >
      <NuxtLink
        class="flex items-center gap-2 text-red-500 hover:text-white"
        to="https://github.com/trending"
        target="_blank"
      >
        <Icon size="1.5em" name="mdi:youtube" />
        {{ $t("SeeYoutube") }}
      </NuxtLink>
    </div>

    <!-- VIDEO -->
    <div class="relative flex h-full w-full">
      <video
        class="absolute left-0 top-0 h-full w-full object-cover"
        src="/video/showcase3.mp4"
        autoplay
        muted
        loop
      ></video>
    </div>
  </article>
</template>

<style scoped>
.showcase {
  transition: border-color 5s ease width 1s ease;
}
</style>

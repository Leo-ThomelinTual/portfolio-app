<script setup>
const { t } = useI18n({
  useScope: "local",
});

function toggleHomepageShowcase() {
  const showcase = document.querySelector("#showcase");
  const sections = document.querySelectorAll("article:not(#showcase)");
  const title = document.querySelectorAll("h2");
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

    if (!isExpanded) {
      setVolume(0.06);
    } else {
      setVolume(0.01);
    }

    document.getElementById("text-box-expand").textContent = isExpanded
      ? "Click to expand"
      : "Click to reduce";

    sections.forEach((section) => {
      section.classList.toggle("blur-md", !isExpanded);
    });
    title.forEach((h2) => {
      h2.classList.toggle("blur-md", !isExpanded);
    });

    setTimeout(() => {
      social.classList.toggle("hidden", isExpanded);
      social.classList.toggle("flex", !isExpanded);
    }, 0);
  }
}

function setVolume(volume) {
  let vid = document.getElementById("myVideo");
  vid.volume = volume;
}

onMounted(() => {
  setVolume(0.01);
});
</script>

<template>
  <article
    @click="toggleHomepageShowcase"
    id="showcase"
    class="showcase SlideInFrom_Right-Bounce group absolute right-10 top-1/2 z-10 h-[95vh] w-[40%] -translate-y-1/2 cursor-pointer rounded-md border-2 border-gray-500 shadow-xl shadow-black transition-all duration-500 ease-in-out hover:border-white"
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
      class="absolute bottom-10 right-0 z-10 m-1 hidden w-max flex-col gap-3 rounded-md bg-black bg-opacity-50 p-1"
    >
      <NuxtLink
        class="flex items-center gap-2 text-red-500 hover:text-white"
        to="https://github.com/trending"
        target="_blank"
      >
        <Icon size="1.5em" name="mdi:youtube" />
        {{ t("SeeYoutube") }}
      </NuxtLink>
    </div>

    <!-- VIDEO -->

    <div class="relative flex h-full w-full">
      <video
        id="myVideo"
        class="absolute left-0 top-0 h-full w-full object-cover"
        src="/video/showcase2.mp4"
        autoplay
        controls
      />
    </div>
  </article>
</template>

<i18n lang="json">
{
  "en": {
    "SeeYoutube": "See on Youtube"
  },
  "fr": {
    "SeeYoutube": "Voir sur Youtube"
  }
}
</i18n>

<style scoped>
.showcase {
  transition: border-color 5s ease width 1s ease;
}
</style>

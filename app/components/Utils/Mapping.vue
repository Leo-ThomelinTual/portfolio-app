<template>
  <section class="fixed z-[-10] h-[100vh] w-full blur-md" aria-disabled="true">
    <div
      class="stars right-[50%] top-[50%] animate-[pulse_3s_ease-in-out_infinite]"
    />
    <div
      class="stars right-[20%] top-[30%] animate-[pulse_5s_ease-in-out_infinite]"
    />
    <div
      class="stars right-[80%] top-[80%] animate-[pulse_4s_ease-in-out_infinite]"
    />
    <div
      class="stars right-[80%] top-[20%] animate-[pulse_3.5s_ease-in-out_infinite]"
    />

    <div
      class="stars right-[70%] top-[70%] animate-[pulse_3s_ease-in-out_infinite]"
    />
    <div
      class="stars right-[90%] top-[20%] animate-[pulse_5s_ease-in-out_infinite]"
    />
    <div
      class="stars right-[40%] top-[30%] animate-[pulse_4s_ease-in-out_infinite]"
    />
    <div
      class="stars right-[26%] top-[70%] animate-[pulse_3.5s_ease-in-out_infinite]"
    />
  </section>
</template>

<style scoped>
.stars {
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: white;
  will-change: opacity;
}
</style>

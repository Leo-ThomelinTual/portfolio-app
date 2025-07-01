<template>
  <bubbleBluet
    class="xl:flex hidden fixed bottom-[150px] right-[0] w-[40em] h-[25em] z-[-10] homepage-bg"
  />
  <bubbleBluet
    class="xl:flex hidden fixed top-[-450px] left-[50%] -translate-x-1/2 w-[50em] h-[50em] z-[-100]"
  />

  <ModaleLanguage />
  <NuxtPage />
  <NuxtLayout />
  <Notifications class="notification-success">
    <template #notification-title>Success</template>
    <template #notification-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
      voluptatum eos natus tempore laborum.
    </template>
  </Notifications>
  <bubbleBlue
    class="xl:flex hidden fixed bottom-[0] w-[35em] h-[25em] left-[100px] z-[-10] homepage-bg"
  />
  <bubblePurple
    class="xl:flex hidden fixed bottom-[0] left-[0] w-[20em] h-[20em] z-[-10] homepage-bg"
  />
</template>

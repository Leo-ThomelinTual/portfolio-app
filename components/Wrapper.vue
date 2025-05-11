<template>
  <section class="wrapper-content flex flex-col">
    <section class="wrapper mx-auto my-auto">
      <NuxtLink aria-hidden="true" tabindex="-1" to="../php/accueil.php">
        <article class="item item-1">HTML</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="../php/accueil.php">
        <article class="item item-2">CSS</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="../php/accueil.php">
        <article class="item item-3">PHP</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="../php/accueil.php">
        <article class="item item-4">Javascript</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="../php/accueil.php">
        <article class="item item-5">Bootstrap</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="../php/accueil.php">
        <article class="item item-6">Webdesign</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="../php/accueil.php">
        <article class="item item-7">SQL</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="../php/accueil.php">
        <article class="item item-8">Symfony</article>
      </NuxtLink>
    </section>
    <div class="border mx-5"></div>
    <section class="wrapper mx-auto my-auto">
      <article class="item1 item-9"></article>
      <article class="item1 item-10"></article>
      <article class="item1 item-11"></article>
      <article class="item1 item-12"></article>
      <article class="item1 item-13"></article>
      <article class="item1 item-14"></article>
      <article class="item1 item-15"></article>
      <article class="item1 item-16"></article>
    </section>
  </section>
</template>

<style scoped>
/* TODO | Make appears wrapper with blur animation*/
.wrapper-content {
  margin: auto;
  min-width: 85vw;
  max-width: 85vw;
  min-height: 350px;
  max-height: 350px;
  border-radius: 25px;
  margin-top: 10rem;
  background-color: var(--background--clr);
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.514);
}

.wrapper {
  width: 90%;
  max-width: 1800px;
  position: relative;
  height: 100px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

.item {
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation: scroll 30s linear infinite;
  border-radius: 20px;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
}

.item-1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
  color: orangered;
}
.item-2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
  background: linear-gradient(to right, blue, rgb(33, 155, 196));
  background-clip: clip;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.item-3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
  color: rgb(115, 119, 173);
}
.item-4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
  color: yellow;
}
.item-5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
  background: linear-gradient(to right, violet, midnightblue);
  background-clip: clip;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.item-6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
  color: rebeccapurple;
}
.item-7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
  color: chocolate;
}
.item-8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
  color: midnightblue;
}

.item1 {
  width: 200px;
  height: 100px;
  background-color: red;
  border-radius: 6px;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation: scroll 30s linear infinite reverse;
  background-size: cover;
  background-repeat: no-repeat;
}

.item-9 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
  background-image: url(../public/images/skyrim.jpg);
}
.item-10 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
  background-image: url(../public/images/skyrim.jpg);
}
.item-11 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
  background-image: url(../public/images/skyrim.jpg);
}
.item-12 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
  background-image: url(../public/images/skyrim.jpg);
}
.item-13 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
  background-image: url(../public/images/skyrim.jpg);
}
.item-14 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
  background-image: url(../public/images/skyrim.jpg);
}
.item-15 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
  background-image: url(../public/images/skyrim.jpg);
}
.item-16 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
  background-image: url(../public/images/skyrim.jpg);
}
</style>

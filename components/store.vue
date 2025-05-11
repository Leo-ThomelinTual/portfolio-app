<template>
  <section
    class="store-carrousel flex row gap-2 w-5/6 h-2/5 absolute left-1/2 transform -translate-x-1/2 text-center px-16 py-3 border-2 rounded-lg backdrop-blur-sm"
  >
    <article class="card border-2 rounded-lg">
      <img
        class="card-image w-5/6 h-32 rounded-lg"
        src="../public/images/skyrim.jpg"
        alt=""
      />
      <h3 class="card-title">TEXT TEST</h3>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        voluptatibus, voluptates, dolorum, voluptas officiis voluptatum
        voluptate ratione dolores nulla inventore blanditiis. Quisquam
      </p>
      <button class="sleek-Button">See More</button>
    </article>
    <article class="card border-2 rounded-lg">
      <img
        class="card-image w-5/6 h-32 rounded-lg"
        src="../public/images/skyrim.jpg"
        alt=""
      />
      <h3 class="card-title">TEXT TEST</h3>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        voluptatibus, voluptates, dolorum, voluptas officiis voluptatum
        voluptate ratione dolores nulla inventore blanditiis. Quisquam
      </p>
      <button class="sleek-Button">See More</button>
    </article>
    <article class="card border-2 rounded-lg">
      <img
        class="card-image w-5/6 h-32 rounded-lg"
        src="../public/images/skyrim.jpg"
        alt=""
      />
      <h3 class="card-title">TEXT TEST</h3>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        voluptatibus, voluptates, dolorum, voluptas officiis voluptatum
        voluptate ratione dolores nulla inventore blanditiis. Quisquam
      </p>
      <button class="sleek-Button">See More</button>
    </article>
    <article class="card border-2 rounded-lg">
      <img
        class="card-image w-5/6 h-32 rounded-lg"
        src="../public/images/skyrim.jpg"
        alt=""
      />
      <h3 class="card-title">TEXT TEST</h3>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        voluptatibus, voluptates, dolorum, voluptas officiis voluptatum
        voluptate ratione dolores nulla inventore blanditiis. Quisquam
      </p>
      <button class="sleek-Button">See More</button>
    </article>
  </section>
</template>

<style>
.store-carrousel {
  bottom: -100%;
  transition: bottom 0.5s cubic-bezier(0.36, 0, 0.66, -0.56);
  animation-fill-mode: forwards;
  z-index: 1000;
}

.store-carrousel.visible {
  bottom: 0;
  animation: bounce 1s cubic-bezier(0.36, 0, 0.66, 1.56);
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;
  align-items: center;
  width: 500px;
}
.store-carrousel::before,
.store-carrousel::after {
  content: "";
  width: 30px;
  height: 100%;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
}
.store-carrousel::before {
  background-image: url("../public/icons/arrow-back.svg");
  left: 0;
}
.store-carrousel::after {
  background-image: url("../public/icons/arrow-forwards.svg");
  right: 0;
}
</style>

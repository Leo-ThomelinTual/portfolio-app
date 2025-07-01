<template>
  <section class="card bg-gray-500 bg-opacity-25 h-[100%]">
    <slot name="contactCard-icon"></slot>
    <article>
      <h5><slot name="contactCard-title"></slot></h5>
    </article>
    <slot name="contactCard-link"></slot>
  </section>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 450px;
  outline: 2px solid var(--primaryColor);
  border-radius: var(--border-radius);
  transition: all 0.5s ease;
}
.card:hover {
  outline-offset: 3px;
  transform: scale(1.05) perspective(350px) rotateY(10deg);
}
</style>

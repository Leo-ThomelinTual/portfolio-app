<template>
  <article class="notification">
    <h3><slot name="notification-title"></slot></h3>
    <p>
      <slot name="notification-text"></slot>
    </p>
  </article>
</template>

<style scoped>
.notification {
  position: absolute;
  top: 100px;
  right: 10px;
  z-index: 1000;
  margin: 10px;
  padding: 10px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--dark-contrast);
  border-radius: var(--border-radius);
  animation: SlideInFrom_Right-Bounce 1s ease forwards;
}
.notification-success {
  background-color: var(--success);
}
.notification-error {
  background-color: var(--alert);
}
.notification-warning {
  background-color: var(--warning);
}
.notification-information {
  background-color: var(--info);
}
</style>

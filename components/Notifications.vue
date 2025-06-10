<script setup>
function hideNotification() {
  const notification = document.querySelector(".notification");
  setTimeout(() => {
    notification.classList.add("animation-closing");
  }, 300);
  setTimeout(() => {
    notification.remove();
  }, 1000);
}
</script>

<template>
  <article @click="hideNotification" class="notification group">
    <article
      class="absolute top-0 right-3 p-3 w-max h-max flex items-center gap-3 overflow-hidden rounded-md bg-black invisible group-hover:-top-9 group-hover:visible transition-all duration-300 ease"
    >
      <p>Click to hide</p>
      <Icon size="1rem" name="mdi:mouse-right-click" />
    </article>
    <article class="flex gap-3 flex-col">
      <h3>
        <slot name="notification-title"></slot>
      </h3>
      <p>
        <slot name="notification-text"></slot>
      </p>
    </article>
  </article>
</template>

<style scoped>
.notification {
  position: fixed;
  top: 200px;
  right: 0.2em;
  z-index: 1000;
  margin: 10px;
  padding: 10px;
  width: 450px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: #d9d9d9;
  border-radius: 5px;
  animation: SlideInFrom_Right-Bounce 1s ease forwards;
}
.notification-success {
  background: var(--success);
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

@keyframes animation-closing {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(200%);
  }
}

.animation-closing {
  animation: animation-closing 1s ease-out;
}
</style>

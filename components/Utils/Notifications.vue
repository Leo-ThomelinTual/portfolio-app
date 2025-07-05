<script setup>
function hideNotification() {
  const notification = document.querySelector(".notification");
  setTimeout(() => {
    notification.classList.add("animations-closing");
  }, 300);
  setTimeout(() => {
    notification.remove();
  }, 1000);
}
</script>

<template>
  <article
    @click="hideNotification"
    class="notification group cursor-pointer shadow-xl shadow-green-900"
  >
    <article
      class="invisible absolute right-3 top-0 flex h-max w-max items-center gap-3 overflow-hidden rounded-md bg-black p-3 shadow-lg shadow-black group-hover:visible group-hover:-top-9"
    >
      <p>Click to hide</p>
      <Icon size="1rem" name="mdi:mouse-right-click" />
    </article>
    <article class="flex flex-col gap-3">
      <h3 class="text-2xl font-bold">
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
  transition: transform 1s ease;
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

.animations-closing {
  animation: animations-closing 1s ease-out;
}

@keyframes animations-closing {
  50% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>

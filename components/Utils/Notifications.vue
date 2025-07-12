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
    class="notification group relative cursor-pointer"
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
  padding: 10px;
  width: 450px;
  display: flex;
  gap: 10px;
  color: #d9d9d9;
  border-radius: 5px;
  transition: transform 1s ease;
}
.notification-success {
  background: var(--success);
  box-shadow: 0 5px 20px 5px darkgreen;
}
.notification-error {
  background-color: var(--alert);
  box-shadow: 0 5px 20px 5px darkred;
}
.notification-warning {
  background-color: var(--warning);
  box-shadow: 0 5px 20px 5px darkgoldenrod;
}
.notification-information {
  background-color: var(--info);
  box-shadow: 0 5px 20px 5px darkcyan;
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

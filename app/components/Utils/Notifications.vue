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

function timeBeforeHiding() {
  const notification = document.querySelector(".notification");
  setTimeout(() => {
    notification.classList.add("animations-closing");
  }, 9000);
  setTimeout(() => {
    notification.remove();
  }, 10000);
}

onMounted(() => {
  timeBeforeHiding();
});
</script>

<template>
  <article
    @click="hideNotification"
    class="notification group relative cursor-pointer"
  >
    <article
      class="absolute right-3 top-0 flex h-max w-max items-center gap-3 overflow-hidden rounded-md bg-black p-3 opacity-0 shadow-lg shadow-black group-hover:-top-9 group-hover:opacity-100"
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
    <article
      class="loadingAnimBg absolute -bottom-3 left-0 h-[10px] w-full overflow-hidden rounded-md bg-white"
    >
      <article class="loadingAnim relative h-full"></article>
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

.loadingAnimBg {
  animation: loadingAnimBg 10s 1 forwards linear;
}

.loadingAnim {
  animation: loadingAnim 10s 1 forwards linear;
}

@keyframes animations-closing {
  50% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(200%);
  }
}

@keyframes loadingAnim {
  0% {
    width: 0%;
    background-color: green;
    box-shadow: 0 0 10px 10px green;
  }
  50% {
    background-color: rgb(179, 194, 41);
    box-shadow: 0 0 10px 10px rgb(179, 194, 41);
  }
  75% {
    background-color: rgb(216, 189, 36);
    box-shadow: 0 0 10px 10px rgb(216, 189, 36);
  }
  100% {
    width: 100%;
    background-color: red;
    box-shadow: 0 0 10px 10px red;
  }
}
@keyframes loadingAnimBg {
  0% {
    box-shadow: 0 0 5px 5px green;
  }
  50% {
    box-shadow: 0 0 5px 5px rgb(179, 194, 41);
  }
  75% {
    box-shadow: 0 0 5px 5px rgb(216, 189, 36);
  }
  100% {
    box-shadow: 0 0 5px 5px red;
  }
}
</style>

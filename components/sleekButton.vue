<script setup>
function toggleStore() {
  const store = document.querySelector(".store-carrousel");
  if (store) {
    if (store.classList.contains("visible")) {
      store.classList.remove("visible");
      store.style.bottom = "-100%";
    } else {
      store.classList.add("visible");
      store.style.bottom = "150px";
    }
  }
}
</script>
<template>
  <div
    class="button-inline absolute bottom-10 left-1/2 transform -translate-x-1/2"
  >
    <button class="sleek-Button">Join US</button>
    <button @click="toggleStore" type="button" class="sleek-Button-reversed">
      Visit the store
    </button>
  </div>
</template>

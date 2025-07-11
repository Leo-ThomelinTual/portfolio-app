import { ref, onMounted, onUnmounted } from "vue";

export function useIsMobile(breakpoint = 1024) {
  const isMobile = ref(false);

  const update = () => {
    isMobile.value = window.innerWidth <= breakpoint;
  };

  onMounted(() => {
    update();
    window.addEventListener("resize", update);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });

  return { isMobile };
}

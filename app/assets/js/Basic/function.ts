export function fadeInView(number: number) {
  const elements = document.querySelectorAll('[data-tag="fade-up"]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    },
    {
      threshold: number, // commence l'animation quand 20% de l'élément est visible
    },
  );

  elements.forEach((el) => observer.observe(el));
}

// function buttonGlowInView() {
//   const elements = document.querySelectorAll('[data-tag="button-glow');
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const el = entry.target as HTMLElement;
//       if (entry.isIntersecting) {
//         const elBg = window.getComputedStyle(el);
//         if (elBg) {
//           elBg.classList.add("shadow-lg shadow" + `${elBg}`);
//         }
//       }
//     });
//   });
// }

// function ViewFieldDetection() {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const el = entry.target as HTMLElement;
//       if (entry.isIntersecting) {
//         el.classList;
//       }
//     });
//   });
// }

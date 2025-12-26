<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faFileLines } from "@fortawesome/free-solid-svg-icons";

  export let data;

  let buttonEl;
  let tooltipEl;

  onMount(() => {
    gsap.set(tooltipEl, {
      opacity: 0,
      y: 8,
      pointerEvents: "none"
    });

    const show = () => {
      gsap.to(tooltipEl, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.out"
      });
    };

    const hide = () => {
      gsap.to(tooltipEl, {
        opacity: 0,
        y: 8,
        duration: 0.2,
        ease: "power2.in"
      });
    };

    buttonEl.addEventListener("mouseenter", show);
    buttonEl.addEventListener("mouseleave", hide);
    buttonEl.addEventListener("focus", show);
    buttonEl.addEventListener("blur", hide);

    return () => {
      buttonEl.removeEventListener("mouseenter", show);
      buttonEl.removeEventListener("mouseleave", hide);
      buttonEl.removeEventListener("focus", show);
      buttonEl.removeEventListener("blur", hide);
    };
  });
</script>

<div class="fixed bottom-6 right-6 z-50">
  <!-- Tooltip -->
  <div
    bind:this={tooltipEl}
    class="
      absolute bottom-full right-1/2 translate-x-1/2 mb-3
      px-3 py-1.5
      text-xs font-medium
      rounded-md
      bg-gray-800 text-gray-100
      shadow-lg
      whitespace-nowrap
    "
    role="tooltip"
  >
    Download CV
  </div>

  <!-- Floating Action Button -->
  <button
    bind:this={buttonEl}
    type="button"
    aria-label="Download CV"
    on:click={() => window.open(data.contact.resumeURL, "_blank", "noopener,noreferrer")}
    class="
      flex items-center justify-center
      w-14 h-14
      rounded-full
      bg-accent text-black
      shadow-lg
      hover:scale-105 hover:shadow-xl
      active:scale-95
      transition-transform transition-shadow
      focus:outline-none focus:ring-2 focus:ring-accent/60
    "
  >
    <FontAwesomeIcon icon={faFileLines} size="lg" />
  </button>
</div>

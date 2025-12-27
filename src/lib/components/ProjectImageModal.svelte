<script>
  import { onMount, onDestroy, tick } from "svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faXmark } from "@fortawesome/free-solid-svg-icons";

  export let project = null;
  export let onClose;

  let modal;
  let previouslyFocused;
  const isBrowser = typeof document !== "undefined";

  function close() {
    if (isBrowser) {
      document.body.style.overflow = "";
    }
    onClose();
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      close();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  onMount(async () => {
    if (!project || !isBrowser) return;

    previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";

    await tick();
    modal?.focus();

    document.addEventListener("keydown", handleKeydown);
  });

  onDestroy(() => {
    if (!isBrowser) return;

    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleKeydown);
    previouslyFocused?.focus();
  });
</script>

{#if project}
  <div
    class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
    role="dialog"
    aria-modal="true"
    aria-label="Project image preview"
    tabindex="-1"
    bind:this={modal}
  >
    <button
      type="button"
      on:click={close}
      aria-label="Close modal"
      class="absolute top-4 right-4 text-white text-xl hover:opacity-75 focus:outline-none"
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>

    <img
      src={project.image}
      alt={project.title}
      class="max-w-full max-h-full rounded-lg cursor-pointer"
    />
  </div>
{/if}

<script>
  import { createEventDispatcher } from "svelte";

  export let data;

  const dispatch = createEventDispatcher();

  const projects = [...data.projects].sort((a, b) => b.startDate - a.startDate);

  function handleClick(project) {
    if (!project.image) return;
    dispatch("open", project);
  }
</script>

<section id="projects" class="space-y-6">
  <h2 class="text-2xl font-semibold">Projects</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project}
      <button class="text-start"
        on:click={() => handleClick(project)}>
        <article
          class="h-full bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition flex flex-col cursor-pointer"
        >
          {#if project.image}
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-48 object-cover"
              loading="lazy"
            />
          {/if}

          <div class="p-5 flex flex-col flex-1 space-y-4">
            <h3 class="text-lg font-semibold">{project.title}</h3>

            <p class="text-sm text-gray-400 flex-1">
              {project.description}
            </p>

            {#if project.tech?.length}
              <div class="flex flex-wrap gap-2">
                {#each project.tech as tag}
                  <span
                    class="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-300"
                  >
                    {tag}
                  </span>
                {/each}
              </div>
            {/if}

            <div class="flex items-center justify-between pt-2 text-sm">
              {#if project.repo}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent hover:underline flex items-center gap-1"
                  on:click|stopPropagation
                >
                  <span>Repo</span>
                  <span aria-hidden="true">↗</span>
                </a>
              {:else}
                <span class="text-gray-400 text-xs">Private repo</span>
              {/if}
            </div>
          </div>
        </article>
      </button>
    {/each}
  </div>
</section>

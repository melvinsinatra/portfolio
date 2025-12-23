<script>
  export let data;

  const projects = [...data.projects].sort(
    (a, b) => b.startDate - a.startDate
  );
</script>

<section id="projects" class="space-y-6">
  <h2 class="text-2xl font-semibold">Projects</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project}
      <article
        class="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition flex flex-col"
      >
        <!-- Image / Preview -->
        {#if project.image}
          <img
            src={project.image}
            alt={project.title}
            class="w-full h-48 object-cover"
            loading="lazy"
          />
        {/if}

        <!-- Card content -->
        <div class="p-5 flex flex-col flex-1 space-y-4">
          <!-- Title -->
          <h3 class="text-lg font-semibold leading-snug">
            {project.title}
          </h3>

          <!-- Description fills remaining space -->
          <p class="text-sm text-gray-400 flex-1">
            {project.description}
          </p>

          <!-- Tech tags -->
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

          <!-- Footer -->
          <div class="flex items-center justify-between pt-2 text-sm">
            {#if project.repo}
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                class="text-accent hover:underline flex items-center gap-1"
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
    {/each}
  </div>
</section>

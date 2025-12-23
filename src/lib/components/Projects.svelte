<script>
  export let data;
</script>

<section id="projects" class="space-y-6">
  <h2 class="text-2xl font-semibold">Projects</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each data.projects as project}
      <div class="bg-surface p-6 rounded-lg">
        <h3 class="font-medium">{project.title}</h3>
        <p class="text-gray-400 text-sm">{project.description}</p>
      </div>
    {/each}
  </div>
</section>

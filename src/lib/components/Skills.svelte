<script>
  export let data;
</script>

<section id="skills" class="space-y-6">
  <h2 class="text-2xl font-semibold">Skills</h2>
  <div class="grid md:grid-cols-3 gap-6">
    {#each Object.entries(data.skills) as [group, items]}
      <div>
        <h3 class="capitalize font-medium mb-2">{group}</h3>
        <ul class="space-y-1">
          {#each items as skill}
            <li class="text-sm text-gray-400">{skill}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

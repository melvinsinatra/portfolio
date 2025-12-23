<script>
  export let data;

  const timelines = [...data.timelines].sort(
    (a, b) => b.startYear - a.startYear
  );
</script>

<section id="experience" class="space-y-8">
  <h2 class="text-2xl font-semibold">Experience</h2>
  <ul class="border-l border-gray-700 space-y-6">
    {#each timelines as item}
      <li class="ml-6">
        <span class="text-accent text-sm">{item.period}</span>
        <h3 class="font-medium">
          <span>{item.role} @ {item.company}</span>
        </h3>
        <p class="text-sm">{item.employmentType}</p>
        <p class="text-gray-400 text-sm">{item.description}</p>
      </li>
    {/each}
  </ul>
</section>

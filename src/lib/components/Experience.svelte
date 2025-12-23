<script>
  export let data;

  // Sort timelines descending by startDate (most recent first)
  const timelines = [...data.timelines].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );
</script>

<section id="experience" class="space-y-8">
  <h2 class="text-2xl font-semibold">Experience</h2>

  <ul class="border-l border-gray-700 space-y-8">
    {#each timelines as item}
      <li class="ml-6 space-y-1">
        <span class="text-accent text-sm">{item.period}</span>

        <h3 class="font-medium">
          {item.role} @ {item.company}
        </h3>

        <p class="text-sm">{item.employmentType}</p>

        {#if item.descriptionListItems?.length}
          <ul class="mt-2 list-disc list-inside space-y-1 text-gray-400 text-sm">
            {#each item.descriptionListItems as description}
              <li>{description}</li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</section>

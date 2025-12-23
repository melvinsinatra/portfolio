<script>
  export let data;
</script>

<section id="services" class="space-y-6">
  <h2 class="text-2xl font-semibold">Services</h2>
  <ul class="list-disc list-inside space-y-2 text-gray-400">
    {#each data.services as service}
      <li>{service}</li>
    {/each}
  </ul>
</section>

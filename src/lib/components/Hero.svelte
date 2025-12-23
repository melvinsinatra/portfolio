<script>
  export let data;
</script>

<section id="home" class="min-h-screen flex items-center">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
    <div class="space-y-4">
      <p class="text-accent">I'm {data.name}</p>
      <h1 class="text-4xl md:text-6xl font-bold">{data.role}</h1>
      <p class="max-w-xl text-gray-400">{data.summary}</p>
    </div>
    <div class="flex justify-center md:justify-end">
      <div class="overflow-hidden flex items-center justify-center">
        {#if data.heroImage}
          <img src={data.heroImage} alt="Profile photo" loading="lazy" />
        {:else}
          <span class="text-gray-500 text-sm">Hero Image</span>
        {/if}
      </div>
    </div>
  </div>
</section>

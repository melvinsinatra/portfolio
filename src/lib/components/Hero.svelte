<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

  export let data;
</script>

<section id="home" class="min-h-screen flex items-center">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
    <div class="space-y-4">
      <p class="text-accent">I'm {data.contact.fullName}</p>
      <h1 class="text-4xl md:text-6xl font-bold">{data.role}</h1>
      <p class="max-w-xl text-gray-400">{data.summary}</p>

      <!-- Contact Section -->
      <div class="flex gap-4 pt-4">
        <a
          href={data.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-accent transition"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>

        <a
          href={data.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-accent transition"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>

        <a
          href={`mailto:${data.contact.email}`}
          class="text-gray-400 hover:text-accent transition"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>

      <div class="flex items-center gap-2 pt-4 text-gray-400">
        <a
          href={data.contact.locationURL}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-accent transition"
          aria-label="Location"
          >
          <FontAwesomeIcon icon={faLocationDot} size="lg" />
        </a>
        <span>
          {data.contact.city}, {data.contact.state}, {data.contact.country}
        </span>
      </div>
    </div>

    <!-- Hero Image -->
    <div class="flex justify-center md:justify-end">
      <div class="overflow-hidden">
        {#if data.heroImage}
          <img
            src={data.heroImage}
            alt="Profile"
            loading="lazy"
            class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        {:else}
          <span class="text-gray-500 text-sm">Hero Image</span>
        {/if}
      </div>
    </div>
  </div>
</section>

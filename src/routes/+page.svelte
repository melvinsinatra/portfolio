<script>
  import '../app.css';
  import data from "$lib/data/profile.json";
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Timeline from "$lib/components/Timeline.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Services from "$lib/components/Services.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="max-w-6xl mx-auto px-6 space-y-32">
  <Hero {data} />
  <About {data} />
  <Skills {data} />
  <Services {data} />
  <Timeline {data} />
  <Projects {data} />
  <Footer {data} />
</main>

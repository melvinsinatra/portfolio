<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  import "../app.css";
  import data from "$lib/data/profile.json";
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let hero;
  let about;
  let skills;
  let experience;
  let projects;
  let footer;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [
      hero,
      about,
      skills,
      experience,
      projects,
      footer
    ];

    sections.forEach((section) => {
      if (!section) return;

      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  });
</script>

<main class="max-w-6xl mx-auto px-6 space-y-32">
  <div bind:this={hero}>
    <Hero {data} />
  </div>

  <div bind:this={about}>
    <About {data} />
  </div>

  <div bind:this={skills}>
    <Skills {data} />
  </div>

  <div bind:this={experience}>
    <Experience {data} />
  </div>

  <div bind:this={projects}>
    <Projects {data} />
  </div>

  <div bind:this={footer}>
    <Footer {data} />
  </div>
</main>

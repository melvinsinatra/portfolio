<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  import "../app.css";
  import data from "$lib/data/profile.json";

  import About from "$lib/components/About.svelte";
  import DownloadCVFAB from "$lib/components/DownloadCVFAB.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import ProjectImageModal from "$lib/components/ProjectImageModal.svelte";

  let hero, about, skills, experience, projects, footer;
  let activeProject = null;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    [hero, about, skills, experience, projects, footer].forEach((section) => {
      if (!section) return;

      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  });
</script>

<main class="max-w-6xl mx-auto px-6 space-y-32">
  <div bind:this={hero}><Hero {data} /></div>
  <div bind:this={about}><About {data} /></div>
  <div bind:this={skills}><Skills {data} /></div>
  <div bind:this={experience}><Experience {data} /></div>

  <div bind:this={projects}>
    <Projects {data} on:open={(e) => (activeProject = e.detail)} />
  </div>

  <div bind:this={footer}><Footer {data} /></div>

  <DownloadCVFAB {data} />
</main>

<ProjectImageModal
  project={activeProject}
  onClose={() => (activeProject = null)}
/>

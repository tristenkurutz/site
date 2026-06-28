<script lang="ts">
  import Accordion from "../components/accordion.svelte";
  import jobs from "../data/industry.json";
  import projects from "../data/projects.json";
</script>

<!-- ABOUT -->
<section id="about" class="section">
  <h2
    class="animate-typing overflow-hidden whitespace-nowrap border-r-2 pr-2 pb-2 w-fit"
  >
    howdy!
  </h2>
  <h3>who am i?</h3>
  <p>
    i'm Tristen, a software engineering student at RIT graduating Dec 2026.
    right now i'm at M&T Bank building a Java test orchestration platform from
    scratch. i get weirdly into process stuff: good CI/CD, thoughtful refactors,
    the ethics behind what we build and why.
  </p>
  <p>
    and outside of that: cat dad of two, a RimWorld habit that i couldn't be
    paid a million dollars to break, amateur photography, and pretty much any
    craft i can get my hands on.
  </p>

  <div class="skills-row">
    <span class="skills-label">languages & tools</span>
    <div class="flex flex-wrap gap-1.5">
      {#each ["Angular", "C", "C++", "C#", "CSS", "Go", "HTML", "Java", "JavaScript", ".NET", "PostgreSQL", "Python", "React", "Spring", "TypeScript"] as skill}
        <span class="skill-tag">{skill}</span>
      {/each}
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience" class="section">
  <h3>industry experience</h3>
  <p class="section-sub">
    i've interned at a few places while at RIT, including:
  </p>
  <div class="mt-4">
    {#each jobs.experience as job}
      <Accordion
        title={job.title}
        company={job.company}
        location={job.location}
        startDate={job.startDate}
        endDate={job.endDate}
        technologies={job.technologies}
        responsibilities={job.responsibilities}
      />
    {/each}
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="section">
  <h3>projects</h3>
  <div class="projects-grid">
    {#each projects.projects as project}
      <div class="project-card">
        <div class="flex justify-between items-start gap-4 flex-wrap">
          <div>
            <h4 class="project-title">{project.title}</h4>
            <span class="project-subtitle">{project.subtitle}</span>
          </div>
          <div class="flex gap-3 items-center flex-wrap">
            {#if project.github}
              <a
                href={project.github}
                target="_blank"
                rel="noopener"
                class="project-link">github ↗</a
              >
            {/if}
            {#if project.live}
              <a
                href={project.live}
                target="_blank"
                rel="noopener"
                class="project-link">live ↗</a
              >
            {/if}
            {#if project.note}
              <span class="project-note">{project.note}</span>
            {/if}
          </div>
        </div>
        <p class="project-desc">{project.description}</p>
        <div class="flex flex-wrap gap-1.5">
          {#each project.technologies as tech}
            <span class="project-tag">{tech}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section">
  <h3>contact</h3>
  <p>
    i'm graduating Dec 2026 and looking for full-time roles. feel free to reach
    out!
  </p>
  <div class="contact-links">
    <a href="mailto:tristenkurutz@gmail.com" class="contact-link">
      <span class="contact-label">email</span>
      <span class="contact-value">tristenkurutz@gmail.com ↗</span>
    </a>
    <a
      href="https://www.linkedin.com/in/tristen-kurutz/"
      target="_blank"
      rel="noopener"
      class="contact-link"
    >
      <span class="contact-label">linkedin</span>
      <span class="contact-value">tristen-kurutz ↗</span>
    </a>
    <a
      href="https://github.com/tristenkurutz"
      target="_blank"
      rel="noopener"
      class="contact-link"
    >
      <span class="contact-label">github</span>
      <span class="contact-value">tristenkurutz ↗</span>
    </a>
  </div>
</section>

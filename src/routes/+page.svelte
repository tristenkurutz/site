<script lang="ts">
  import Accordion from "../components/accordion.svelte";
  import jobs from "../data/industry.json";
  import projects from "../data/projects.json";
</script>

<!-- ABOUT -->
<section id="about" class="section">
  <h2
    class="animate-typing overflow-hidden whitespace-nowrap border-r-2 pr-2 pb-4 w-fit"
  >
    Hey!
  </h2>
  <h3>Who am I?</h3>
  <p>
    I'm Tristen, a software engineering student at RIT graduating Dec 2026. I'm currently at M&T Bank building a Java test orchestration platform from scratch.
    I care a lot about process and ethics in software.  The why behind what we build is really important to me, and I want to make sure that what we build is 
    accessible to all kinds of people, is maintainable, and secure.
  </p>
  <p>
    Outside of that: I am a cat dad of two, have a Rimworld habit that I couldn't be
    paid a million dollars to break, do amateur photography, and pretty much any
    craft I can get my hands on.
  </p>

  <div class="skills-row">
    <span class="skills-label">Languages & Tools</span>
    <div class="flex flex-wrap gap-1.5">
      {#each ["Angular", "C", "C++", "C#", "CSS", "Go", "HTML", "Java", "JavaScript", ".NET", "PostgreSQL", "Python", "React", "Spring", "TypeScript"] as skill}
        <span class="skill-tag">{skill}</span>
      {/each}
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience" class="section">
  <h3>Industry Experience</h3>
  <p class="section-sub">
    I've interned at a few places while at RIT, including:
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
  <h3>Projects</h3>
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
                class="project-link">GitHub ↗</a
              >
            {/if}
            {#if project.live}
              <a
                href={project.live}
                target="_blank"
                rel="noopener"
                class="project-link">Live ↗</a
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
  <h3>Contact</h3>
  <p>
    I'm graduating Dec 2026 and looking for full-time roles. Feel free to reach
    out!
  </p>
  <div class="contact-links">
    <a href="mailto:tristenkurutz@gmail.com" class="contact-link">
      <span class="contact-label">Email</span>
      <span class="contact-value">tristenkurutz@gmail.com ↗</span>
    </a>
    <a
      href="https://www.linkedin.com/in/tristen-kurutz/"
      target="_blank"
      rel="noopener"
      class="contact-link"
    >
      <span class="contact-label">LinkedIn</span>
      <span class="contact-value">tristen-kurutz ↗</span>
    </a>
    <a
      href="https://github.com/tristenkurutz"
      target="_blank"
      rel="noopener"
      class="contact-link"
    >
      <span class="contact-label">GitHub</span>
      <span class="contact-value">tristenkurutz ↗</span>
    </a>
  </div>
</section>

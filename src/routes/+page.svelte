<script lang="ts">
  import { onMount } from "svelte";
  import Accordion from "../components/accordion.svelte";
  import jobs from "../data/industry.json";
  import projects from "../data/projects.json";

  const skills = [
    "Angular",
    "C",
    "C++",
    "C#",
    "CSS",
    "Go",
    "HTML",
    "Java",
    "JavaScript",
    ".NET",
    "PostgreSQL",
    "Python",
    "React",
    "Spring",
    "TypeScript",
  ];

  // split into two rows of roughly equal width (label length plus padding and
  // gap approximates the rendered width) rather than equal count, so the two
  // rows look even. they sit side by side as a single line on wide screens and
  // stack into two even rows when there isn't room for one
  const tagWidth = (skill: string) => skill.length + 3.5;
  const totalWidth = skills.reduce((sum, s) => sum + tagWidth(s), 0);
  let runningWidth = 0;
  let closest = Infinity;
  let cut = 1;
  for (let i = 1; i < skills.length; i++) {
    runningWidth += tagWidth(skills[i - 1]);
    const diff = Math.abs(totalWidth - runningWidth * 2);
    if (diff < closest) {
      closest = diff;
      cut = i;
    }
  }
  const skillRows = [skills.slice(0, cut), skills.slice(cut)];

  // email is built client-side after mount so it never appears as
  // plain text in the static/prerendered html for scrapers to grab
  let emailHref = "#";
  let emailText = "reveal email";

  onMount(() => {
    const user = "tristenkurutz";
    const domain = "gmail.com";
    emailHref = `mailto:${user}@${domain}`;
    emailText = `${user}@${domain}`;
  });
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
    I'm Tristen, a software engineering student at RIT graduating Dec 2026. I'm
    currently at M&T Bank building a Java test orchestration platform from
    scratch. I care a lot about process and ethics in software. The why behind
    what we build is really important to me, and I want to make sure that what
    we build is accessible to all kinds of people, is maintainable, and secure.
  </p>
  <p>
    Outside of that: I am a cat dad of two, have a Rimworld habit that I
    couldn't be paid a million dollars to break, do amateur photography, and
    pretty much any craft I can get my hands on.
  </p>

  <div class="skills-row">
    <span class="skills-label">Languages & Tools</span>
    <!-- phones are too narrow for two rows of badges, so the row divs collapse
         (display: contents) and the badges wrap on their own down there -->
    <div class="flex flex-wrap gap-1 sm:flex-col sm:flex-nowrap xl:flex-row">
      {#each skillRows as row}
        <div class="contents gap-1 sm:flex sm:flex-wrap xl:flex-nowrap">
          {#each row as skill}
            <span class="skill-tag whitespace-nowrap">{skill}</span>
          {/each}
        </div>
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

<!-- external-link icon used by the contact links -->
{#snippet externalIcon()}
  <svg
    class="inline-block h-[0.85em] w-[0.85em] ml-1 align-[-0.05em]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
{/snippet}

<!-- CONTACT -->
<section id="contact" class="section">
  <h3>Contact</h3>
  <p>
    I'm graduating Dec 2026 and looking for full-time roles. Feel free to reach
    out!
  </p>
  <div class="contact-links">
    <a
      href={emailHref}
      class="contact-link"
      on:click={(e) => {
        if (emailHref === "#") e.preventDefault();
      }}
    >
      <span class="contact-label">Email</span>
      <span class="contact-value">{emailText}{@render externalIcon()}</span>
    </a>
    <a
      href="https://www.linkedin.com/in/tristen-kurutz/"
      target="_blank"
      rel="noopener"
      class="contact-link"
    >
      <span class="contact-label">LinkedIn</span>
      <span class="contact-value">tristen-kurutz{@render externalIcon()}</span>
    </a>
    <a
      href="https://github.com/tristenkurutz"
      target="_blank"
      rel="noopener"
      class="contact-link"
    >
      <span class="contact-label">GitHub</span>
      <span class="contact-value">tristenkurutz{@render externalIcon()}</span>
    </a>
  </div>
</section>

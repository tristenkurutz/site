<script>
  import Accordion from "../components/accordion.svelte";
  import jobs from "../data/industry.json";
</script>

<div class="flex flex-col items-center justify-center">
  <div class="text-left">
    <h2>howdy!</h2>
    <h3>who am i?</h3>
    <p>
      My name is Tristen, I am a senior Software Engineering major at RIT.
      [insert some other cool info about me] Currently looking for full-time
      oppportunities as I graduate in Fall 2026! 👀
    </p>

    <h3>industry experience</h3>
    I've had the opportunity to gain hands-on experience with real-world software
    at various companies, including:

    <div class="mt-2"><Accordion title="test" bullets="hello" /></div>
  </div>
</div>

<script>
  export let data;
</script>

<footer id="contact" class="py-16 text-center space-y-4">
  <h2 class="text-xl font-semibold">Get in Touch</h2>
  <a class="text-accent" href="mailto:{data.contact.email}"
    >{data.contact.email}</a
  >
  <p class="text-xs text-gray-500">© {new Date().getFullYear()}</p>
</footer>

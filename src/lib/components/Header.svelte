<script>
  const links = [{
    name: 'Home',
    href: '/',
  }, {
    name: 'Sign in',
    href: '/login',
  }, {
    name: 'Sign up',
    href: '/register',
  }]
</script>

<header>
  <div class="container py-6 flex justify-between">
    <h1 class='text-4xl'> conduit </h1>
    <nav>
      <ul class='flex gap-4'>
        {#each links as link (link.href)}
          <li>
            <a href={link.href}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
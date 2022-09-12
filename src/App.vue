<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TitleCard from './components/TitleCard.vue'

import { useClient } from 'villus'

useClient({
  url: `${window.location.origin}/graphql`,
})
</script>

<template>
  <header>
    <img alt="Fruta logo" class="logo" src="@/assets/avocado.png" width="100" height="100" />
    <div class="wrapper">
      <TitleCard title="Fruta"/>

      <nav>
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/requirements">Requirements</RouterLink>
        <RouterLink to="/fruits">Fruits</RouterLink>
      </nav>
    </div>
  </header>

  <Suspense>
    <RouterView/>
  </Suspense>
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-primary);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  color: var(--color-text);
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border-color: transparent;
}

@media (min-width: 1024px) {
  header {
    display: grid;
    gap: 1rem;
    min-height: 100%;
    grid-auto-rows: max-content;
    align-content: center;
  }

  .title {
    transition-delay: 0;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  nav a:first-of-type {
    border-color: var(--color-border);
  }

}
</style>

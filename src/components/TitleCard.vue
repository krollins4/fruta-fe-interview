<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="primary">{{ title }}</h1>
    <h3>
      Welcome to this assignment!
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings {
    transition-property: all;
    transition-timing-function:ease-in-out;
    transition-delay: 100ms;
    transition-duration: 400ms;
  }
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<template>
  <router-view/>
</template>

<style>
  :root {
    --main-bg-color: #0d001a;
    --main-text-color: #ffb433;
    --light-text-color: #ffc766;
    --neutral-color: #ffffff;
  }

  body {
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
    font-family: Arial, Helvetica, sans-serif;
  }

  #app {
    width: 90%;
    max-width: 800px;
    margin: auto;
  }

  #nprogress .bar {
    background: var(--main-text-color) !important;
  }
</style>

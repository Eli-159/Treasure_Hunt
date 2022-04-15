<template>
  <router-view/>
</template>

<style>
  :root {
    --main-bg-color: #0d001a;
    --main-text-color: #ffb433;
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
</style>

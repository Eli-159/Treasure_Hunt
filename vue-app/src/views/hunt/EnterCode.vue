<template>
    <h2>Enter Code</h2>
    <form @submit.prevent="submit()">
      <input type="text" v-model="code" required>
      <br>
      <br>
      <br>
      <input type="submit" value="Submit">
    </form>
</template>

<script>
export default {
  name: 'EnterCode',
  props: ['speak'],
  data() {
    return {
      code: ''
    }
  },
  methods: {
    submit() {
      if (this.code) {
        this.$router.push({
          name: 'Clue',
          params: {code: this.code}
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type="text"] {
    background-color: var(--neutral-color);
    color: var(--main-bg-color);
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 3px 6px;
    width: 100%;
    max-width: 400px;
    font-size: 14px;
  }

  input[type="text"]:focus {
    outline: 2px solid var(--main-text-color);
    outline-offset: 1px;
  }

  input[type="submit"] {
    background-color: var(--main-text-color);
    color: var(--main-bg-color);
    padding: 6px 10px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: var(--light-text-color);
  }
</style>

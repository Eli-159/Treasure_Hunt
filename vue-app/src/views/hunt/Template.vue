<template>
  <h1>Tresure Hunt</h1>
  <div class="hr">
    <input type="checkbox" id="speakCheckbox" class="customCheckbox" v-model="speak">
    <label for="speakCheckbox" class="customCheckbox"><span>Speak Clue</span></label>
  </div>
  <br>
  <router-view :speak="speak"/>
</template>

<script>
export default {
  name: 'Clue',
  data() {
    return {
      speak: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin-bottom: 5px;
  }

  .hr {
    width: 100%;
    min-height: 15px;
    background-color: var(--main-text-color);
    color: var(--main-bg-color);
    text-align: right;
    padding: 4px 8px 6px 0;
  }

  input.customCheckbox {
    display: none;
  }

  input.customCheckbox ~ label.customCheckbox span {
    font-size: 15px;
    margin-top: 1px;
    display: inline-flex;
    margin-left: 5px;
  }

  input.customCheckbox ~ label.customCheckbox::before {
    width: 14px;
    height: 14px;
    margin-top: 2px;
    border-radius: 5px;
    border: 1px solid var(--main-bg-color);
    display: inline-block;
    background: var(--main-text-color);
    color: var(--main-text-color);
    text-align: center;
    font-size: 10px;
    content: "\2714";
  }

  input.customCheckbox:checked ~ label.customCheckbox::before {
    background-color: var(--main-bg-color);
  }
</style>
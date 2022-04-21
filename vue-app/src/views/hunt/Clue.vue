<template>
    <div class="heightManage">
      <h2 v-if="GStore.clue">Clue <span v-if="GStore.clue && GStore.clue.showClueNum">{{GStore.clue.clueNum}}</span></h2>
      <strong v-if="GStore.clue">{{GStore.clue.msg}}</strong>
      <br>
      <br>
      <a v-if="GStore.clue && GStore.clue.incLink" v-bind:href="GStore.clue.linkAddress" target="blank">
        {{GStore.clue.linkText ? GStore.clue.linkText : GStore.clue.linkAddress}}
      </a>
    </div>
    <router-link to="/hunt/enter-code">&#x276E; Enter Another Code</router-link>
</template>

<script>
export default {
  name: 'Clue',
  // props: ['code', 'speak'],
  inject: ['GStore'],
  // created() {
  //   console.log('Clue: ', this.GStore);
  //   this.speakClue();
  // },
  // methods: {
  //   speakClue() {
  //     window.speechSynthesis.cancel();
  //     const utterance = new SpeechSynthesisUtterance(this.GStore.clue.msg);
  //     window.speechSynthesis.speak(utterance);
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.heightManage {
    min-height: 180px;
    margin-top: 20px;
  }

  h2 {
    margin-top: 0;
  }

  a {
    color: var(--main-text-color);
  }
</style>

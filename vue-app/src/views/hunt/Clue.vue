<template>
    <div class="heightManage">
      <h2 v-if="clueData">Clue <span v-if="clueData && clueData.showClueNum">{{clueData.clueNum}}</span></h2>
      <strong v-if="clueData">{{clueData.clue}}</strong>
      <br>
      <br>
      <a v-if="clueData && clueData.incLink" v-bind:href="clueData.linkAddress" target="blank">{{clueData.linkText ? clueData.linkText : clueData.linkAddress}}</a>
    </div>
    <router-link to="/hunt/enter-code">&#x276E; Enter Another Code</router-link>
</template>

<script>
import ClueService from '@/services/ClueService.js'

export default {
  name: 'Clue',
  props: ['code', 'speak'],
  data() {
    return {
      clueData: null
    }
  },
  created() {
    ClueService.getClue(this.code).then(res => {
      if (res.data.length == 0) {
        this.clueData = {
          clue: 'That code does not exist.',
          showClueNum: false,
          incLink: false
        };
      } else {
        this.clueData = res.data[0];
      }
    }).catch(err => {
      clueData = {
          clue: 'Sorry, an unexpected occured.',
          showClueNum: false,
          incLink: false
        };;
    }).finally(() => {
      if (this.speak) {
        this.speakClue();
      }
    });
  },
  methods: {
    speakClue() {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(this.clueData.clue);
      window.speechSynthesis.speak(utterance);
    }
  }
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

<script>
  export default {
    data() {
      return {
        test: '',
        tryck: '',
        sant: true,
        bild: '/assets/SG.jpg'
      }
    },
    methods: {
      onClick() {
        this.sant = false
      },
      pressClick() {
        this.sant = true
      },
      changeImg() {
        this.bild = '/assets/MS.jpg'
      },
      changeImg2() {
        this.bild = '/assets/SG.jpg'
      }
    },
    watch: {
      test() {
        this.tryck = this.test
      }
    }
  }
</script>
<style>
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 30%;
    width: 30%;
    object-fit: contain;
  }
  .change {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 8em;
  }
</style>
<template>
  <p>Skriv gärna något :)</p>
  <input v-model="test" />
  <h3>{{ tryck }}</h3>
  <div v-if="sant"><p>MAN-U TOP4</p></div>
  <div v-else><p>MAN-U TOP 7 :(</p></div>
  <input
    type="button"
    @click="onClick"
    value="Truth"
  />
  <input
    type="button"
    @click="pressClick"
    value="Dream"
  />
  <br />
  <img
    alt=""
    :src="bild"
  />
  <input
    class="change"
    type="button"
    @click="changeImg"
    value="Byt Bild"
  />
  <input
    class="change"
    type="button"
    @click="changeImg2"
    value="Reset"
  />
  <p>{{ $store.state.multipler }}</p>

  <input
    type="button"
    @click="$store.commit('multi')"
    value="Press me"
  />
  <input
    type="button"
    @click="$store.commit('reset')"
    value="Reset"
  />
</template>

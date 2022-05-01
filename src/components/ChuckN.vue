<script>
import axios from 'axios';
export default {
  created() {

  axios.get('https://api.chucknorris.io/jokes/random')
.then((response)=>{
this.jokster=response.data
console.log(response.data)

})
    // fetch("https://api.chucknorris.io/jokes/random")
    //   .then((response) => response.json())
    //   .then((jokster) => {
    //     this.jokster = jokster.value;
    //   });
  },
  data() {
    return { jokster: [] };
  },
};
</script>
<template>
  <h2>{{ jokster.value }}</h2>
  <img src="../../assets/ChuckN.jpeg" />
</template>

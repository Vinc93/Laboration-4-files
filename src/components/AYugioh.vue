<script>
import axios from 'axios';
export default{
data(){
  return{
          YData:[]
        }
      },
created(){

axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
.then((response) => {
this.YData=response.data.data
console.log(response.data.data)
})



// fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
// .then((response) => response.json())
//       .then((tests) => {
//         this.YData = tests.data;
//       });


},



}
</script>
<style>
.scroll{
  margin-left: auto;
  margin-right: auto;
  height:30em; width:30%;
  overflow:hidden; overflow-y:scroll;

}
.list{
  list-style: none;
}</style>
<template>
  <nav class="scroll">
    <ul class="list">
      <li :key="testing.id" v-for="testing in YData"><h1>{{ testing.name }}</h1></li>
    </ul>
  </nav>
</template>

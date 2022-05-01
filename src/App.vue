<script>




export default {
  components: {},
  }
</script>
<style>
body{
  background-image: url("../assets/anime<3.jpg");
  text-align: center;
}

.testsss{
  display: inline-block ;
  margin:1em;}
</style>

<template>
  <nav>
    <ul>
      <li class="testsss">
        <RouterLink to="/">Random</RouterLink>
      </li>
      <li class="testsss">
        <RouterLink to="/yugio">Yugio-kort</RouterLink>
      </li>
      <li class="testsss">
        <RouterLink to="/chucks">Chuck-skämt</RouterLink>
      </li>
      <li class="testsss">
        <RouterLink to="/hello/Forrest">Guess who?</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

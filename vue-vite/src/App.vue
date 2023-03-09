<template>
  <div>
    <NavBar/>
    <h1>{{ title }}</h1>
    <CounterCp @aaa="showAdd" :start="num" :index="index" v-for="(num, index) in nums" :key="index"/>
    <Footer/>
  </div>
</template>
<script>
import CounterCp from "./components/CounterCp.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    CounterCp,
    NavBar,
    Footer,
  },
  data() {
    return {
      title: "My App CP",
      nums: [1, 2, 3],
    }
  },
  methods: {
    showAdd(x, y) {
      console.log("show add", x, y);
      this.nums[y] = x;
    }
  },
}
</script>
<style>
@import "bootstrap/dist/css/bootstrap.min.css";

</style>
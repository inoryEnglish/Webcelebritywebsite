<template>
  <div id="app">
    <Nav></Nav>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/components/Nav/Nav.vue";
import Footer from "./components/Footer/Footer";
export default {
  name: "App",
  components: {
    Nav: Nav,
    Footer: Footer
  }
}
</script>
<style lang="less">
@import "assets/publiccss/theme.css";
@import "assets/publiccss/common.css";
#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main{
    flex: 1;
    z-index: 1;
  }
}
</style>

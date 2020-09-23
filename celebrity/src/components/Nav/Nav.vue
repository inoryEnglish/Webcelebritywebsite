<template>
<div class="nav">
<header>
  <div class="nav-logo">
      <!--    <img src="../../assets/logo.png" alt="">-->
    <span class="web-font">logo</span>
  </div>
  <div class="nav-link">
    <router-link
        class="web-font"
        v-for="(item,index) in NavList"
        :key="index"
        :to="{path: item.link}">
      {{item.name}}
    </router-link>
  </div>
  <div class="nav-login">
    <router-link to="">登陆</router-link>
    <router-link to="">注册</router-link>
  </div>
</header>
</div>
</template>

<script>
  export default {
    name: "Nav",
    props: {
      NavList: {
        type: Array,
        default: function (){
          return [
            {
              name: "首页",
              link: "/"
            },
            {
              name: "YouTube热门排行榜",
              link: "/youtube"
            },
            {
              name: "Instagram热门排行榜",
              link: "/instagram"
            },
            {
              name: "TikTok 热门排行榜",
              link: "/tiktok"
            },
            {
              name: "代运营",
              link: "/thirdparthnar"
            },
            {
              name: "猎头",
              link: "/headHunting"
            }
          ]
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">

  .nav{
    width: 100%;
    background-color: var(--nav-bg);
    display: flex;
    justify-content: center;
    header{
      width: 84%;
      height: 160px;
      display: flex;
      align-items: center;
      //justify-content: center;
      a{
        white-space: nowrap;
        color: var(--nav-a);
        font-family: var(--nav-typeface);
      }
      .router-link-active {
        color: var(--nav-isactive);
      }
      .nav-logo{
        min-width: 242px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        span{
          margin-right: .6em;
        }
        img{
          width: 100px;
        }
      }
      .nav-link{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
          font-size: 18px;
          margin: 0 32px;
          &:first-of-type{
            margin-left: 18px;
          }
        }
      }
      .nav-login{
        white-space: nowrap;
        margin-left: auto;
        a{
          font-size: 16px;
          margin: 0 56px;
        }
      }
    }
  }
</style>

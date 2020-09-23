<template>
<div class="footer">
<footer>
  <div class="footer-logo">
    <span>
      logo
    </span>
  </div>
  <div class="footer-gy">
    <h3>{{ gy.name }}</h3>
    <p>{{ gy.paragraph }}</p>
  </div>
  <div class="footer-lxwm">
    <h3>{{ lxwm.name }}</h3>
    <p>{{ lxwm.paragraph }}</p>
  </div>
  <div class="footer-mjsq">
    <div class="footer-code">
      <img src="" alt="">
    </div>
    <h3>{{ mjsq.name }}</h3>
  </div>
</footer>
</div>
</template>

<script>
export default {
  name: "Footer",
  props: {
      gy:{
        type: Object,
        default: function (){
          return {
            name: "关于",
            paragraph: `从我们的定制策略到执行到报告，您可以信任我们的行业专家团队，以确保将经过验证的内容提供给您的最佳受众。 `
          }
        }
      },
      lxwm:{
        type: Object,
        default: function (){
          return {
            name: "联系我们",
            paragraph: `邮箱：1621600481@qq.com
            手机：13147042291
            微信：1621600481
            QQ：1621600481 `
          }
        }
      },
      mjsq:{
        type: Object,
        default: function (){
          return {
            name: "卖家群社",
          }
        }
      }

  }
}
</script>

<style scoped lang="less">
.footer{
  background-color: var(--footer-bg);
  footer{
    height: 348px;
    .footer-logo{
      span{
        font-size: 48px;
        font-family: SourceHanSansSC,SourceHanSansSC-Medium,serif;
        font-weight: 500;
        color: var(--footer-logo);
      }
    }
    .footer-gy{}
    .footer-lxwm{}
    .footer-mjsq{
      .footer-code{}
    }
  }
}
</style>
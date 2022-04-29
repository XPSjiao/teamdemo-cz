<template>
<div>
  <nav class="main-nav">
    <ul>
      <li class="cur"><router-link to="/allNews">新闻</router-link></li>
      
      <li><router-link to="/CountrySideNews">国内</router-link></li>
      <li><router-link to="/WorldNews">国际</router-link></li>
      <!-- 使用命名路由传参 -->
      <li><router-link :to="{name:'SocietyNews'}">社会</router-link></li>
      <li><router-link :to="{name:'RulawNews'}">法制</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</div>
  
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "news",
};
</script>
<style scoped>
*{
	margin: 0;
	padding: 0;
}
/* 去除ul和ol的小圆点 */
ul,ol{
	list-style: none;
}
/* 去掉所有超级链接的下划线 */
a{
	text-decoration: none;
}
.main-nav {
  /* 不写宽度可以自动撑满 */
  /* width: 1920px; */
  height: 60px;
  background-color: #00978e;
}
.main-nav ul {
  width: 100%;
  height: 60px;
  margin: 0 auto;
}
.main-nav ul li {
  float: left;
  width: 150px;
  text-align: center;
  /* 行高等于盒子高 */
  line-height: 60px;
}
.main-nav ul li.cur {
  background-color: #015e58;
}
.main-nav ul li a {
  /* 转为块级元素 */
  display: block;
  width: 150px;
  height: 60px;
  font-family: Helvetica;
  font-size: 16px;
  color: #ffffff;
}
.main-nav ul li a:hover {
  background-color: orange;
}
</style>
>

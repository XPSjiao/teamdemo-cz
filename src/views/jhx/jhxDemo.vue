<template>
<div class="bg">
  <div class="home">
      <div class="side-bar">
      <router-link to="/jhx/news">新闻</router-link>
      <router-link to="/jhx/MyArea">MyArea</router-link>
      <router-link to="/"><button class="iconfont">&#xe690;</button></router-link>
    </div>
    <router-view class="container"></router-view>
  </div>
</div>
</template>
<script>
  export default {
    name:"jhxDemo",
  }
</script>
<style scoped >
.bg{
  background-image: url("https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/web%E8%83%8C%E6%99%AF/bg-30.jpg");
}
.home {
  display: flex;
}

.side-bar {
  display: flex;
  flex-direction: column;
  width: 10%;
  margin-right: 10px;
  height: 500px;
  background-color: #fff;
}

a {
  background-color: #f6f6f6;
  color: #5397ad;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-align: center;
}
.router-link-active {
  background-color: #5397ad;
  color: #fff;
}
.content {
  flex: 1;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
</style>

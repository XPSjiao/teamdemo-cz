<template>
  <div class="contaier">
    <div class="news">
      <img
        src="//p1.img.cctvpic.com/photoworkspace/2022/04/14/2022041400443986948.jpg"
        alt=""
      />
      <div class="text">
        <h2>面对奥密克戎莫大意！坚持做好个人防护</h2>
        <p>
          近期，国内疫情防控形势依然严峻复杂。奥密克戎是不是“大号流感”？飞絮会不会导致新冠病毒传播？如何做好个人防护？国务院联防联控机制有关专家作出权威解答。
        </p>
      </div>
    </div>
    <div class="news">
      <img
        src="//p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/4/14/1649887410915_205.jpg"
        alt=""
      />
      <div class="text">
        <h2>美国纽约地铁枪击案嫌疑人现已被拘留</h2>
        <p>
纽约州布鲁克林地铁枪击案的嫌疑人弗兰克·詹姆斯已被逮捕拘留。警方根据现场留下的枪支、詹姆斯租用的货车、监控视频里嫌疑人所背袋子以及袋子中所留的物品寻找并锁定了詹姆斯为嫌疑人。        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "allNews",
};
</script>
<style>
.news {
  margin-top: 5px;
  height: 25%;
  border: 1px solid grey;
  background-color: #fff;
  display: flex;
}
p {
  margin-top: 5%;
}



img {
  width: 50%;
}
</style>

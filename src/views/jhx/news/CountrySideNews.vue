<template>
  <div class="contaier">
    <div class="news">
      <img
        src="//p4.img.cctvpic.com/photoworkspace/2022/04/14/2022041400534397177.jpg"
        alt=""
      />
      <div class="text">
        <h2>我国国家级育制种基地增加到216个 覆盖粮棉油糖果菜茶等重要农作物</h2>
        <p>
农业农村部近日公布了国家级制种大县和区域性良繁基地认定结果，我国国家级育制种基地达到216个，覆盖了粮棉油糖果菜茶等重要农作物。        </p>
      </div>
    </div>
    <div class="news">
      <img
        src="//p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/4/14/1649887410915_205.jpg"
        alt=""
      />
      <div class="text">
        <h2>面对奥密克戎莫大意！坚持做好个人防护</h2>
        <p>
          近期，国内疫情防控形势依然严峻复杂。奥密克戎是不是“大号流感”？飞絮会不会导致新冠病毒传播？如何做好个人防护？国务院联防联控机制有关专家作出权威解答。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CountrySideNews",
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

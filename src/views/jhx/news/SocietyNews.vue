<template>
  <div class="contaier">
    <div class="news">
      <img
        src="//p1.img.cctvpic.com/photoworkspace/2022/04/14/2022041400233585702.jpg"
        alt=""
      />
      <div class="text">
        <h2>医院太平间为何成为监管“灰色地带”</h2>
        <p>
名目种类繁多的“一条龙”殡葬服务到底是什么？高昂的殡葬费是否存在价格欺诈？殡葬服务行业缘何沦为监管盲区？记者进行了追踪。        </p>
      </div>
    </div>
    <div class="news">
      <img
        src="https://p3.img.cctvpic.com/photoAlbum/photo/2022/04/14/PHOTdKI06x1an05m50h330de220414_320x320.jpg"
        alt=""
      />
      <div class="text">
        <h2>英国：伦敦大本钟历时五年修缮完成</h2>
        <p>
          当地时间2022年4月13日，英国伦敦，随着最后一件脚手架被移除，伦敦地标建筑大本钟从2017年开始的修缮工作正式完成。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SocietyNews",
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

<template>
  <div class="contaier">
    <div class="news">
      <img
        src="//p1.img.cctvpic.com/photoworkspace/2022/04/14/2022041400422029900.jpg"
        alt=""
      />
      <div class="text">
        <h2>坚持核污染水排海 日本政府执迷不悟</h2>
        <p>
          去年4月13日，日本政府不顾国内外强烈反对，正式决定将福岛第一核电站核污染水排入太平洋。一年来，尽管国内外反对之声不断，日本政府和东京电力公司依然执迷不悟，继续推进核污染水排海计划。
        </p>
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
  name: "WorldNews",
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

<template>
  
<div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">默认</span>
    <el-image :src="src"></el-image>
  </div>
 
</div>
  
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
   return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
  },
  methods: {},
  mounted: function () {
    //alert("页面一加载，就会弹出此窗口" + this.$route.query.id);
    this.src="/images/"+this.$route.query.id
  },
};
</script>

<style  scoped>
</style>
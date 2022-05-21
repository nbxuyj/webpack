<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">歌词查询</el-menu-item>
      <el-menu-item index="2">歌词上传</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === "2") {
        //歌词查询
        if (this.$route.path != "/upload") {
          this.$router.push("/upload");
        }
      } else {
        console.log("点击查询:" + this.$route.path);
        //歌词上传
        if (this.$route.path != "/") {
          this.$router.push("/");
        }
      }
    },
  },
};
</script>

<style  scoped>
</style>
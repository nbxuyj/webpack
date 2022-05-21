<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="歌词简拼">
        <el-input v-model="formInline.user" placeholder="例如：dzg可查询大中国"></el-input>
      </el-form-item>
            <el-form-item label="歌词名称">
        <el-input v-model="formInline.user" placeholder="例如：大中国"></el-input>
      </el-form-item>
      <el-form-item label="歌手名称">
               <el-input v-model="formInline.user" placeholder="例如：大中国"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <hr>
    <Show></Show>
  </div>

</template>

<script>
import Show from './Show.vue'

export default {
  name: "Find",
  components: {

      Show
  },
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style  scoped>
</style>
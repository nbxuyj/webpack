<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="歌曲简拼">
        <el-input
          v-model="formInline.gqJP"
          placeholder="例如：dzg可查询大中国"
        ></el-input>
      </el-form-item>
      <el-form-item label="歌曲名称">
        <el-input
          v-model="formInline.gqName"
          placeholder="例如：大中国"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="歌手名称">
        <el-input
          v-model="formInline.gsName"
          placeholder="例如：高枫"
        ></el-input>
      </el-form-item> -->

      <!-- <el-form-item label="歌手简拼">
        <el-input v-model="formInline.gsJP" placeholder="例如gs"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <hr />
    <Show
      @currentChange="currentChange"
      @sizeChange="sizeChange"
      :tableData="tableData"
      :totalSize="totalSize"
    ></Show>
  </div>
</template>

<script>
import Show from "./Show.vue";

export default {
  name: "Find",
  components: {
    Show,
  },
  data() {
    return {
      formInline: {
        gsJP: "",
        gsName: "",
        gqJP: "",
        gqName: "",
      },
      tableData: [],
      totalSize: 0,
      pageSize:10,
      pageIndex:1
    };
  },
  methods: {
    onSubmit() {
      this.commonQuery(1, 1);
    },

    currentChange(pr) {
      console.log("父组件收到页数改变" + pr);
      this.pageIndex=pr;
      this.commonQuery();
    },

    sizeChange(pr) {
      console.log("父组件收到条数改变" + pr);
      this.pageSize=pr;
      this.commonQuery();
    },

    //通用查询
    async commonQuery(pageIndex) {
      var obj = {
        Gqjp: this.formInline.gqJP,
        GqName: this.formInline.gqName,
        GsName: this.formInline.gsName,
        Gsjp: this.formInline.gsJP,
        guid: "",
        PageSize: this.pageSize,
        PageIndex: this.pageIndex,
        ClientQueryType: 0,
      };

      const { data:res } = await this.axios({
        method: "get",
        url: "/api/musicsheet/GetObjCount",
        params: obj,
      });

      console.log("查询总数"+res);
      this.totalSize = res;

      const { data } = await this.axios({
        method: "get",
        url: "/api/musicsheet/getobj",
        params: obj,
      });

      this.tableData = [];
      for (let i = 0; i < data.length; i++) {
        //遍历node伪数组每一项，给每一项增加一个class
        this.tableData.push(data[i]);
      }

      //this.totalSize =data.length;


    },
  },

  created() {},
  mounted() {
    //自动加载。
    this.onSubmit();
  },
  updated() {
    console.log("数据发生改变");
  },
};
</script>

<style  scoped>
.demo-form-inline {
  margin-top: 20px;
}
</style>
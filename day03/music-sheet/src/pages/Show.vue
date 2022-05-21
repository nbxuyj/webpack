<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" label="添加日期" >
      </el-table-column>
      <el-table-column prop="name" label="歌名" > </el-table-column>
      <el-table-column prop="address" label="歌手"> </el-table-column>
      <el-table-column   label="操作" >
        <template>
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Show",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "水手",
          address: "郑智化",
        },
               {
          date: "2016-05-02",
          name: "一生有你",
          address: "郑智化",
        },
                {
          date: "2016-05-02",
          name: "大中国",
          address: "高枫",
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>

<style  scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
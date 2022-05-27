<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @row-click="rowClick"
    >





      <el-table-column prop="ModifyTime" label="日期"> </el-table-column>
  

      <el-table-column prop="GqName" label="歌名"> </el-table-column>
      <el-table-column prop="GsName" label="歌手"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.$index, tableData)"
            type="text"
            size="small"
            >查看</el-button
          >
          <el-button
            @click="editClick(scope.$index, tableData)"
            type="text"
            size="small"
            >编辑</el-button
          >
          <el-button
            @click="deleteClick(scope.$index, tableData)"
            type="text"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Show",
  props: ["tableData"],
  components: {},
  data() {
    return {};
  },
  methods: {
    rowClick(row)
    {
     console.log("row:" + row);
     this.$router.push({
        path: "/showdetail",
        query: { id: row.Filepath },
      });
    },
    handleClick(index, rows) {
      console.log("row[index]:" + rows[index].Filepath);
      this.$router.push({
        path: "/showdetail",
        query: { id: rows[index].Filepath },
      });
    },

    editClick(index, rows) {
      console.log("row[index]:" + rows[index].Guid);
      this.$router.push({ path: "/upload", query: { id: rows[index].Guid } });
    },
    deleteClick(index, rows) {
      console.log("row[index]:" + rows[index].Guid);

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //调用删除
          this.axios({
            method: "Post",
            url: "/api/musicsheet/delete",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify(rows[index].Guid),
          }).then((p) => {
            this.$message("保存成功！");
            this.$router.push({ path: "/find" });
          });

          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
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
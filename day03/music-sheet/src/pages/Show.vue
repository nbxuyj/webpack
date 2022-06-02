<template>
  <div>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @row-click="rowClick"
    >
      <el-table-column prop="ModifyTimeStr" label="日期"> </el-table-column>

      <el-table-column prop="GqName" label="歌名"> </el-table-column>
      <!-- <el-table-column prop="GsName" label="歌手"> </el-table-column> -->

      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleClick(scope.$index, tableData)"
            >查看</el-button
          > -->
          <el-button size="mini" @click="editClick(scope.$index, tableData)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.stop="deleteClick(scope.$index, tableData)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-switch v-model="value"> </el-switch>
    <el-pagination
      :hide-on-single-page="value"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10,30, 50, 100, 200]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ["totalSize", "tableData"],
  components: {},
  data() {
    return {
      //显示一页时自动隐藏。
      value: false,
      currentPage4: 1,
      loading: true
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit('sizeChange',val)

    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit('currentChange',val)
    },

    rowClick(row) {
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
            this.$router.push({ path: "/find" });
          });

          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          // this.$message({
          //   type: "info",
          //   message: "已取消删除",
          // });
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
  updated() {
    //console.log("show数据发生改变" + this.totalParam);
    this.loading=false;
  },
  beforeUpdate() {
    //console.log("show数据发生之前：" + this.totalParam);
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
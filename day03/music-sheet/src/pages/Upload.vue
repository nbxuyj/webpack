<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent>
      <el-form-item label="歌名">
        <el-input v-model="form.gqName"></el-input>
      </el-form-item>
      <el-form-item label="歌手">
        <el-input v-model="form.gsName"></el-input>
      </el-form-item>
      <el-form-item label="文件名">
        <el-input v-model="form.fileName" :disabled="edit"></el-input>
      </el-form-item>

      <el-form-item label="上传图片">
        <el-upload
          class="upload-demo"
          action="/api/file/UploadFileStream"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="4"
          :on-exceed="handleExceed"
          :file-list="fileList"
          :on-change="handleChange"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  //用于标识是编辑还是新增。

  data() {
    return {
      showClass: false,
      edit: true,
      form: {
        gqName: "",
        gsName: "",
        fileName: "",
        guid: "",
      },
      fileList: [],
    };
  },
  methods: {
    onSubmit() {
      var dp = {
        gqName: this.form.gqName,
        gsName: this.form.gsName,
        filepath: this.form.fileName,
        guid: this.form.guid,
      };

      if ((this.form.fileName.length == 0)) {
          this.$message("请上传文件！");
          return;
      }

      //console.log("准备提交："+dp.guid);
      this.axios({
        method: "Post",
        url: "/api/musicsheet/post",
        data: dp,
      }).then((p) => {
        this.$message("Post保存成功！");
        //this.$router.push({ path: "/find" });
        this.form.gqName = "";
        this.form.gsName = "";
        this.form.fileName = "";
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.updateList(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
      //刷新文件名称。
      //this.form.fileName = file.response;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 4 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleChange(file, fileList) {
      this.updateList(file, fileList);
    },
    //更新，删除
    updateList(file, fileList) {
      console.log(file, fileList);
      this.form.fileName = "";
      for (var i = 0; i < fileList.length; i++) {
        this.form.fileName = this.form.fileName + "," + fileList[i].response;
      }

      if (this.form.fileName.length > 0) {
        this.form.fileName = this.form.fileName.substring(1);
      }
    },
  },

  mounted: async function () {
    //alert("页面一加载，就会弹出此窗口" + this.$route.query.id);
    if (this.$route.query.id != null) {
      //编辑。根据歌名相同，则替换。
      //重新查询。
      const { data } = await this.axios({
        method: "get",
        url: "/api/musicsheet/get",
        params: { id: this.$route.query.id },
      });

      console.log("根据guid加载：" + data.Guid);
      this.form.guid = data.Guid;
      this.form.gqName = data.GqName;
      this.form.gsName = data.GsName;
      this.form.fileName = data.Filepath;
    }
  },
};
</script>
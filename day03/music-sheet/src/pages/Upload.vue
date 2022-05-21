<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent>
      <el-form-item label="歌名">
        <el-input v-model="form.gqName"></el-input>
      </el-form-item>
      <el-form-item label="歌手">
        <el-input v-model="form.gsName"></el-input>
      </el-form-item>

      <el-form-item label="上传图片">
        <el-upload
          class="upload-demo"
          action="http://localhost:13827/api/file/UploadFileStream"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"

          :limit="1"
          :on-exceed="handleExceed"
          :file-list="form.fileList"
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
  data() {
    return {
      form: {
        gqName: "",
        gsName: "",
        fileList: []
      },
      
    };
  },
  methods: {
    onSubmit() {

      var dp={
          gqName:this.form.gqName, 
          gsName:this.form.gsName,
          filepath:this.form.fileList[0]
      }  


      this.axios({
        method: "Post",
        url: "http://localhost:13827/api/musicsheet/post",
        data: dp,
      }).then((p) => {
        console.log(p);
      });
    },
    handlePreview(file) {
      this.filepath=file.response;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
  },
};
</script>
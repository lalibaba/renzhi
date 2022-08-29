<template>
  <div>
    <el-upload
      v-loading="loading"
      element-loading-text="上传中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.2)"
      action="#"
      :on-change="change"
      :http-request="onrequest"
      list-type="picture-card"
      :file-list="fileList"
      :on-remove="remove"
      :on-preview="preview"
      :before-upload="beforeUpload"
      :limit="limit"
      :class="`${fileList.length===limit ? 'hiddenAdd':''}`"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <el-dialog title="图片预览" :visible.sync="previewShow">
      <img style="width:100%" :src="imgUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5'
const cos = new COS({
  SecretId: 'AKIDlKgphHacOtOcZEbhV2IH1VieMp0uXu0o',
  SecretKey: 'bw0xFG0ScV6PQBguqVt0qPhhQs2vWpvl'
})
export default {
  name: 'ImageUpload',
  components: {},
  props: {
    limit: {
      type: Number,
      default: 1
    },
    // eslint-disable-next-line vue/require-default-prop
    beforeUploadCheck: Function
  },
  data() {
    return {
      loading: false,
      fileList: [
        // { name: 'default', url: 'http://destiny001.gitee.io/image/cxk.gif' }
      ],
      previewShow: false,
      imgUrl: ''
    }
  },
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    // 文件上传成功失败都会触发
    change(file, fileList) {
      this.fileList = fileList
    },
    // 覆盖默认是action， 自定义上传到腾讯云
    onrequest(data) {
      this.loading = true
      // 腾讯云cos
      cos.putObject({
        Bucket: 'ywj-hr32-1313544678', /* 填入您自己的存储桶，必须字段 */
        Region: 'ap-nanjing', /* 存储桶所在地域，例如ap-beijing，必须字段 */
        Key: data.file.name, /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
        StorageClass: 'STANDARD',
        Body: data.file, // 上传文件对象
        onProgress: function(progressData) {
          console.log(JSON.stringify(progressData))
          // 这个就是上传的百分比
          // params.percent 表示当前上传的进度
        }
      }, (err, data) => {
        console.log(err || data)
        this.loading = false
        if (!err && data.statusCode === 200) {
          // 成功或值失败均进入该函数
          // err null false 没有错
          // err 不为null true 有错
          if (err || data.statusCode !== 200) {
            return this.$message.error('亲,上传失败,请重试')
          }
          this.$emit('onSuccess', {
            url: 'https://' + data.Location
          })
        }
      })
    },
    // 删除文件
    remove(file, fileList) {
      // console.log(file)

      this.fileList = fileList
    },
    // 预览弹窗
    preview(file) {
      this.previewShow = true
      this.imgUrl = file.url
    },
    // 上传图片前校验
    beforeUpload(file) {
      if (this.beforeUploadCheck && !this.beforeUploadCheck(file)) {
        return false
      }
      // 一般分两种情况
      // 自定义(外部传的函数) 完全 ==》所有的逻辑取决于 自定义， 自定义和默认是相互排斥的
      // if (this.beforeUploadCheck) {
      //   return this.beforeUploadCheck(file)
      // }
      //  先取决于自定义 再默认， 自定义和默认是不相互排斥的

      // if (this.beforeUploadCheck && !this.beforeUploadCheck(file)) {
      //   return false
      // }
      const type = ['image/gif', 'image/png', 'image/jpeg', 'image/jpg']
      const maxSize = 1024 * 1024 * 2
      if (!type.includes(file.type)) {
        this.$message.error(`请选择以下图片格式：${type.join(',')}`)
        return false
      } else if (file.size > maxSize) {
        this.$message.error('图片需小于2MB')
        return false
      }

      return true
    }

  }
}
</script>

<style lang="scss">
.hiddenAdd {
  .el-upload--picture-card{
    display: none;
  }
}
</style>

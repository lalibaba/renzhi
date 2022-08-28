<template>
  <div>
    <UploadExcel :on-success="onSuccess" />
  </div>
</template>

<script>
import { importEmployee } from '@/api'
export default { // 计算属性
  name: 'Import',
  components: {
  }, // 方法
  props: {
  },
  data() {
    return {

    }
  },
  computed: {
    type() {
      return this.$route.query.type
    }
  }, // props传值

  methods: {
    async onSuccess({ results }) {
      if (this.type === 'user') {
        // 映射关系
        const userRelations = {
          '入职日期': 'timeOfEntry',
          '手机号': 'mobile',
          '姓名': 'username',
          '转正日期': 'correctionTime',
          '工号': 'workNumber'
        }
        const arr = results.map(ele => {
          const user = {}
          Object.keys(ele).forEach(keyname => {
            // key是当前的中文名 找到对应的英文名
            if (userRelations[keyname] === 'timeOfEntry' || userRelations[keyname] === 'correctionTime') {
              user[userRelations[keyname]] = new Date(this.formatDate(ele[keyname], '/')) // 只有这样, 才能入库
              return
            }
            user[userRelations[keyname]] = ele[keyname]
          })
          return user
        })
        await importEmployee(arr)
        this.$message.success('导入成功')
      }

      this.$router.back()
    },
    formatDate(numb, format) {
      const time = new Date(numb * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      const year = time.getFullYear() + ''
      const month = time.getMonth() + 1 + ''
      const date = time.getDate() - 1 + ''
      if (format && format.length === 1) {
        return year + format + month + format + date
      }
      return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
    }
  }
}
</script>

<style  scoped>

</style>

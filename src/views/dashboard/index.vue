<template>
  <div class="dashboard-container">
    <div v-color="'blue'" class="dashboard-text">name: {{ this.$store.getters.username }}

    </div>
    <ImageUpload @onSuccess="onSuccess" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import {export} from '@/vendor/Export2Excel'
// import('@/vendor/Export2Excel').then(excel => {
//   excel.export_json_to_excel({
//     header: [1, 2], // 表头 必填
//     data: [[3, 4], [5, 6]], // 具体数据 必填
//     filename: 'excel-list', // 非必填
//     autoWidth: true, // 非必填
//     bookType: 'xlsx' // 非必填
//   })
// })
export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    // this.beforeUpload()
  },
  methods: {
    onSuccess(val) {
      console.log(val)
    }
    // this.$store.dispatch('user/getUserInfo')

  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

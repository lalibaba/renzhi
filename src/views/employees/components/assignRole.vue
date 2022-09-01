<template>
  <el-dialog
    v-loading="loading"
    title="分配角色"
    :visible="value"
    :before-close="handleClose"
  >
    <!-- <Mytext v-bind="$attrs" v-on="$listeners" /> -->
    <el-checkbox-group v-model="roleIds">
      <el-checkbox v-for="item in roleList" :key="item.id" :label="item.id">{{ item.name }} </el-checkbox>

    </el-checkbox-group>
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button type="primary" size="small" @click="btnOk">确定</el-button>
        <el-button size="small" @click="handleClose">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getRoleList, assignRoles } from '@/api'
import { getUserDetailById } from '@/api'
// import Mytext from './test.vue'
export default {
  name: 'HrsaasAssignRole',
  components: {
    // Mytext
  },
  // inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      roleIds: [],
      roleList: [],
      loading: false
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.getUserDetailById()
      }
    }
  },
  created() { },
  methods: {
    // 确定键
    async btnOk() {
      try {
        this.loading = true
        await assignRoles({ id: this.$attrs['userid'], roleIds: this.roleIds })
        this.$message.success('更新成功')
        this.handleClose()
      } catch (e) { console.dir(e) } finally { this.loading = false }
    },
    // 关闭弹窗
    handleClose() {
      this.$emit('input', false)
      this.roleIds = []
    },
    // 获取所有角色
    async getRoleList() {
      const { rows } = await getRoleList()
      this.roleList = rows
    },
    // 获取角色信息
    async getUserDetailById() {
      // console.log(999, this.$attrs.userid)
      const { roleIds } = await getUserDetailById(this.$attrs['userid'])
      this.roleIds = roleIds || []
    }
  }
}
</script>

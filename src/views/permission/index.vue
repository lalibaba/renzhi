<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 靠右的按钮 -->
      <page-tools :is-show="false">
        <template v-slot:after>
          <el-button type="primary" size="small" @click="addPremission('0',1)">添加权限</el-button>
        </template>
      </page-tools>
      <!-- 表格 -->
      <el-table :data="perList" row-key="id" :default-expand-all="true">
        <!-- <el-table-column label="序号" type="index" /> -->
        <el-table-column align="left" label="名称" prop="name" />
        <el-table-column align="left" label="标识" prop="code" />
        <el-table-column align="left" label="描述" prop="description" />
        <el-table-column align="left" label="操作">
          <template slot-scope="{row}">
            <el-button v-if="row.type*1===1" type="text" icon="el-icon-circle-plus-outline" @click="addPremission(row.id,2)">添加</el-button>
            <el-button type="text" icon="el-icon-edit" @click="edit(row)">编辑</el-button>
            <el-button type="text" style="color:red" icon="el-icon-delete" @click="delPermissio(row.id)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <!-- //增加按钮弹窗 -->
    <addPremission ref="addPremission" :dialog-visible.sync="dialogVisible" />

  </div>
</template>

<script>
import addPremission from './components/add-permission.vue'
import { getPermissionList, delPermission } from '@/api'
import { tranListToTreeData } from '@/utils'
export default {
  name: 'Hrsaas1Index',
  components: {
    addPremission
  },
  data() {
    return {
      perList: [],
      loading: false,
      dialogVisible: false
    }
  },

  mounted() {
    this.getPermissionList()
  },

  methods: {
    // 修改权限
    edit(row) {
      this.$refs.addPremission.formData = { ...row }
      this.dialogVisible = true
    },
    // 添加权限
    addPremission(id, type) {
      this.$refs.addPremission.formData.type = type
      this.$refs.addPremission.formData.pid = id
      this.dialogVisible = true
    },
    // 获取所有权限列表
    async getPermissionList() {
      try {
        this.loading = true
        const res = await getPermissionList()
        this.perList = tranListToTreeData(res, '0')
      } catch (e) { console.dir(e) } finally {
        this.loading = false
      }
    },
    // 删除指定权限
    async delPermission(id) {
      try {
        await this.$confirm('确认删除', '提示', {
          type: 'warning'
        })
        await delPermission(id)
        this.getPermissionList()
        this.$message.success('删除成功')
      } catch (e) {
        this.$message.error('删除失败')
        console.dir(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

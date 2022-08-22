<template>
  <el-dialog :title="`${ roleForm.id ? '修改' : '新增'}角色`" :visible.sync="dialogVisible" :before-close="handleClose">
    <el-form
      ref="roleDialogForm"
      :model="roleForm"
      label-width="80px"
    >
      <el-form-item
        prop="name"
        label="角色"
        :rules="[{ required: true, message: '角色名称不能为空', trigger: 'blur' }]"
      >
        <el-input v-model="roleForm.name" placeholder="请输入角色" />
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="roleForm.description" type="textarea" row="3" placeholder="请输入描述" />
      </el-form-item>
    </el-form>
    <el-row slot="footer" type="flex" justify="center" align="middle" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button :loading="loading" type="primary" @click="submitRole">确 定</el-button>
    </el-row>
  </el-dialog>
</template>

<script>
import { addRole, updateRole } from '@/api'
export default {
  name: 'Hrsaas1RoleDialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      roleForm: { name: '', description: '' }

    }
  },
  methods: {
    // 关闭弹出
    handleClose() {
      // console.log(111)
      this.$emit('update:dialogVisible', false)
      this.$refs.roleDialogForm.resetFields() // resetFields移除校验结果重置/重置成初始值
      this.roleForm = { name: '', description: '' }
    },
    // 提交角色信息
    async submitRole() {
      try {
        await this.$refs.roleDialogForm.validate()
        // 请求
        this.loading = true
        this.roleForm.id ? await updateRole(this.roleForm) : await addRole(this.roleForm)
        // 页面添加
        this.$parent.getRoleList()
        // 提示新增成功
        this.$message.success(`角色${this.roleForm.id ? '修改' : '新增'}成功`)
        // 弹窗关闭
        this.handleClose()
      } catch (e) {
        console.dir(e)
      } finally {
        this.loading = false
      }
    }

  },
  prop: {
  }
}
</script>

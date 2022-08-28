<template>
  <el-dialog title="新增员工" :visible="showDialog" :before-close="handleClose">
    <!-- 表单 -->
    <el-form ref="Form" label-width="120px" :model="formData" :rules="rules">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="formData.username" style="width:80%" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="formData.mobile" style="width:80%" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="入职时间" prop="timeOfEntry">
        <el-date-picker v-model="formData.timeOfEntry" style="width:80%" placeholder="请选择入职时间" />
      </el-form-item>
      <el-form-item label="聘用形式" prop="formOfEmployment">
        <el-select v-model="formData.formOfEmployment" style="width:80%" placeholder="请选择">
          <el-option v-for="item in hireType " :key="item.id" :label="item.value" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="工号" prop="workNumber">
        <el-input v-model="formData.workNumber" style="width:80%" placeholder="请输入工号" />
      </el-form-item>
      <el-form-item label="部门" prop="departmentName">
        <el-input v-model="formData.departmentName" style="width:80%" placeholder="请选择部门" @focus="getDepartments" />
        <el-tree v-if="showTree" v-loading="loading" :default-expand-all="true" :data="treeData" :props="{ label: 'name' }" @node-click="closeTree" />
      </el-form-item>
      <el-form-item label="转正时间" prop="correctionTime">
        <el-date-picker v-model="formData.correctionTime" style="width:80%" placeholder="请选择转正时间" />
      </el-form-item>
    </el-form>
    <!-- footer插槽 -->
    <template v-slot:footer>
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-button size="small" @click="handleClose">取消</el-button>
          <el-button type="primary" size="small" @click="btnOK">确定</el-button>
        </el-col>
      </el-row>
    </template>
  </el-dialog>
</template>

<script>
// 用户名必填，username，长度为1-4位
// 手机号必填，mobile，需满足 正则表达式 /^1[3-9]\d{9}$/
// 聘用形式必填， formOfEmployment
// 工号必填，workNumber
// 部门必填，departmentName
// 入职时间必填， timeOfEntry
// 转正时间可选，correctionTime
import employees from '@/api/constant/employees'
import { tranListToTreeData } from '@/utils'
import { getDepartments, addEmployee } from '@/api'
export default {
  name: 'AddEmployee',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showTree: false,
      loading: false,
      treeData: [],
      hireType: employees.hireType,
      formData: {
        username: '老六',
        mobile: '18279874561',
        timeOfEntry: '2022/12/22',
        formOfEmployment: '正式',
        workNumber: '13589',
        departmentName: '总裁办',
        correctionTime: '2022/12/22'
      },
      rules: {
        username: [{ required: true, message: '姓名必填', trigger: 'blur' }, {
          min: 1, max: 4, message: '用户姓名为1-4位'
        }],
        mobile: [{ required: true, message: '电话必填', trigger: 'blur' }, {
          pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur'
        }],
        timeOfEntry: [{ required: true, message: '入职时间必填', trigger: 'blur' }],
        formOfEmployment: [{ required: true, message: '聘用形式必填', trigger: 'change' }],
        workNumber: [{ required: true, message: '工号必填', trigger: 'blur' }],
        departmentName: [{ required: true, message: '部门必填', trigger: 'change' }]
      }
    }
  },
  methods: {
    // 点击确定时 校验整个表单
    async btnOK() {
      try {
        await this.$refs.Form.validate()
        // 调用新增接口
        await addEmployee(this.formData) // 新增员工
        this.$message.success('新增成功')
        this.$emit('refresh')
        // 告诉父组件更新数据
        // this.$parent 可以直接调用到父组件的实例 实际上就是父组件this
        // this.$emit
        this.$parent.getEmployeeList()
        this.handleClose()
      } catch (error) {
        console.log(error)
      }
    },
    // 关闭弹窗
    handleClose() {
      this.$emit('update:showDialog', false)
      this.showTree = false
      this.$refs.Form.resetFields()
      this.formData = { username: '',
        mobile: '',
        timeOfEntry: '',
        formOfEmployment: '',
        workNumber: '',
        departmentName: '',
        correctionTime: '' }
    },
    // 请求组织架构
    async getDepartments() {
      this.showTree = true
      this.loading = true
      const { depts } = await getDepartments()
      this.treeData = tranListToTreeData(depts, '')
      this.loading = false
    },
    // 获取部门并关闭部门树
    closeTree(node) {
      this.formData.departmentName = node.name
      this.showTree = false
    }
  }
}
</script>

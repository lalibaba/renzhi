<template>
  <div class="departments-container">
    <!-- 进度条 -->
    <div v-loading="loading" class="departments-container" />

    <el-card class="tree-card">
      <!-- 用了一个行列布局 -->
      <treeTools :tree-node="company" :is-root="false" @addDept="addDept" />

    </el-card>
    <!--放置一个属性   这里的props和我们之前学习的父传子 的props没关系-->
    <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
      <treeTools slot-scope="{data}" :tree-node="data" @addDept="addDept" @editDept="editDept" @refreshDepts="getDepartments" />
    </el-tree>
    <AddDept ref="AddDept" :dialogvisible.sync="showDialog" :tree-node="currentNode" @refreshDepts="getDepartments" />
  </div>
</template>

<script>
import { tranListToTreeData } from '@/utils'
import treeTools from './components/treeTools.vue'
import AddDept from './components/add-dept.vue'
import { getDepartments } from '@/api'
export default {
  name: 'Hrsaas1Index',
  components: {
    treeTools,
    AddDept
  },
  data() {
    return {
      loading: false, // 进度条
      currentNode: {}, // 点击的当前节点
      showDialog: false, // 显示窗体
      defaultProps: {
        label: 'name' // 改成与后端返回数据相同的字段
      },
      company: { name: '江苏传智播客教育科技股份有限公司', manager: '负责人', id: '' },
      departs: [
        {
          name: '总裁办',
          manager: '曹操',
          children: [{ name: '董事会', manager: '曹丕' }]
        },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }
      ]
    }
  },

  mounted() {},
  created() {
    this.getDepartments() // 调用自身的方法
  },
  methods: {
    // 增加子部门
    addDept(node) {
      this.showDialog = true
      this.currentNode = node
    },
    // 编辑子部门
    editDept(node) {
      this.showDialog = true
      this.currentNode = node
      this.$refs.AddDept.formData = { ...node }
    },
    // 获取组织架构数据
    async getDepartments() {
      this.loading = true
      const { depts, companyName, companyManage } = await getDepartments()
      this.departs = tranListToTreeData(depts, '')
      // console.log(this.departs)
      this.company = { name: companyName, manager: companyManage, id: '' }
      this.loading = false
    }

  }
}
</script>

<style lang="scss" >
.departments-container {
  width: 900px;
  margin: 20px auto;
  .el-tree {
    .el-tree-node__content {
      padding-right: 20px;
    }
  }
}
</style>

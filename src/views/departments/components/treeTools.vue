<template>
  <el-row
    type="flex"
    justify="space-between"
    align="middle"
    style="width:100%"
  >
    <el-col>
      <span>{{ treeNode.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row type="flex" justify="end" align="middle">
        <!-- 两个内容 -->
        <el-col>{{ treeNode.manager }}</el-col>
        <el-col>
          <!-- 下拉菜单 element -->
          <el-dropdown @command="handlecommand">
            <span> 操作<i class="el-icon-arrow-down" /> </span>
            <!-- 下拉菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add">添加子部门</el-dropdown-item>
              <!-- 编辑部门和删除部门只会在子节点上显示 -->
              <el-dropdown-item v-if="isRoot" command="edit">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="isRoot" command="del">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { delDepartments } from '@/api'

export default { // 计算属性
  components: {
  }, // 方法
  props: {
    treeNode: {
      type: Object,
      required: true
    },
    isRoot: { // isRoot 来控制 编辑部门 和 删除部门 的 显示 隐藏
      type: Boolean,
      default: true // 默认显示
    }
  },
  data() {
    return {

    }
  }, // props传值

  methods: {
    handlecommand(type) {
      // console.log(type)
      if (type === 'add') {
        this.$emit('addDept', this.treeNode)
      } else if (type === 'edit') {
        this.$emit('editDept', this.treeNode)
      } else {
        this.$confirm('确认部门删除', '提示', { type: 'warning' }).then(
          // async res => {
          //   await delDepartments(this.treeNode.id)
          //   this.$emit('refreshDepts')
          //   this.$message.success('删除成功')
          // }
          res => delDepartments(this.treeNode.id)
        ).then(
          res => {
            this.$emit('refreshDepts')
            this.$message.success('删除成功')
          }
        )
        console.log(type)
      }
    }
  }// 销毁阶段钩子
}
</script>

<style  scoped>

</style>

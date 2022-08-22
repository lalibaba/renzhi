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
          <el-dropdown>
            <span> 操作<i class="el-icon-arrow-down" /> </span>
            <!-- 下拉菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>添加子部门</el-dropdown-item>
              <!-- 编辑部门和删除部门只会在子节点上显示 -->
              <el-dropdown-item v-if="isRoot">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="isRoot">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
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
  computed: {
  }, // 组件
  watch: {
  }, // 监视属性
  created() {
  }, // 创建阶段钩子
  mounted() {
  }, // 挂载阶段钩子
  updated() {
  }, // 更新阶段钩子
  destroyed() {
  },
  methods: {

  }// 销毁阶段钩子
}
</script>

<style  scoped>

</style>

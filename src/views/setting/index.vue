<template>
  <div class="app-container">
    <el-card>
      <el-tabs>
        <!-- 放置页签 -->
        <el-tab-pane label="角色管理" name="second">
          <!-- 新增角色按钮 -->
          <el-row style="height:60px">
            <el-button
              icon="el-icon-plus"
              size="small"
              type="primary"
              @click="handleAdd"
            >新增角色</el-button>
          </el-row>
          <!-- 表格 -->
          <el-table v-loading="loading" border :data="list" style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="120" />
            <el-table-column align="center" prop="name" label="名称" width="240" />
            <el-table-column align="center" prop="description" label="描述" />
            <el-table-column align="center" label="操作">
              <el-button size="small" type="success">分配权限</el-button>
              <el-button size="small" type="primary">编辑</el-button>
              <el-button size="small" type="danger">删除</el-button>
            </el-table-column>
          </el-table>
          <!-- 分页组件 -->
          <!-- 放置分页组件 -->
          <el-row type="flex" justify="end" align="middle" style="height:60px">
            <el-pagination
              background
              layout="prev, pager, next, sizes, total"
              :total="total"
              :current-page="page.page"
              :page-size.sync="page.pagesize"
              :page-sizes="[5, 10, 20, 30]"
              @current-change="changePage"
              @size-change="changeSize"
            />
            <!-- // background   添加背景
            // current-page 当前的页面
            // page-size    每一页展示的条数
            // page-sizes   每页显示个数选择器的选项设置
            // total        总共多少条数据
            // layout       布局
            // current-change 改变当前页码的触发（current-page 值改变的时候触发）
            // size-change 改变页面的数据条数的时候 触发（page-size 值改变的时候触发） -->

          </el-row>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="first">公司信息
        </el-tab-pane>
      </el-tabs>
      <roleDialog :dialog-visible.sync="dialogVisible" />
    </el-card>
  </div>
</template>

<script>
import { getRoleList } from '@/api'
import roleDialog from './components/roleDialog.vue'
export default {
  name: 'Hrsaas1Index',
  components: {
    roleDialog
  },
  data() {
    return {
      dialogVisible: false,
      activeName: 'second',
      list: [], // 承接数组
      page: {
        // 放置页码及相关数据
        page: 1,
        pagesize: 10
      },
      loading: false,
      total: 0 // 记录总数
    }
  },
  created() {
    this.getRoleList() // 获取角色列表
  },
  methods: {
    // 显示新增弹窗
    handleAdd() {
      this.dialogVisible = true
    },
    // 改变当前页码
    changePage(val) {
      // this.page.page = val
      this.getRoleList()
    },
    // 改变页面条数数量
    changeSize() {
      // this.page.pagesize = val
      this.getRoleList()
    },

    async getRoleList() {
      try {
        this.loading = true
        const { total, rows } = await getRoleList(this.page)
        // console.log(await getRoleList(this.page))
        this.page.total = total
        this.list = rows
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName">
        <!-- 放置页签 -->
        <el-tab-pane label="角色管理" active-name name="second">
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
              <template slot-scope="scope">
                <el-button size="small" type="success">分配权限</el-button>
                <el-button size="small" type="primary" @click="edit(scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="del(scope.row.id)">删除</el-button>
              </template>
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
        <el-tab-pane label="公司信息" active-name name="first">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          />
          <el-form label-width="120px" style="margin-top:50px">
            <el-form-item label="公司名称">
              <el-input v-model="formData.name" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="formData.companyAddress" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="formData.mailbox" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="formData.remarks" type="textarea" :rows="3" disabled style="width:400px" />
            </el-form-item>
          </el-form>

        </el-tab-pane>
      </el-tabs>
    </el-card>
    <roleDialog ref="roleDialog" :dialog-visible.sync="dialogVisible" />
  </div>
</template>

<script>
import { getRoleList, deleteRole, getCompanyInfo } from '@/api'
import { mapGetters } from 'vuex'
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
      total: 0, // 记录总数
      formData: {}
    }
  },
  computed: {
    ...mapGetters(['companyId'])
  },
  created() {
    this.getRoleList() // 获取角色列表
    this.getCompanyInfo()// 获取公司信息
  },
  methods: {
    // 显示新增弹窗
    handleAdd() {
      this.dialogVisible = true
    },
    // 改变当前页码
    changePage(val) {
      this.page.page = val
      this.getRoleList()
    },
    // 改变页面条数数量
    changeSize() {
      // this.page.pagesize = val
      this.getRoleList()
    },
    // 获取成员信息
    async getRoleList() {
      try {
        this.loading = true
        const { rows, total } = await getRoleList(this.page)
        // console.log(res) // rows total
        this.list = rows
        this.total = total
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    // 获取的公司的信息
    async getCompanyInfo() {
      this.formData = await getCompanyInfo(this.companyId)
    },
    // 编辑角色
    edit(row) {
      this.dialogVisible = true
      this.$refs.roleDialog.roleForm = { ...row }
    },
    // 删除角色
    async del(id) {
      try {
        await this.$confirm('是否确认删除该角色？', '提示', { type: 'warning' })
        await deleteRole(id)
        this.$message.success('角色删除成功')
        this.page.page = 1
        this.getRoleList()
      } catch (e) { console.dir(e) }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

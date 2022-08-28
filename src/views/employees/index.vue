<template>
  <div class="app-container">
    <PageTools type="info">
      <template v-slot:before>
        <span>共{{ total }}条记录</span>
      </template>
      <template v-slot:after>
        <el-button size="small" type="warning" @click="$router.push('/import?type=user')">导入 </el-button>
        <el-button size="small" type="danger" @click="exportData">导出</el-button>
        <el-button size="small" type="primary" @click="add">新增员工</el-button>
      </template>
    </PageTools>
    <!-- 放置表格和分页 -->
    <el-card>
      <el-table v-loading="loading" border :data="list">
        <el-table-column label="序号" sortable="" width="80" type="index" />
        <el-table-column label="姓名" sortable="" prop="username" />
        <el-table-column label="工号" sortable="" prop="workNumber" />
        <el-table-column
          label="聘用形式"
          sortable=""
          prop="formOfEmployment"
          :formatter="formatterFn"
        />
        <el-table-column label="部门" sortable="" prop="departmentName" />
        <el-table-column label="入职时间" sortable="" prop="timeOfEntry ">
          <template slot-scope="scope">
            {{ scope.row.timeOfEntry | formatDate }}
          </template>
        </el-table-column>
        <el-table-column label="账户状态" sortable="" prop="enableState">
          <template slot-scope="{ row }">
            <el-switch :value="row.enableState === 1" />
          </template>
        </el-table-column>
        <el-table-column label="操作" sortable="" fixed="right" width="280">
          <template slot-scope="{row}">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">转正</el-button>
            <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button>
            <el-button type="text" size="small">角色</el-button>
            <el-button type="text" size="small" @click="delEmployee(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <el-row type="flex" justify="end" align="middle" style="height: 60px">
        <el-pagination
          v-if="total>0"
          :current-page.sync="page.page"
          :page-size.sync="page.size"
          :page-sizes="[10,20,30,40,50]"
          :background="true"
          :total="total"
          layout="total,prev, pager, next,sizes"
          @size-change="getEmployeeList"
          @current-change="getEmployeeList"
        />
      </el-row>
    </el-card>
    <!-- 弹窗 -->
    <addEmployee :show-dialog.sync="showDialog" @refresh="getEmployeeList" />
    <!-- :show-dialog.sync="showDialog"相当于 :show-dialog="showDialog" 加 @update:showDialog="showDialog=$event"  -->
  </div>
</template>

<script>
import { getEmployeeList, delEmployee } from '@/api'
import EmployeeEunm from '@/api/constant/employees'
import addEmployee from './components/add-employee.vue'
export default {
  name: 'Hrsaas1Index',
  components: {
    addEmployee
  },
  data() {
    return {
      loading: false,
      page: { page: 1, size: 10 },
      list: [],
      total: 0,
      showDialog: false
    }
  },

  mounted() {
    this.getEmployeeList()
  },

  methods: {
    fn() {

    },
    // 获取员工数据
    async getEmployeeList() {
      try {
        this.loading = true
        const { rows, total } = await getEmployeeList(this.page)
        this.list = rows
        this.total = total
        if (this.total !== 0 && rows.length === 0) {
          this.page.page = this.page.page - 1
          this.getEmployeeList()
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    // 导出excel数据
    async exportData() {
      const { rows } = await getEmployeeList({ page: 1, size: 10 })
      const headers = {
        '手机号': 'mobile',
        '姓名': 'username',
        '入职日期': 'timeOfEntry',
        '聘用形式': 'formOfEmployment',
        '转正日期': 'correctionTime',
        '工号': 'workNumber',
        '部门': 'departmentName'
      }
      rows.forEach(ele => {
        const arr = []
        Object.keys(headers).forEach(key => { // key=[ '手机号','姓名']
          arr.push(ele[headers[key]]) // headers['手机号']=mobile ,ele[mobile]=182701644
        })
        console.log(arr)
      })
    },
    // 格式化
    formatterFn(row, column, cellValue, index) {
      const obj = EmployeeEunm.hireType.find((ele) => ele.id === cellValue * 1)
      return obj ? obj.value : '非正式'
    },
    // 新增员工
    add() {
      this.showDialog = true
    },
    // 删除员工
    async delEmployee(id) {
      try {
        await this.$confirm('是否删除员工', '提示', { type: 'warning' })
        await delEmployee(id)
        this.$message.success('删除成功')
        await this.getEmployeeList()
      } catch (e) { console.dir(e) }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

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
        <el-table-column label="头像">
          <template slot-scope="{row}">
            <img v-imgerror="require('@/assets/common/bigUserHeader.png')" style="border-radius: 20%; width: 100px; height: 100px; margin: 10px;" :src="row.staffPhoto" alt="头像" @click="showQrCode(row.staffPhoto)">
            <!-- 头像弹窗 -->
          </template>
        </el-table-column>
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
            <el-button type="text" size="small" @click="$router.push(`/employees/detail/${row.id}`)">查看</el-button>
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

    <!-- 二维码 -->
    <el-dialog width="30%" title="二维码" :visible.sync="showCodeDialog">
      <el-row type="flex" justify="space-between">
        <el-col>
          <canvas ref="myCanvas" />
        </el-col>
        <el-col>
          <img v-imgerror="require('@/assets/common/bigUserHeader.png')" style="width:180px" :src="imgUrl" alt="">
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { getEmployeeList, delEmployee } from '@/api'
import EmployeeEunm from '@/api/constant/employees'
import addEmployee from './components/add-employee.vue'
import { formatDate } from '@/filters'
import QrCode from 'qrcode'
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
      showDialog: false,
      showCodeDialog: false,
      previewShow: false,
      imgUrl: ''
    }
  },

  mounted() {
    this.getEmployeeList()
  },

  methods: {

    // 展示二维码弹窗
    showQrCode(url) {
      // url存在的情况下 才弹出层
      this.imgUrl = url
      if (url) {
        this.showCodeDialog = true // 数据更新了 但是我的弹层会立刻出现吗 ？页面的渲染是异步的！！！！
        // 有一个方法可以在上一次数据更新完毕，页面渲染完毕之后
        this.$nextTick(() => {
          // 此时可以确认已经有ref对象了
          QrCode.toCanvas(this.$refs.myCanvas, url) // 将地址转化成二维码
          // 如果转化的二维码后面信息 是一个地址的话 就会跳转到该地址 如果不是地址就会显示内容
        })
      } else {
        this.$message.warning('该用户还未上传头像')
      }
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
        '姓名': 'username',
        '手机号': 'mobile',
        '入职日期': 'timeOfEntry',
        '聘用形式': 'formOfEmployment',
        '转正日期': 'correctionTime',
        '工号': 'workNumber',
        '部门': 'departmentName'
      }
      const newRows = this.fromJson(headers, rows)
      // 引入下载excel文件插件
      console.log(newRows)
      import('@/vendor/Export2Excel').then(excel => {
        excel.export_json_to_excel({
          header: Object.keys(headers), // 表头 必填  ['姓名', '手机号', '入职日期', '聘用形式']
          data: newRows, // 具体数据 必填 [['张三', '13399999', '2020-2020-2020', '正式']]
          filename: '导出的员工名单', // 非必填
          autoWidth: true, // 非必填
          bookType: 'xlsx', // 非必填
          multiHeader: [['姓名', '主要信息', '', '', '', '', '']],
          merges: ['A1:A2', 'B1:G1']
        })
      })
      // Es6新增对象方法 得key值数组：Object.keys(),得value值数组Object.values(),得各键值对数组Object.entries()
    },

    // 封装获取表单每行数据函数
    fromJson(headers, rows) {
      return rows.map(ele => {
        // Object.values(headers) 可直接得到值的数组
        return Object.keys(headers).map(key => { // key=[ '手机号','姓名']
          if (headers[key] === 'formOfEmployment') {
            // 格式化聘用形式
            console.log(this.formatterFn(null, null, ele[headers[key]]))
            return this.formatterFn(null, null, ele[headers[key]])
          } else if (headers[key] === 'timeOfEntry' || headers[key] === 'correctionTime') {
            return formatDate(ele[headers[key]])
          } else {
            return ele[headers[key]] // headers['手机号']=mobile ,ele[mobile]=182701644
          }
        })
      })
    },
    // 格式化聘用形式
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

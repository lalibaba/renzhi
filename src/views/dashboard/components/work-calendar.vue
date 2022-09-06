<template>
  <div>
    <el-row type="flex" justify="end" align="middle">
      <el-select v-model="currentYear" size="small" style="width:120px" @change="dateChange">
        <el-option v-for="item in yearList" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="currentMonth" size="small" style="width:120px" @change="dateChange">
        <el-option v-for="item in 12" :key="item" :label="item" :value="item" />
      </el-select>
    </el-row>
    <el-calendar v-model="currentDate">
      <template slot="dateCell" slot-scope="{date}">

        <div class="date-content">
          <span class="text"> {{ date|getDay }}</span>
          <span v-if="isWeek(date)" class="rest">休</span>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  filters: {
    getDay(value) {
      return value.getDate()
    }
  },
  props: {
    startDate: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    return {
      currentMonth: 1, // 当前月份
      currentYear: null, // 当前年份
      currentDate: null,
      yearList: []
    }
  },
  mounted() {
    this.currentYear = this.startDate.getFullYear()
    // Array(11)创建一个长度为11的空索引空值的数组
    // Array.from和arr.map方法类似，即生成和xxx数组有映射关系的新数组， xxx=Array.from(arr,(数组元素，索引号)=>return 新元素)
    this.yearList = Array.from(Array(11), (Value, index) => {
      return this.currentYear - 5 + index
    })
    this.dateChange()
  },
  methods: {
    dateChange() {
      this.currentDate = new Date(`${this.currentYear}-${this.currentMonth}-${this.startDate.getDate()}`)
    },
    isWeek(date) {
      return date.getDay() === 0 || date.getDay() === 6
    }
  }
}
</script>

<style lang="scss"  scoped>
 ::v-deep .el-calendar-day {
  height:  auto;
 }
 ::v-deep .el-calendar-table__row td,::v-deep .el-calendar-table tr td:first-child,  ::v-deep .el-calendar-table__row td.prev{
  border:none;
 }
.date-content {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text{
  width: 20px;
  height: 20px;
  line-height: 20px;
 display: inline-block;

}
 ::v-deep .el-calendar-table td.is-selected .text{
   background: #409eff;
   color: #fff;
   border-radius: 50%;
 }
 ::v-deep .el-calendar__header {
   display: none
 }
</style>

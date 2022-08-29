<template>
  <div class="app-container">
    <el-card>

      <!-- 信息 -->
      <el-tabs>
        <el-tab-pane label="登录账户设置">
          <!-- 放置表单 -->
          <el-form ref="Form" :model="userInfo" :rules="rules" label-width="120px" style="margin-left: 120px; margin-top:30px">
            <el-form-item prop="username" label="姓名:">
              <el-input v-model="userInfo.username" style="width:300px" />
            </el-form-item>
            <el-form-item prop="password2" label="密码:">
              <el-input v-model="userInfo.password2" style="width:300px" type="password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveUserDetailById">更新</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="个人详情">
          <!-- 打印机 -->
          <el-row type="flex" justify="end">
            <el-tooltip content="打印个人基本信息">
              <router-link :to="`/employees/print/${userId}?type=personal`">
                <i class="el-icon-printer" />
              </router-link>
            </el-tooltip>
          </el-row>
          <!-- 放置个人详情 -->
          <!-- <component :is="userComponent" /> -->
          <userComponent ref="userInfoRef" />
        </el-tab-pane>
        <el-tab-pane label="岗位详情">
          <!-- 打印机 -->
          <el-row type="flex" justify="end">
            <el-tooltip content="打印岗位信息">
              <router-link :to="`/employees/print/${userId}?type=job`">
                <i class="el-icon-printer" />
              </router-link>
            </el-tooltip>
          </el-row>
          <!-- 放置岗位详情 -->
          <!-- <component :is="JobInfo" /> -->
          <JobInfo />
        </el-tab-pane>

      </el-tabs>

    </el-card>
  </div>
</template>

<script>
import { getUserDetailById, saveUserDetailById } from '@/api'
import userComponent from './components/user-info.vue'
import JobInfo from './components/job-info.vue'
export default {
  components: {
    userComponent,
    JobInfo
  },
  props: {
  },
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
        password2: ''
      },
      rules: {
        username: [{ required: true, message: '姓名必填', trigger: 'blur' }],
        password2: [{ required: true, message: '密码必填', trigger: 'blur' }, { min: 6, max: 9, message: '密码6-9位', trigger: 'blur' }]
      }
    }
  },
  computed: {
    userId() {
      return this.$route.params.id
    }
  },

  mounted() {
    this.getUserDetailById()
  }, // 挂载阶段钩子

  methods: {
    // 获得用户信息
    async getUserDetailById() {
      this.userInfo = await getUserDetailById(this.userId)
      this.$refs.userInfoRef.userInfo = { ...this.userInfo }
      this.$refs.userInfoRef.setImage(this.userInfo.staffPhoto)
    },
    // 更新密码
    async saveUserDetailById() {
      try {
        await this.$refs.Form.validate()
        await saveUserDetailById({ ...this.userInfo, password: this.userInfo.password2 })
        this.$message.success('更新成功')
      } catch (e) { console.dir(e) }
    }
  }// 销毁阶段钩子
}
</script>

<style  scoped>

</style>

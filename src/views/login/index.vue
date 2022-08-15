<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          <img src="@/assets/common/login-logo.png" alt="">
        </h3>
      </div>

      <el-form-item prop="mobile">
        <span class="svg-container el-icon-user-solid" />
        <el-input v-model="loginForm.mobile" placeholder="请输入账号" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input ref="pwdinput" v-model="loginForm.password" :type="pwdType" placeholder="请输入密码" />
        <span class="svg-container">
          <svg-icon :icon-class=" pwdType==='password' ? 'eye' :'eye-open'" @click="pwdChange" />
        </span>
      </el-form-item>

      <el-button class="loginBtn " :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>

      <div class="tips">
        <span style="margin-right:20.0025px;">账号: 13800000002</span>
        <span> 密码: 123456</span>
      </div>

    </el-form>
  </div>
</template>

<script>
import { validMobile } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validatorMobile = (rule, value, callback) => {
      if (validMobile(value)) {
        return callback()
      } else {
        return callback(new Error('手机号格式错误'))
      }
    }
    return {
      loginForm: {},
      pwdType: 'password',
      loginRules: {
        mobile: [
          { required: true, message: '手机号必填', trigger: 'blur' },
          { validator: validatorMobile, trigger: 'blur' }
          // { pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/, message: '手机格式错误', trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码必填' }, { min: 6, max: 16, message: '密码6-16位', trigger: 'blur' }]
      }

    }
  },
  watch: {
  },
  methods: {
    pwdChange() {
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
      this.$nextTick(() => {
        this.$refs.pwdinput.focus()
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#68b0fe;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47.0025px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5.0025px 12px 15px;
      color: $light_gray;
      height: 47.0025px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 999.9975px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: .9975px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5.0025px;
    color: #454545;
  }
  .el-form-item__error {
    color: #fff
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#68b0fe;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  background-image: url('~@/assets/common/login.jpg'); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕

  .login-form {
    position: relative;
    width: 519.9975px;
    max-width: 100%;
    padding: 159.9975px 35.0025px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14.0025px;
    color: #fff;
    margin-bottom: 9.9975px;

    span {
      &:first-of-type {
        margin-right: 15.9975px;
      }
    }
  }

  .svg-container {
    padding: 6px 5.0025px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26.0025px;
      color: $light_gray;
      margin: 0px auto 39.9975px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 9.9975px;
    top: 6.9975px;
    font-size: 15.9975px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.loginBtn {
  background: #407ffe;
  height: 63.9975px;
  line-height: 32.0025px;
  font-size: 24px;
}
</style>

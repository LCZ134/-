<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像-->
      <div class="acater_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!--表单-->
      <el-form
        class="login_from"
        :rules="rules"
        :model="ruleForm"
        ref="ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="iconfont icon-pingtaiguanliyonghuguanli"
            v-model="ruleForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            show-password
            placeholder="请输入密码"
            prefix-icon="iconfont icon-mima"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button @click="login" type="primary">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions('admin/user', ['userLogin']),
    changth(val) {
      this.$emit('aaa', val)
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
    },
    login() {
      var that = this
      this.$refs.ruleForm.validate(async valid => {
        if (!valid) {
          this.$message({
            showClose: true,
            message: '登录失败，用户名或密格式错误',
            type: 'error'
          })
          return false
        }
        this.userLogin(this.ruleForm).then(() => {
          that.$router.push('/')
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: rgb(87, 200, 228);
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .acater_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px #ddd;
    padding: 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}
.login_from {
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  padding: 0 40px;
}
</style>

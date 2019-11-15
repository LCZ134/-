<template>
  <div class="Home">
    <h1>首页</h1>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '123'
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

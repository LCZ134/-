<template>
  <el-container class="home_section">
    <el-header>
      <div>
        <img src="../assets/1.jpg" />
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="iscollapse ? '64px' : '200px'">
        <div class="togger-button" @click="toggerCollapse">|||</div>
        <el-menu
          router
          default-active="/"
          background-color="#333744"
          text-color="#fff"
          unique-opened
          :collapse="iscollapse"
        >
          <asideBarItem
            v-for="router in routers"
            v-show="router.IsHidden"
            :router="router"
            :key="router.path"
          ></asideBarItem>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import asideBarItem from './asideBarItem'

export default {
  data() {
    return {
      iscollapse: true
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem('user')
      this.$router.push('/login')
    },
    toggerCollapse() {
      this.iscollapse = !this.iscollapse
    }
  },
  computed: {
    routers() {
      return this.$router.options.routes
    }
  },
  components: {
    asideBarItem
  },
  created() {
    //console.log(this.$router.options.routes)
  }
}
</script>

<style lang="less" scoped>
.home_section {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: 0;
  }
}
.el-main {
  background-color: #e9eef3;
}

.togger-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>

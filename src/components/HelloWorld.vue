<template>
  <div class="hello">
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
    <br>
    
    {{count}}
    {{counts}}

    <el-button @click="Add">添加</el-button>

    <!-- <Dpuzz img='../assets/4.jpg'></Dpuzz> -->
    <!-- <Arr>
    <p slot="my-header">我是头部</p>
    <template slot-scope="slot" >
        <p v-for="item in slot.data" :key="item">{{item}}</p>
    </template> 
    <p slot="my-footer">我是尾部</p>
  </Arr>
    <Headers @aaa="getData"></Headers>-->
  </div>
</template>


<script>
import Dpuzz from "./puzzle.vue";
import Arr from "./arrList";
import Headers from "./header";
import uitls from "../uitls/index";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: { Dpuzz, Arr, Headers },
  methods: {
    ...mapActions("admin/user",["AddCount"]),
    getData(val) {
      console.log(val);
    },
    open1() {
      this.$message({
        showClose: true,
        message: "这是一条消息提示"
      });
    },
    open2() {
      this.$message({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },
    open3() {
      this.$message({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },
    open4() {
      this.$message({
        showClose: true,
        message: "错了哦，这是一条错误消息",
        type: "error"
      });
    },
    Add(){
      this.AddCount(1);
    }
  },
  data() {
    return {
      list: [{ name: 1 }]
    };
  },
  computed:{
    ...mapState("admin/user",["count"]),
    ...mapState("model/modelList",["counts"])
  },
  watch: {
    list: {
      deep: true,
      headler: function(newv, oldv) {
        console.list(newv);
      }
    }
  }
};
</script>



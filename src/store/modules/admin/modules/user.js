import api from '@/api/index'
import { formatUrlParams } from '@/uitls'
import { Message, MessageBox } from 'element-ui';


export default {
  namespaced: true,
  state: {
    userinfo: JSON.parse(sessionStorage.getItem("user")),
  },
  mutations: {
    setlogin(state, userinfo) {
      //console.log(userinfo, JSON.stringify(userinfo));
      sessionStorage.setItem("user", JSON.stringify(userinfo));
      state.userinfo = userinfo;
    },
    loginout(state) {
      sessionStorage.removeItem("user");
    },
  },
  actions: {
    userLogin({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        // api.post('',null,res=>{// })
        var istate = true;

        if (!istate) {
          Message({ message: '错了哦，用户名或密码输入错误', type: 'error' });
        } else {
          Message({ message: "登录成功", type: "success" });
          commit('setlogin', userinfo);
        }

        resolve();
      })
    }

  }
}
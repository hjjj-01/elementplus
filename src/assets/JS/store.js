import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            vlogin_name:localStorage.getItem('local_name') || '未登录',
            vlogin_power:localStorage.getItem('local_power')||'未登录',
        }
    },
    mutations:{
       setlogin(state,newstate){
           state.vlogin_name = newstate;
       },
       setpower(state,newstate){
           state.vlogin_power = newstate;
       }
    }
})
export default store;
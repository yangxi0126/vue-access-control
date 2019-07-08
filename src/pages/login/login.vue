<template>
  <div>
    <input type="text" placeholder="账号" v-model="username"/>
    <input type="password" placeholder="密码" v-model="password"/>
    <input type="button" value="登录" @click="loginEvt"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from 'vuex';

  export default {
    data() {
      return {
        username: '',
        password: '',
        userInfo: null
      }
    },
    methods: {
      ...mapGetters({
        userInfoEvt: 'loginStore/getUserInfo'
      }),
      ...mapActions({
        login: 'loginStore/Login'
      }),
      /*登录*/
      loginEvt() {
        let that = this;
        that.login({
          username: that.username,
          password: that.password
        }).then((response) => {  //登录成功，获取用户信息
          that.getUserInfo();
          that.$router.push({name: 'Page1'});
        }).catch((error) => {
          console.log('失败');
        });
      },
      /*获取用户信息*/
      getUserInfo() {
        let that = this;
        that.userInfo = that.userInfoEvt();
        sessionStorage.setItem('user', JSON.stringify(that.userInfo));
      }
    }
  }
</script>


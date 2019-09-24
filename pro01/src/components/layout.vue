<template>
  <div class="layout">
	<app-header @openDialog="openMyDialog"></app-header>
	<slot></slot>
	<app-dialog :is-show="logDialog" @on-close="closeMyDialog('logDialog')" class="logDialog">
		<h3 class="diaTitle">登录</h3>
    <form class="login">
      <label><span class="three">用户名</span><input type="text" name=""></label>
      <label><span class="two">密码</span><input type="password" name=""></label>
      <label>
        <input type="button" name=""  value="登录">
        <input type="button" name="" value="取消" @click="closeMyDialog('logDialog')"></label>
      <label class="forget">忘记密码</label>
    </form>
	</app-dialog>
	<app-dialog :is-show="regDialog" @on-close="closeMyDialog('regDialog')" class="regDialog">
		<h3 class="diaTitle">注册</h3>
    <form class="register">
      <label><span class="three">用户名</span><input type="text" name=""></label>
      <label><span class="two">密码</span><input type="password" name=""></label>
      <label><span class="four">重复密码</span><input type="password" name=""></label>
      <label><span class="four">手机号码</span><input type="password" name=""></label>
      <label><span class="five">短信验证码</span><input type="password" name=""></label>
      <label><span class="four">用户邮箱</span><input type="password" name=""></label>
      <label>
        <input type="button" name=""  value="注册">
        <input type="button" name="" value="取消" @click="closeMyDialog('regDialog')">
      </label>
    </form>
	</app-dialog>
  <app-top></app-top>
	<app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'
import AppDialog from '@/components/dialog'
import AppTop from '@/components/base/top'
export default {
  name: 'Layout',
  components:{
  	AppHeader,
  	AppFooter,
  	AppDialog,
    AppTop
  },
  data () {
	return {
		logDialog:false,
		regDialog:false
	}
  },
  methods:{
  	openMyDialog(attr){
  		this[attr]=true;
  	},
  	closeMyDialog(attr){
  		this[attr]=false;
  	}
  }
}
</script>
<style scoped>

.layout h1, .layout h2,.layout h3 {
  font-weight: normal;
  margin-top:0 !important;
}
.layout ul {
  list-style-type: none;
  padding:8px 0;

}
.layout li {
  display: inline-block;
  margin: 0 10px;
}

.layout{
	position:relative;
	overflow:hidden;
  background:#eee;
}

form>label{
  width:90%;
  height:30px;
  display:block;
  margin:10px 0px 0px 10px;
  text-align:left;
  position:relative;
  overflow:hidden;
}
form>label>input{
  position:absolute;
  left:120px;
  outline:none;
}
form>label>input[type="button"]{
  position:relative;
  margin-right:10px;
  width:80px;
}
form>label>.two{
    letter-spacing:4em;
}
form>label>.three{
    letter-spacing:1.5em;
}
form>label>.four{
    letter-spacing:0.6666em;
}
form>label>.five{
    letter-spacing:0.25em;
}
.forget{
  color:#ccc;
  cursor:pointer;
  position:absolute;
  width:100px;
  top:140px;
}
.forget:hover{
  color:#4a4;
}
.diaTitle{
  margin:0px 0px 10px 0px;
  padding:0;
  height:50px;
  line-height:50px;
  background:#fefefe;
  border-bottom:1px solid #eee;
}
form.login{
  width:90%;
  height:150px;
  margin:20px auto;
}
form.register{
  width:90%;
  height:280px;
  margin:20px auto;
}


</style>

<template>
    <div class="container-fluid">
        <div class="login_bg"></div>
        <!-- 登录界面-->
        <div class="login_content d-flex flex-column justify-content-start">
            <!-- 注册logo-->
            <h1 class="login_logo text-center">
                <img src="http://127.0.0.1:3000/img/login/login_logo.png" alt=""/>
            </h1>
            <!-- 注册信息-->
            <div class="login_input">
                <form action="javascript:;">
                    <ul class="login_input_ul list-unstyled d-flex flex-column justify-content-between text-center">
                    <li v-show="isAlert" class="alertkuang">{{alertMsg}}</li>
                    <li><input class="w-100 h-100 user_email" type="text" v-model="users" autofocus placeholder="电子邮箱"/></li>
                    <li><input class="w-100 h-100 user_pwd" type="password" v-model="upwd" placeholder="密码"/></li>
                    <li><input type="submit" class="selectButton w-100 h-100" value="登录" @click="judgeLogin"></li>
                    <li><span class="login_line">———————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或使用以下账号登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;————————</span></li>
                    <li><a class="selectButton redButton w-100" href="##">使用网易通行证登录</a></li>
                    <li class="login_input_bottom">
                        <a class="blue_href needResign" href="##">免费创建暴雪游戏通行证</a>
                    </li>
                    <li class="login_input_bottom"><a class="blue_href" href="##">无法登录？</a></li>
                    <li class="login_input_bottom"><a class="blue_href" href="##">安全令重新同步</a></li>
                    </ul>
                </form>
            </div>

            <!-- 注册底部-->
            <div class="login_footer">
                <ul class="list-unstyled d-flex flex-column justify-content-between text-center">
                    <li>
                    <a class="grayTitle" href="">BATTLE.NET EULA&nbsp; </a>|
                    <a class="grayTitle" href="##"> &nbsp;隐私&nbsp; </a>|
                    <a class="grayTitle" href="##"> &nbsp;法律条款&nbsp; </a>|
                    <a class="grayTitle" href="##"> &nbsp;著作权侵权&nbsp;</a>
                    </li>
                    <li>
                    <a class="grayTitle" href="">沪网文〔2017〕9633-727号&nbsp; </a>|
                    <a class="grayTitle" href="##">&nbsp; 增值电信业务经营许可证编号：沪B2－20080012&nbsp; </a>
                    </li>
                    <li>
                    <a class="grayTitle" href="">&nbsp; 互联网违法和不良信息举报电话：0571-28090163&nbsp; </a>|
                    <a class="grayTitle" href="##">&nbsp; 沪公网安备：31011502002167&nbsp; </a>
                    </li>
                    <li class="login_line">&copy;2018暴雪娱乐有限公司版权所有。</li>
                    <li>
                    <img src="http://127.0.0.1:3000/img/login/login_footer1.gif" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="http://127.0.0.1:3000/img/login/login_footer2.gif" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="http://127.0.0.1:3000/img/login/login_footer3.gif" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="http://127.0.0.1:3000/img/login/login_footer4.gif" alt=""/>
                    </li>
                </ul>
            </div>

            <!-- width为800时的footer-->
            <div class="login_smallfooter">
                <ul class="list-unstyled d-flex flex-column justify-content-between text-center">
                    <li>
                    <a class="grayTitle" href="">BATTLE.NET EULA&nbsp; </a>|
                    <a class="grayTitle" href="##"> &nbsp;隐私&nbsp; </a>|
                    <a class="grayTitle" href="##"> &nbsp;法律条款&nbsp; </a>|
                    <a class="grayTitle" href="##"> &nbsp;著作权侵权&nbsp;</a>
                    </li>
                    <li>
                    <a class="grayTitle" href="">沪网文〔2017〕9633-727号&nbsp; </a>
                    </li>
                    <li>
                    <a class="grayTitle" href="##">&nbsp; 增值电信业务经营许可证编号：沪B2－20080012&nbsp; </a>
                    </li>
                    <li>
                    <a class="grayTitle" href="">&nbsp; 互联网违法和不良信息举报电话：0571-28090163&nbsp; </a>
                    </li>
                    <li>
                    <a class="grayTitle" href="##">&nbsp; 沪公网安备：31011502002167&nbsp; </a>
                    </li>
                    <li class="login_line">&copy;2018暴雪娱乐有限公司版权所有。</li>
                    <li>
                    <img src="http://127.0.0.1:3000/img/login/login_footer1.gif" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="http://127.0.0.1:3000/img/login/login_footer2.gif" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="http://127.0.0.1:3000/img/login/login_footer3.gif" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="http://127.0.0.1:3000/img/login/login_footer4.gif" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    // import {Toast} from "mint-ui"
    export default {
        created(){
            this.$emit("changeShow",false);
            this.$emit("changeFooter",false)
        },
        destroyed(){
            this.$emit("changeShow",true);
            this.$emit("changeFooter",true)
        },
        data(){
            return{
                users:"",
                upwd:"",
                isAlert:false,
                alertMsg:""
            }
        },
        methods:{
            judgeLogin(){
                var reg=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
                if(this.users==""){
                    this.isAlert=true;
                    this.alertMsg="请输入账号。"
                }else if(!reg.test(this.users)){
                    this.isAlert=true;
                    this.alertMsg="暴雪游戏通行证名称为电子邮箱地址。"
                }else if(this.upwd==""){
                    this.isAlert=true;
                    this.alertMsg="请输入密码。"
                }else{
                    // this.isAlert=false;
                    this.alertMsg="验证账户中...";
                    var u=this.users;
                    var p=this.upwd;
                    var url="http://127.0.0.1:3000/login?uid="+u+"&upwd="+p;
                    this.axios.get(url).then(result=>{
                        // console.log(result);
                        if(result.data.code==1){
                            this.$store.commit("setUid",{
                                uid:result.data.uid,
                                uname:result.data.uname
                            });
                            // this.$store.commit("setUname",result.data.uname);
                            window.location.reload();
                            this.$router.push("/home"); 
                        }else{
                            this.isAlert=true;
                            this.alertMsg="用户名或密码错误";
                        }
                    })
                }
            }
        }
    }
</script>
<style scoped>
    @import '../../../static/css/login.css'
</style>

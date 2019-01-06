<template>
    <div class="container-fluid">
        <div class="resign_bg"></div>
        <div class="resign_content d-flex flex-column justify-content-start">
            <!-- 注册logo-->
            <h1 class="resign_logo text-center">
                <img src="http://127.0.0.1:3000/img/login/login_logo.png" alt=""/>
            </h1>
            <!-- 注册信息-->
            <div class="resign_input">
                <div class="resign_txt d-flex flex-column justify-content-between text-center">
                    <h1>创建账号</h1>
                    <a class="selectButton redButton w-100" href="##">网易</a>
                    <div class="resign_line">————————————————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—————————————————
                    </div>
                    <p class="text-left">创建暴雪游戏通行证，开启您的冒险旅程。</p>
                </div>
                <ul class="resign_input_ul list-unstyled d-flex flex-column justify-content-between text-center">
                    <li v-show="isAlert" class="alertkuang">{{alertMsg}}</li>
                    <li><input @click="showIdTips" @input="showIdTips" @blur="hideIdTips" v-model="idcard" class="w-100 h-100" type="text" placeholder="身份证号码"/></li>
                    <div v-show="idcardfocus" class="tips">
                        <div class="arrow"></div>
                        <div class="tips-content">请仔细核对并填写您真实有效的个人身证号码。</div>
                    </div>
                    <li><input v-model="uname" class="w-100 h-100" type="text" placeholder="用户名"/></li>
                    <li><input v-model="uid" class="w-100 h-100" type="email" placeholder="电子邮箱"/></li>
                    <li><input @input="showPwdTips" @click="showPwdTips"  v-model="upwd" class="w-100 h-100" type="password" placeholder="密码" maxlength=16/></li>
                    <div v-show="pwdfocus" class="tips">
                        <div class="arrow"></div>
                        <ul class="list-unstyled tips-content">
                            <li>使用8-16个字符</li>
                            <li>使用至少一个数字字符以及一个字母字符。</li>
                            <li>请勿使用任何特殊字符。</li>
                            <li>请勿使用与您账号名称相似的密码。</li>
                        </ul>
                    </div>
                    <li class="row">
                    <input id="input86" class="col-2 h-100 text-center" type="text" placeholder="+86" disabled="disabled"/>
                    <input @click="showPhoneTips" @input="showPhoneTips" @blur="hidePhoneTips" v-model="phone" class="col-10 h-100" type="text" placeholder="手机号码"/>
                    </li>
                    <div v-show="phonefocus" class="tips">
                        <div class="arrow"></div>
                        <div class="tips-content">您可以通过该手机号码进行修改密码、解除密保等操作。<a class="blue_href" href="javascript:;">了解详情</a></div>
                    </div>
                    <li class="d-flex justify-content-between">
                    <input @click="showYanzhenTips" @input="showYanzhenTips" @blur="hideYanzhenTips" class="yanzhen1 h-100 text-center" type="text" placeholder="验证码"/>
                    <a href="##" class="yanzhen2 bgDarkButton">获取验证码</a>
                    </li>
                    <div v-show="yanzhenfocus" class="tips">
                        <div class="arrow"></div>
                        <div class="tips-content">点击“获取验证码”按钮，通过您填写的手机号码获取验证码。</div>
                    </div>
                    <li class="text-white text-left">
                    <a class="bgDarkButton smallcheck" href="##"><span class="showAgree">✔</span></a> 我已阅读并接受
                    <a class="blue_href" href="##">隐私政策</a>。
                    </li>
                    <li>
                    <a @click="toRegister" class="selectButton w-100 h-100" href="javascript:;">免费注册暴雪游戏通行证</a>
                    </li>
                    <li>
                    <router-link class="bgDarkButton w-100 h-100" to="/login">已经有通行证了？</router-link>
                    </li>
                    <li class="text-white text-left">
                    点击“免费注册暴雪游戏通行证”即表示我同意并接受
                    <a class="blue_href" href="##">暴雪战网最终用户许可协议</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

      <!-- <script>
         $(".smallcheck").click(function(){
            $(".showAgree").toggle();
         })
      </script> -->
</template>
<script>
    export default {
        data(){
            return{
                idcard:"",
                uname:"",
                upwd:"",
                uid:"",
                phone:"",
                isAlert:false,
                alertMsg:"",
                idcardfocus:false,
                pwdfocus:false,
                phonefocus:false,
                yanzhenfocus:false
            }
        },
        methods:{
            toRegister(){
                var regemail=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
                var regid=/\d{15}(\d{2}[0-9Xx])?/;
                var regpwd=/^[A-Za-z0-9\\u4e00-\u9fa5]+$/;
                var regphone=/(\+86|0086)?\s*1[3-8]\d{9}/;
                console.log(this.upwd);
                if(this.idcard==""){
                    this.isAlert=true;
                    this.alertMsg="身份证不能为空";
                }else if(!regid.test(this.idcard)){
                    this.isAlert=true;
                    this.alertMsg="身份证格式不正确"; 
                }else if(this.uname==""){
                    this.isAlert=true;
                    this.alertMsg="用户名不能为空";
                }else if(this.uid==""){
                    this.isAlert=true;
                    this.alertMsg="邮箱不能为空"
                }else if(!regemail.test(this.uid)){
                    this.isAlert=true;
                    this.alertMsg="邮箱格式不正确"
                }else if(this.upwd.length==0){
                    this.isAlert=true;
                    this.alertMsg="密码不能为空"
                }else if(!regpwd.test(this.upwd)){
                    this.isAlert=true;
                    this.alertMsg="密码不能含有特殊符号"
                }else if(this.upwd==this.uname){
                    this.isAlert=true;
                    this.alertMsg="密码不能与用户名相同"
                }else if(this.upwd.length<8){
                    this.isAlert=true;
                    this.alertMsg="密码不能小于8位"
                }else if(!regphone.test(this.phone)){
                    this.isAlert=true;
                    this.alertMsg="手机号码格式不正确"
                }else{
                    this.alertMsg="验证账户中...";
                    var url="http://127.0.0.1:3000/register";
                    var param=`uid=${this.uid}&uname=${this.uname}&upwd=${this.upwd}&idcard=${this.idcard}&phone=${this.phone}`;
                    this.axios.post(url,param).then(result=>{
                        if(result.data.code==0){
                            this.isAlert=true;
                            this.alertMsg="此邮箱已被注册";
                        }else if(result.data.code==1){
                            this.isAlert=true;
                            this.alertMsg="注册成功，正在跳转首页...";
                            this.$store.commit("setUid",{
                                uid:this.uid,
                                uname:this.uname
                            });
                            this.$router.push("/home");
                            window.location.reload();
                        }
                    });
                }
                
            },
            showIdTips(){
                this.idcardfocus=true;
            },
            showPwdTips(){
                this.pwdfocus=true;
            },
            showPhoneTips(){
                this.phonefocus=true;
            },
            showYanzhenTips(){
                this.yanzhenfocus=true;
            }
            ,
            hideIdTips(){
                this.idcardfocus=false;
            },
            // hidePwdTips(){
            //     this.pwdfocus=false;
            // },
            hidePhoneTips(){
                this.phonefocus=false;
            },
            hideYanzhenTips(){
                this.yanzhenfocus=false;
            }
        },
        created(){
            this.$emit("changeShow",false);
            this.$emit("changeBg","#0d1e30")
        },
        destroyed(){
            this.$emit("changeShow",true);
            this.$emit("changeBg","#012650")
        },
    }
</script>
<style scoped>
    @import '../../../static/css/resign.css'
</style>

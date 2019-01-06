<template>
    <div class="app-goodsinfo">
      <div class="container-fluid">
        <!-- 遮罩层-->
        <div class="contentZheZhao2" id="#top"></div>
        <!-- 主体-->
        <div class="product_detail1_top_bg">
            <div class="product_detail_title d-flex flex-column justify-content-end">
                <img src="http://127.0.0.1:3000/img/product/product_deatails1/product_detail_logo2.png" alt=""/>
                <div class="product_detail_introduce">
                    <div class="introduce_top d-flex justify-content-between">
                        <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/>
                        <div class="introduce_txt">
                            <h4>《炉石传说®》</h4>
                            <h6>策略类卡牌游戏</h6>
                        </div>
                    </div>
                    <div class="introduce_bottom d-flex flex-column justify-content-between">
                        <a class="Button text-white" href="javascript:;">免费游戏</a>
                        <div class="text-center"><a href="javascript:;">💙&lt;添加至心愿单&gt;</a></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product_detail_contain grayborderT">
            <div class="product_detail_floor1 grayborderB d-flex flex-wrap justify-content-between">
                <div class="detail_floor1_left">
                    <div class="detail_floor1_video" @mouseenter="changePlay" @mouseleave="returnPlay" @click="playvideo">
                        <div>
                            <img class="video_play" src="http://127.0.0.1:3000/img/product/video/video_play1.png" alt=""/>
                        </div>
                    </div>
                    <div class="product_detail_video">
                        <div class="d-flex justify-content-between">
                            <h4>
                                <img class="video_top_logo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/>
                                《炉石传说®》
                            </h4>
                            <a href="javascript:;" class="closeVideo text-right" @click="stopPlay">✖</a>
                        </div>
                        <video class="detail_video" controls>
                            <source src="http://127.0.0.1:3000/img/product/video/product_detail1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div class="detail_floor1_introduce">
                        <h2>难以置信的简单、不可思议的有趣</h2>
                        <p>收起您的刀剑，拿出您的套牌，一起来玩《炉石传说》吧！这款快节奏的策略卡牌游戏非常容易上手，极具趣味性。您要用您的卡牌来投射法术、召唤生物和控制《魔兽争霸》中的英雄，来赢得一场极具策略的卡牌决斗。我们还有说这游戏可以免费玩吗？</p>
                    </div>
                </div>
                <div class="detail_floor1_right">
                    <ul class="h-100 d-flex flex-column justify-content-between">
                        <li>需要互联网连接 </li>
                        <li><a class="blue_href" href="javascript:;"> 需要暴雪游戏通行证 </a></li>
                        <li><a class="blue_href" href="javascript:;"> 配置要求 </a></li>
                        <li><a class="blue_href" href="javascript:;"> 商品详情 </a></li>
                    </ul>
                </div>
            </div>
            <!-- 商品二楼-->
            <div class="product_detail_floor2 grayborderB d-flex justify-content-between">
                <div class="detail_floor2_left">
                    <h3>打造套牌，开始切磋！</h3>
                </div>
                <div class="detail_floor2_right d-flex flex-wrap justify-content-between">
                    <div class="floor2_goods">
                        <img src="http://127.0.0.1:3000/img/product/product_deatails1/floor2_goods1.jpg" alt=""/>
                        <h5>来参加吧！</h5>
                        <p>随您自己的时间表来进行游戏——大部分情况下一场游戏不会超过10分钟，无论您是和好友还是和电脑AI玩。《炉石传说》非常容易上手而且具有极其平易近人的游戏性，支持Windows、Mac和Ipad平台。</p>
                    </div>
                    <div class="floor2_goods">
                        <img src="http://127.0.0.1:3000/img/product/product_deatails1/floor2_goods2.jpg" alt=""/>
                        <h5>免费游戏</h5>
                        <p>《炉石传说》是可以免费游戏的，不仅仅是免费尝试或免费开始游戏哦。卡牌不一定非要购买，因为您赢得比赛后同样也会获得卡牌，此外，您甚至还可以自己制作卡牌。</p>
                    </div>
                    <div class="floor2_goods">
                        <img src="http://127.0.0.1:3000/img/product/product_deatails1/floor2_goods3.jpg" alt=""/>
                        <h5>体验《魔兽争霸®》的全新方式</h5>
                        <p>您的套牌都是由《魔兽争霸》世界中的传奇英雄以及怪物、法术、物品和技能所组成。在你出牌时，加入进《炉石传说》中的视觉、声音以及其它的细节效果会带给您一种从未有过的新奇体验。</p>
                    </div>
                    <div class="floor2_goods">
                        <img src="http://127.0.0.1:3000/img/product/product_deatails1/floor2_goods4.jpg" alt=""/>
                        <h5>快捷的比赛匹配</h5>
                        <p>不同水平的玩家都能在排位和非排位赛以及甚至竞技场中找到一场充满趣味的战斗，竞技场是一种特殊的锦标赛模式。《炉石传说》的比赛匹配系统会将您和您水平相当的玩家匹配在一起。</p>
                    </div>
                    <div class="floor2_goods">
                        <img src="http://127.0.0.1:3000/img/product/product_deatails1/floor2_goods5.jpg" alt=""/>
                        <h5>搭配完美的套牌</h5>
                        <p>有了强大的预置套牌以及可以赢取、制作或购买的成百上千的额外卡牌——您的搜集过程永远不会停止。策略的可行性是无限的！</p>
                    </div>
                    <div class="floor2_goods">
                        <img src="http://127.0.0.1:3000/img/product/product_deatails1/floor2_goods6.jpg" alt=""/>
                        <h5>熟能生巧</h5>
                        <p>在练习赛中挑战萨尔、古尔丹等等艾泽拉斯世界中的著名勇士，以此来磨练您的技巧，赢得单人游戏的奖励。您甚至还可以解锁专家级别的电脑AI，体验更为困难的挑战！</p>
                    </div>
                </div>
            </div>

            <!-- 商品三楼-->
            <div class="product_detail_floor3 grayborderB d-flex justify-content-between">
                <div class="detail_floor3_left">
                    <h3>配置要求</h3>
                </div>
                <div class="detail_floor3_right d-flex flex-column justify-content-between">
                    <ul class="floor3_ul list-unstyled d-flex justify-content-start">
                        <li class="floor3_logo1 borderBottomBlue" @mouseenter="bluelogo1" @mouseleave="graylogo1" @click="showWin">
                            <a class="grayColor" href="javascript:;">
                                <img class="winLogo" src="http://127.0.0.1:3000/img/product/product_deatails1/windows1.png" alt=""/>
                                Windows
                            </a>
                        </li>
                        <li class="floor3_logo2" @mouseenter="bluelogo2" @mouseleave="graylogo2" @click="showIos">
                            <a class="grayColor" href="javascript:;">
                                    <img class="iosLogo" src="http://127.0.0.1:3000/img/product/product_deatails1/ios1.png" alt=""/>
                                    iOS
                            </a>
                        </li>
                        <li class="floor3_logo3" @mouseenter="bluelogo3" @mouseleave="graylogo3" @click="showAnd">
                            <a class="grayColor" href="javascript:;">
                                <img class="andLogo" src="http://127.0.0.1:3000/img/product/product_deatails1/android1.png" alt=""/>
                                Android
                            </a>
                        </li>
                    </ul>
                    <div>
                        <select name="" id="" class="floor3_select" @change="changeMsg">
                            <option class="floor3_option1" value="1" selected="selected">Windows</option>
                            <option class="floor3_option2" value="2">iOs</option>
                            <option class="floor3_option3" value="3">Android</option>
                        </select>
                    </div>
                    <div class="floor3_msg1 d-flex justify-content-between">
                        <div class="floor3_msg1_left d-flex flex-column justify-content-between">
                            <h5>最低配置</h5>
                            <div class="msg1_left_contain d-flex flex-wrap justify-content-between">
                                <div class="">
                                    <div class="">操作系统</div>
                                    <p class="">Windows® 7/Windows® 8 /Windows® 10</p>
                                </div>
                                <div class="">
                                    <div class="">处理器</div>
                                    <p class="">Intel® Pentium® D 或 AMD® Athlon™ 64 X2</p>
                                </div>
                                <div class="">
                                    <div class="">显卡</div>
                                    <p class="">NVIDIA® GeForce® 8600 GT 或 ATI™ Radeon™ HD 2600XT 或更高</p>
                                </div>
                                <div class="">
                                    <div class="">内存</div>
                                    <p class="">3 GB&nbsp;</p>
                                </div>
                                <div class="">
                                    <div class="">存储空间</div>
                                    <p class="">3 GB 可用硬盘空间</p>
                                </div>
                                <div class="">
                                    <div class="">网络</div>
                                    <p class="">宽带网络</p>
                                </div>
                                <div class="">
                                    <div class="">分辨率</div>
                                    <p class="">最低 1024 x 768</p>
                                </div>
                            </div>
                        </div>
                        <div class="floor3_msg1_right d-flex flex-column justify-content-between">
                            <h5>推荐配置</h5>
                            <div class="msg1_right_contain d-flex flex-wrap justify-content-between">
                                <div class="">
                                    <div class="">操作系统</div>
                                    <p class=""> Windows® 10 64-bit</p>
                                </div>
                                <div class="">
                                    <div class="">处理器</div>
                                    <p class="">Intel Core™ 2 Duo (2.2 GHz) 或 AMD Athlon 64 X2 (2.6 GHz) 或更高</p>
                                </div>
                                <div class="">
                                    <div class="">显卡</div>
                                    <p class="">NVIDIA® GeForce® 240GT 或 ATI™Radeon™ HD 4850 或更高</p>
                                </div>
                                <div class="">
                                    <div class="">内存</div>
                                    <p class="">4 GB&nbsp;</p>
                                </div>
                                <div class="">
                                    <div class="">存储空间</div>
                                    <p class="">3 GB 可用硬盘空间</p>
                                </div>
                                <div class="">
                                    <div class="">网络</div>
                                    <p class="">宽带网络</p>
                                </div>
                                <div class="">
                                    <div class="">分辨率</div>
                                    <p class="">最低 1024 x 768</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="floor3_msg2 d-flex justify-content-between">
                        <div class="floor3_msg2_left d-flex flex-column justify-content-between">
                            <h5>最低配置</h5>
                            <div class="msg2_left_contain d-flex flex-wrap justify-content-between">
                                <div class="">
                                    <div class="">硬件</div>
                                    <p class="">iPad Air™及以上版本；iPad 4 及以上版本；iPad mini 2及以上版本；</p>
                                </div>
                                <div class="">
                                    <div class="">操作系统</div>
                                    <p class="">iPhone 5及以上版本；iPod Touch 6及以上版本</p>
                                </div>
                            </div>
                    </div>
                </div>
                    <div class="floor3_msg3 d-flex justify-content-between">
                        <div class="floor3_msg3_left d-flex flex-column justify-content-between">
                            <h5>最低配置</h5>
                            <div class="msg3_left_contain d-flex flex-wrap justify-content-between">
                                <div class="">
                                    <div class="">操作系统</div>
                                    <p class="">Android 最新的（非测试）版本 </p>
                                </div>
                                <div class="">
                                    <div class="">处理器</div>
                                    <p class="">1.2 GHz 以上</p>
                                </div>
                                <div class="">
                                    <div class="">内存</div>
                                    <p class="">1 GB&nbsp;</p>
                                </div>
                                <div class="">
                                    <div class="">存储空间</div>
                                    <p class="">2 GB 的内部存储空间 或 1 GB 的内部存储空间和2 GB 的外部存储空间</p>
                                </div>
                            </div>
                        </div>
                        <div class="floor3_msg3_right d-flex flex-column justify-content-between">
                            <h5>推荐配置</h5>
                            <div class="msg3_right_contain d-flex flex-wrap justify-content-between">
                                <div class="">
                                    <div class="">操作系统</div>
                                    <p class="">Android 最新的（非测试）版本 </p>
                                </div>
                                <div class="">
                                    <div class="">处理器</div>
                                    <p class="">1.5 GHz 以上</p>
                                </div>
                                <div class="">
                                    <div class="">内存</div>
                                    <p class="">2 GB&nbsp;</p>
                                </div>
                                <div class="">
                                    <div class="">存储空间</div>
                                    <p class="">3 GB 的内部存储空间</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商品四楼-->
            <div class="product_detail_floor4 grayborderB d-flex justify-content-between">
                <div class="detail_floor4_left">
                    <h3>商品详情</h3>
                </div>
                <div class="detail_floor4_right d-flex justify-content-between">
                    <div class="floor4_msg_left">
                        <div>
                            <h5>类型</h5>
                            <p>策略类卡牌游戏</p>
                        </div>
                        <div>
                            <h5>平台</h5>
                            <ul class="list-unstyled d-flex flex-wrap">
                                <li>
                                    <img src="http://127.0.0.1:3000/img/product/product_deatails1/windows1.png" alt=""/>
                                    Windows
                                </li>
                                <li>
                                    <img src="http://127.0.0.1:3000/img/product/product_deatails1/ios1.png" alt=""/>
                                    iOS
                                </li>
                                <li>
                                    <img src="http://127.0.0.1:3000/img/product/product_deatails1/android1.png" alt=""/>
                                    Android
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="floor4_msg_center">
                        <div>
                            <h5>支持语言</h5>
                            <ul>
                                <li>简体中文</li>
                            </ul>
                        </div>
                        <div>
                            <h5>可使用的地区</h5>
                            <ul>
                                <li>中国</li>
                            </ul>
                        </div>
                    </div>
                    <div class="floor4_msg_right">
                        <div>
                            <h5>商品要求</h5>
                            <ul>
                                <li>需要互联网连接</li>
                                <li>
                                    <a class="blue_href" href="javascript:;">
                                        需要暴雪游戏通行证
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 内容底部提示-->
            <div class="detail_floor_bottom d-flex justify-content-end">
                <div class="floor_bottom_txt">
                    <p>
                        请注意：交易过程中如发生支付问题或拒付，您的《炉石传说》账号将暂时被停用，直到此支付问题完全解决、或重新支付款项之后才能恢复正常使用。
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
     export default {
        created(){
            this.$emit("changeshow",false);
        },
        destroyed () {
            this.$emit("changeshow",true);
        },
        data(){
            return{
            }
        },
        methods:{
            bluelogo1(){
                document.querySelector(".winLogo").setAttribute("src","http://127.0.0.1:3000/img/product/product_deatails1/windows2.png");
            },
            graylogo1(){
                document.querySelector(".winLogo").setAttribute("src","http://127.0.0.1:3000/img/product/product_deatails1/windows1.png");
            },
            bluelogo2(){
                document.querySelector(".iosLogo").setAttribute("src","http://127.0.0.1:3000/img/product/product_deatails1/ios2.png");
            },
            graylogo2(){
                document.querySelector(".iosLogo").setAttribute("src","http://127.0.0.1:3000/img/product/product_deatails1/ios1.png");
            },
            bluelogo3(){
                document.querySelector(".andLogo").setAttribute("src","http://127.0.0.1:3000/img/product/product_deatails1/android2.png");
            },
            graylogo3(){
                document.querySelector(".andLogo").setAttribute("src","http://127.0.0.1:3000/img/product/product_deatails1/android1.png");
            },
            showIos(){
                document.querySelector(".floor3_msg2").classList.remove("floorHide");
                document.querySelector(".floor3_msg2").classList.add("floorShow");
                document.querySelector(".floor3_msg1").classList.add("floorHide");
                document.querySelector(".floor3_msg3").classList.add("floorHide");
                document.querySelector(".floor3_logo2").classList.add("borderBottomBlue");
                document.querySelector(".floor3_logo1").classList.remove("borderBottomBlue");
                document.querySelector(".floor3_logo3").classList.remove("borderBottomBlue");
                document.querySelector(".floor3_select").value=2;
            },
            showWin(){
                document.querySelector(".floor3_msg1").classList.remove("floorHide");
                document.querySelector(".floor3_msg1").classList.add("floorShow");
                document.querySelector(".floor3_msg2").classList.add("floorHide");
                document.querySelector(".floor3_msg3").classList.add("floorHide");
                document.querySelector(".floor3_logo1").classList.add("borderBottomBlue");
                document.querySelector(".floor3_logo3").classList.remove("borderBottomBlue");
                document.querySelector(".floor3_logo2").classList.remove("borderBottomBlue");
                document.querySelector(".floor3_select").value=1;
            },
            showAnd(){
                document.querySelector(".floor3_msg3").classList.remove("floorHide");
                document.querySelector(".floor3_msg3").classList.add("floorShow");
                document.querySelector(".floor3_msg1").classList.add("floorHide");
                document.querySelector(".floor3_msg2").classList.add("floorHide");
                document.querySelector(".floor3_logo3").classList.add("borderBottomBlue");
                document.querySelector(".floor3_logo1").classList.remove("borderBottomBlue");
                document.querySelector(".floor3_logo2").classList.remove("borderBottomBlue");
                document.querySelector(".floor3_select").value=3;
            },
            changeMsg(){
                var val=document.querySelector(".floor3_select").value;
                if (val==1){
                    this.$options.methods.showWin();
                }else if(val==2){
                    this.$options.methods.showIos();
                }else{
                    this.$options.methods.showAnd();
                }
            },
            changePlay(){
                document.querySelector(".video_play").setAttribute("src","http://127.0.0.1:3000/img/product/video/video_play3.png");
            },
            returnPlay(){
                document.querySelector(".video_play").setAttribute("src","http://127.0.0.1:3000/img/product/video/video_play1.png");
            },
            playvideo(){
                document.querySelector(".product_detail_video").classList.add("playApear");
                document.querySelector(".detail_video").play();
                document.querySelector(".contentZheZhao2").classList.add("playApear");
            },
            stopPlay(){
                document.querySelector(".product_detail_video").classList.remove("playApear");
                document.querySelector(".detail_video").pause();
                document.querySelector(".detail_video").currentTime=0;
                document.querySelector(".contentZheZhao2").classList.remove("playApear");
            },
        }
       
    }
</script>
<style scoped>
    @import '../../../static/css/product_details1'
</style>

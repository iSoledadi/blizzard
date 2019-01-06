<template>
    <div class="app-home">
         <!-- product_details1详情内容 -->
        <div class="container-fluid">
            <table></table>
            <!-- 遮罩层-->
            <!-- <div class="contentZheZhao"></div> -->
            <!-- 主体-->

            <div class="my_banner" @mouseenter="blueBtn" @mouseleave="noBlueBtn">
                <div class="banner-zheZhao"></div>
                <div id="mycar" class="carousel slide" data-ride="carousel" data-interval="4000">
                    <!-- 轮播图片-->
                    <div class="carousel-inner">
                        <div class="carousel-item active item1">
                            <img class="my_banner_img1 testMove" src="" alt=""/>
                            <div class="carousel-caption banner-caption1 caption1">
                                <div class="captionkuang1 text-center">
                                    <div>
                                        <img src="http://127.0.0.1:3000/img/product/product_banner/pCaption1.png" alt=""/>
                                    </div>
                                    <h1 class="captiontxt1">全新拓展包</h1>
                                    <a class="selectButton" href="##">预购</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item item2">
                            <img class="my_banner_img2 testMove" src="" alt=""/>
                            <div class="carousel-caption banner-caption1 caption2">
                                <div class="captionkuang2 text-center">
                                    <div>
                                        <img src="http://127.0.0.1:3000/img/product/product_banner/pCaption2.png" alt=""/>
                                    </div>
                                    <h1 class="captiontxt1">虚拟门票的所有游戏内物品奖励现已发放</h1>
                                    <a class="selectButton" href="##">立即购买</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item item3">
                            <img class="my_banner_img3 testMove" src="" alt=""/>
                            <div class="carousel-caption banner-caption1 caption3">
                                <div class="captionkuang3 text-center">
                                    <div>
                                        <img src="http://127.0.0.1:3000/img/product/product_banner/pCaption3.png" alt=""/>
                                    </div>
                                    <a class="selectButton" href="##">立即购买</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 左右按钮-->
                    <a href="#mycar" class="carousel-control-prev" data-slide="prev">
                        <div class="prevButton" @mouseenter="pb3Img">
                            <img class="prevImg" src="http://127.0.0.1:3000/img/index/game/hover-prev.png" alt=""/>
                        </div>
                    </a>
                    <a href="#mycar" class="carousel-control-next" data-slide="next">
                        <div class="nextButton" @mouseenter="nb3Img">
                            <img class="nextImg" src="http://127.0.0.1:3000/img/index/game/hover-next.png" alt=""/>
                        </div>
                    </a>

                    <!-- 指示器-->
                    <ul class="carousel-indicators">
                        <li class="active" data-slide-to="0" data-target="#mycar"></li>
                        <li data-slide-to="1" data-target="#mycar"></li>
                        <li data-slide-to="2" data-target="#mycar"></li>
                    </ul>
                </div>
            </div>


            <div class="product_main">
                <!-- 游戏图标-->
                <div class="game_logo_list grayborderTB">
                    <div class="game_logo_kuang">
                        <span class="text-white text-left">暴雪游戏</span> <div class="gameBr"></div>
                        <ul class="game_logo_ul float-right list-unstyled d-flex justify-content-between">
                            <li><a href="javascripg:;" title="魔兽世界"><img src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/></a></li>
                            <li><a href="javascripg:;" title="守望先锋"><img src="http://127.0.0.1:3000/img/product/product_header/left_select_game2.svg" alt=""/></a></li>
                            <li><a href="javascripg:;" title="暗黑破坏神Ⅲ"><img src="http://127.0.0.1:3000/img/product/product_header/left_select_game3.svg" alt=""/></a></li>
                            <li><a href="javascripg:;" title="炉石传说"><img src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/></a></li>
                            <li><a href="javascripg:;" title="风暴英雄"><img src="http://127.0.0.1:3000/img/product/product_header/left_select_game5.svg" alt=""/></a></li>
                            <li><a href="javascripg:;" title="星际争霸Ⅱ"><img src="http://127.0.0.1:3000/img/product/product_header/left_select_game6.svg" alt=""/></a></li>
                            <li><a href="javascripg:;" title="星际争霸"><img src="http://127.0.0.1:3000/img/product/product_header/left_select_game7.svg" alt=""/></a></li>
                        </ul>
                        <div style="clear:both"></div>
                    </div>
                </div>

                <!-- 商品一楼-->
                <div class="product_floor1">
                    <div class="product_floor1_caption text-white">推荐</div>
                    <ul class="product_floor1_contain list-unstyled d-flex flex-wrap justify-content-between">
                        <div>
                            <a href="javascript:;">
                                <li class="product_game1 text-left d-flex flex-column justify-content-start">
                                        <div class="d-flex flex-column justify-content-end">
                                            <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>
                                        </div>
                                        <h6 class="text-white product_game_title">翁帕尔</h6>
                                        <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                        <h6 class="grayTitle">宠物</h6>
                                        <h6 class="text-white product_price">￥45</h6>
                                    </li>
                                </a>
                        </div>
                        <div>
                            <router-link to="/GoodsInfo/:id=2">
                                <li class="product_game2 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《炉石传说®》</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">策略类卡牌游戏</h6>
                                    <h6 class="text-white product_price">免费游戏</h6>
                                </li>
                            </router-link>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_game3 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《魔兽世界®》: 争霸艾泽拉斯</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">游戏时间</h6>
                                    <h6 class="text-white product_price">￥75起</h6>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_game4 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game2.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《守望先锋®》：传奇典藏版</h6>
                                    <h6 class="product_secondTitle">传奇典藏版</h6>
                                    <h6 class="grayTitle">团队射击游戏</h6>
                                    <h6 class="text-white product_price">￥158</h6>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_game5 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game6.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《星际争霸II》</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">即时策略游戏</h6>
                                    <h6 class="text-white product_price">免费游戏</h6>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_game6 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game5.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《风暴英雄™》</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">多人在线战术竞技游戏</h6>
                                    <h6 class="text-white product_price">免费游戏</h6>
                                </li>
                            </a>
                        </div>
                        <div class="game7">
                            <a href="javascript:;">
                                <li class="product_game7 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">魔兽世界®: 《争霸艾泽拉斯》数字典藏礼包</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">礼包</h6>
                                    <h6 class="text-white product_price">￥240</h6>
                                </li>
                            </a>
                        </div>
                        <div class="game8">
                            <a href="javascript:;">
                                <li class="product_game8 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game3.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《暗黑破坏神III》: 《夺魂之镰》</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">动作角色扮演游戏</h6>
                                    <h6 class="text-white product_price">￥198起</h6>
                                </li>
                            </a>
                        </div>
                        <div class="game9">
                            <a href="javascript:;">
                                <li class="product_game9 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">经典</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">奥术之尘礼包</h6>
                                    <h6 class="text-white product_price">￥60起</h6>
                                </li>
                            </a>
                        </div>
                        <div class="game10">
                            <a href="javascript:;">
                                <li class="product_game10 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《守望先锋®》游戏货币: 赠送补给</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">可解锁内容</h6>
                                    <h6 class="text-white product_price">￥12起</h6>
                                </li>
                            </a>
                        </div>
                    </ul>
            <div></div>
                </div>

                <!-- 炉石展示栏-->
                <div class="product_center_kuang">
                    <div class="product_center">
                        <table></table>
                        <div class="product_introduce_caption text-center d-flex flex-column justify-content-between" :class="searchBarFixed == true?'introduceApear':''">
                            <img src="http://127.0.0.1:3000/img/product/product_index/introduce_logo.png" alt=""/>
                            <h2 class="grayTitle">探索科学的奥妙！</h2>
                            <a class="selectButton" href="javascript:;">了解详情</a>
                        </div>
                        <img class="pengpengDoctor" :class="searchBarFixed == true?'pengpengApear':''" src="http://127.0.0.1:3000/img/product/product_index/pengpengDoctor.png" alt=""/>
                    </div>
                </div>


                <!-- 商品二楼-->
                <div class="product_floor2">
                    <div class="product_floor2_caption text-white">精选</div>
                    <ul class="product_floor2_contain list-unstyled d-flex flex-wrap justify-content-between">
                        <div>
                            <a href="javascript:;">
                                <li class="product_goodgame1 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">翁帕尔</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">宠物</h6>
                                    <h6 class="text-white product_price">￥45</h6>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_goodgame2 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game8.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">2018暴雪嘉年华虚拟门票</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">票务活动</h6>
                                    <h6 class="text-white product_price">￥238</h6>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_goodgame3 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">砰砰计划</h6>
                                    <h6 class="product_secondTitle">最新内容 </h6>
                                    <h6 class="grayTitle">奥术之尘礼包</h6>
                                    <h6 class="text-white product_price">￥60起</h6>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_goodgame4 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game2.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《守望先锋®》游戏货币: 赠送补给</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">可解锁内容</h6>
                                    <h6 class="text-white product_price">￥12起</h6>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_goodgame5 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game2.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《守望先锋®》：传奇典藏版</h6>
                                    <h6 class="product_secondTitle">传奇典藏版</h6>
                                    <h6 class="grayTitle">团队射击游戏</h6>
                                    <h6 class="text-white product_price">￥158</h6>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <li class="product_goodgame6 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">魔兽世界®: 《争霸艾泽拉斯》数字典藏礼包</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">礼包</h6>
                                    <h6 class="text-white product_price">￥240</h6>
                                </li>
                            </a>
                        </div>
                        <div class="goodgame7">
                            <a href="javascript:;">
                                <li class="product_goodgame7 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">炉石传说®：预购50点奥术之尘</h6>
                                    <h6 class="product_secondTitle">立即预购！</h6>
                                    <h6 class="grayTitle">奥术之尘礼包</h6>
                                    <h6 class="text-white product_price">￥328</h6>
                                </li>
                            </a>
                        </div>
                        <div class="goodgame8">
                            <a href="javascript:;">
                                <li class="product_goodgame8 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game9.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">暴雪游戏点数</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">游戏服务</h6>
                                    <h6 class="text-white product_price">了解详情</h6>
                                </li>
                            </a>
                        </div>
                        <div class="goodgame9">
                            <a href="javascript:;">
                                <li class="product_goodgame9 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">《魔兽世界®》 : 争霸艾泽拉斯</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">游戏时间</h6>
                                    <h6 class="text-white product_price">￥75起</h6>
                                </li>
                            </a>
                        </div>
                        <div class="goodgame10">
                            <a href="javascript:;">
                                <li class="product_goodgame10 text-left d-flex flex-column justify-content-start">
                                    <div class="d-flex flex-column justify-content-end">
                                        <img class="middleLogo" src="http://127.0.0.1:3000/img/product/product_header/left_select_game3.svg" alt=""/>
                                    </div>
                                    <h6 class="text-white product_game_title">暗黑破坏神III：“死灵再世”内容包</h6>
                                    <h6 class="product_secondTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                                    <h6 class="grayTitle">可解锁内容</h6>
                                    <h6 class="text-white product_price d-flex flex-column justify-content-end">￥88</h6>
                                </li>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
    export default {
        // created(){
        //     this.getImages();
        // },
        // methods:{
        //     getImages(){
        //         this.$http.get("imagelist").then(result=>{
        //             // console.log(result.body);
        //             this.list=result.body;
        //         })
        //     }
        // },
        created(){
        },
        methods:{
            noBlueBtn(){
                document.querySelector(".prevButton").classList.remove("darkBg");
                document.querySelector(".nextButton").classList.remove("darkBg");
            },
            blueBtn(){
                document.querySelector(".prevButton").classList.add("darkBg");
                document.querySelector(".nextButton").classList.add("darkBg");
            },
            pb3Img(){
                  document.querySelector(".prevImg").setAttribute("src","http://127.0.0.1:3000/img/index/game/hover-prev3.png");
            },
            nb3Img(){
                document.querySelector(".nextImg").setAttribute("src","http://127.0.0.1:3000/img/index/game/hover-next3.png");
            },
            handleScroll () {
                 var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var offsetTop = document.querySelector('.product_center').offsetTop;
                if (scrollTop > offsetTop-200) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                };
            },
            getBannerr(){
                var b1=document.querySelector(".my_banner_img1");
                var b2=document.querySelector(".my_banner_img2");
                var b3=document.querySelector(".my_banner_img3");
                if(document.body.clientWidth>751){
                    b1.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pBanner1.jpg");
                    b2.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pBanner2.jpg");
                    b3.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pBanner3.jpg");
                }else{
                    b1.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pSmallBanner1.png");
                    b2.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pSmallBanner2.jpg");
                    b3.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pSmallBanner3.jpg");
                }
            },           
        },
         mounted() {
            window.addEventListener('scroll', this.handleScroll);
            // const that = this;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    this.screenWidth = window.screenWidth;
                     var b1=document.querySelector(".my_banner_img1");
                var b2=document.querySelector(".my_banner_img2");
                var b3=document.querySelector(".my_banner_img3");
                if(this.screenWidth>751){
                    b1.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pBanner1.jpg");
                    b2.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pBanner2.jpg");
                    b3.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pBanner3.jpg");
                }else{
                    b1.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pSmallBanner1.png");
                    b2.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pSmallBanner2.jpg");
                    b3.setAttribute("src","http://127.0.0.1:3000/img/product/product_banner/pSmallBanner3.jpg");
                }
                })()
            };
            this.getBannerr();
        },
        data(){
            return {
                //list:[]
                searchBarFixed:false,
                screenWidth: document.body.clientWidth   // 这里是给到了一个默认值
            }
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
            window.onresize ="";
        },
        watch: {
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        // that.screenWidth = that.$store.state.canvasWidth
                        // console.log(that.screenWidth)
                        // that.init()
                        that.timer = false
                    }, 400)
                }
            }
        }
    }
</script>
<style scoped>
    @import '../../../static/css/product_index'
</style>


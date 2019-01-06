<template>
  <div id="app">
    <!-- 主组件头部 -->
        <header id="header" class="container-fluid" v-show="isShow">
          <table></table>
          <!-- 遮罩层-->
          <div class="contentZheZhao" id="#top"></div>
          <!--头部-->
          <!-- 1.1顶部导航栏-->
          <nav class="navbar navbar-expand-sm my_header_nav">

              <!-- 1.1.2导航栏左边部分内容-->
              <div class="my_header_1 col-lg-7 col-sm-8 headerLeft">
                  <ul class="navbar-nav my_header_text m-0">
                      <li class="nav-item my_header_1 pr-0">
                          <a href="#">
                              <img class="my_nav_img" src="http://127.0.0.1:3000/img/header/logo_small.png" alt="">
                          </a>
                      </li>
                      <li class="nav-item pl-3"><a class="nav-link" href="#">商城</a></li>
                  </ul>
              </div>

              <!-- 1.1.3导航栏右边注册内容-->
              <div class="my_header_1 col-lg-5 col-sm-3 headerRight">
                  <ul class="navbar-nav justify-content-end my_header_text m-0">
                      <li class="nav-item"><a class="nav-link" href="#">支持</a></li>
                      <li class="nav-item right_select_big">
                          <a class="nav-link" href="#">
                              {{myuser}}
                              <img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                          </a>
                      </li>
                  </ul>
              </div>

              <!-- 右边下拉菜单-->
              <div class="header_right_select">
                  <ul class="list-unstyled m-0">
                      <li class="my_nav_selectRight_risign d-flex">
                          <router-link v-show="isloginout" class="selectButton select_button_right" href="login.html" to="/login">登录</router-link>
                            <span v-show="islogin" class="my_login_name">{{this.$store.state.uname}}</span>
                            <span v-show="islogin" class="my_login_id">{{this.$store.state.uid}}</span>
                      </li>
                      <li><a class="grayTitle" href="login.html">账户</a></li>
                      <li v-show="islogin"><a class="grayTitle" href="javascript:;">我的礼物</a></li>
                      <li v-show="islogin"><a class="grayTitle" href="javascript:;" @click="removeState">注销</a></li>
                      <li v-show="isloginout"><router-link class="grayTitle" to="/register">免费注册</router-link></li>
                  </ul>
              </div>
              <!-- 1.1.4缩放后导航栏-->
              <div class="d-flex justify-content-between w-100 m-0 small_nav">
                  <!-- 1.1.1.1缩放后导航栏左边按钮-->
                  <a href="#" id="headerBtn1" class="my_header_btn  p-0"  data-toggle="collapse">
                      <img src="http://127.0.0.1:3000/img/header/smallbtn2.png" alt=""/>
                  </a>
                  <!-- 缩放后导航栏中间logo-->
                  <div class="text-center d-flex flex-column justify-content-center">
                      <a href="#" class="">
                          <img class="my_header_smlogo" src="http://127.0.0.1:3000/img/header/logo_small.png" alt=""/>
                          <h1 class="wihteTxt smallstoretxt mb-0">商城</h1>
                      </a>
                  </div>
                  <a href="#" id="headerBtn2" class="my_header_btn  p-0 text-right"  data-toggle="collapse">
                      <img src="http://127.0.0.1:3000/img/header/smallbtn1.png" alt=""/>
                  </a>
              </div>

          </nav>
          <!-- 左侧边栏-->
          <div id="my_nav_left_selection" class="">
              <div class="my_nav_left_selection_content d-flex flex-column justify-content-start">
                  <ul class="list-unstyled nav_list_left_topUl">
                      <li class="my_nav_select_logo">
                          <a href="javascript:;" id="colseLeftSelect">❌</a>
                          <div class="float-right text-center">
                              <img src="http://127.0.0.1:3000/img/header/navbar_logo2.png" alt=""/>
                              <h1 class="mb-0 grayTitle">商城</h1>
                          </div>
                      </li>
                      <li id="left_select_input">
                          <div class="left_select_input_icon">🔍</div>
                          <input type="text" placeholder="搜索商城"/>
                      </li>
                      <li>
                          <a class="grayTitle" href="javascript:;">主页</a>
                      </li>
                      <li data-trigger="dropdown3" class="testHeight">
                          <div class="left_select_border3"></div>
                          <a id="gameList3" class="grayTitle" href="javascript:;">
                              游戏 <img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                          </a>
                          <ul class="dropdown-manu2 list-unstyled">
                              <li id="blizzSmallTxt">暴雪游戏</li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>
                                      魔兽世界
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game2.svg" alt=""/>
                                      守望先锋
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game3.svg" alt=""/>
                                      暗黑破坏神III
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/>
                                      炉石传说
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game5.svg" alt=""/>
                                      风暴英雄
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game6.svg" alt=""/>
                                      星际争霸II
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game7.svg" alt=""/>
                                      星际争霸
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li data-trigger="dropdown4" class="testHeight">
                          <div class="left_select_border4"></div>
                          <a id="gameList4" class="grayTitle" href="javascript:;">
                              服务 <img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                          </a>
                          <ul class="dropdown-manu2 list-unstyled">
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                  ✏ 战网昵称修改服务
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      🎫  暴雪嘉年华门票
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                      🌟 使用兑换码
                                  </a>
                              </li>
                          </ul>
                      <li>
                          <a class="grayTitle" href="javascript:;">心愿单</a>
                      </li>
                      <li data-trigger="dropdown5" class="testHeight">
                          <div class="left_select_border5"></div>
                          <a id="gameList5" class="grayTitle" href="javascript:;">
                              暴雪游戏点数<img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                          </a>
                          <ul class="dropdown-manu2 list-unstyled">
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                  🎁 充值点数
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                  💝 赠送点数
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                  💸 兑换点卡
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                  📚 充值历史
                                  </a>
                              </li>
                              <li>
                                  <a class="newsTxt wihteTxt" href="javascript:;">
                                  💠 暴雪游戏点数帮助
                                  </a>
                              </li>
                          </ul>
                      </li>
                  </ul>
                  <img class="grayLogo" src="http://127.0.0.1:3000/img/product/product_header/gray_logo.PNG" alt=""/>
              </div>
          </div>

          <!-- 右侧边栏-->
          <div id="my_nav_right_selection">
              <ul class="list-unstyled nav_list_right_topUl m-0">
                  <li class="my_nav_selectRight_close">
                      <img src="http://127.0.0.1:3000/img/header/navbar_logo2.png" alt=""/>
                      <a href="javascript:;" id="colseRightSelect">❌</a>
                  </li>
                  <li class="my_nav_selectRight_risign d-flex">
                    <router-link v-show="isloginout" class="selectButton select_button_right" to="/login">登录</router-link>
                    <span v-show="islogin" class="my_login_name">{{this.$store.state.uname}}</span>
                    <span v-show="islogin" class="my_login_id">{{this.$store.state.uid}}</span>
                  </li>
                  <li v-show="isloginout">
                      <a class="grayTitle" href="javascript:;">💡&nbsp;支持</a>
                  </li>
                  <li>
                      <a class="grayTitle" href="javascript:;">
                          <span class="bluelogo">⚙</span>&nbsp; 账户
                      </a>
                  </li>
                  <li v-show="islogin">
                      <a class="grayTitle" href="javascript:;">
                          <span class="bluelogo">⚙</span>&nbsp; 礼物
                      </a>
                  </li>
                  <li  @click="removeState" v-show="islogin">
                      <a class="grayTitle" href="javascript:;">
                          <span class="bluelogo">⚙</span>&nbsp; 注销
                      </a>
                  </li>
                  <li v-show="isloginout">
                      <router-link class="grayTitle" to="/register">
                          <span class="bluelogo">®</span>&nbsp; 免费注册
                      </router-link>
                  </li>
                  <li>
                      <a class="grayTitle" href="javascript:;">主页</a>
                  </li>
                  <li data-trigger="dropdown" class="testHeight">
                      <div class="left_select_border"></div>
                      <a id="gameList" class="grayTitle" href="javascript:;">
                          游戏 <img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                      </a>
                      <ul class="dropdown-manu list-unstyled">
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo1.png" alt=""/>
                                  《守望先锋™》
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo2.png" alt=""/>
                                  《魔兽世界<span class="Navbar-registered">®</span>》
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo3.png" alt=""/>
                                  《炉石传说<span class="Navbar-registered">®</span>》
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo4.png" alt=""/>
                                  《风暴英雄™》
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo5.png" alt=""/>
                                  《魔兽争霸<span class="Navbar-registered">®</span>III：重制版™》
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo6.png" alt=""/>
                                  《暗黑破壞神<span class="Navbar-registered">®</span>不朽™》
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo7.png" alt=""/>
                                  《暗黑破坏神<span class="Navbar-registered">®</span>III》
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo8.png" alt=""/>
                                  《星际争霸<span class="Navbar-registered">®</span>II》
                              </a>
                          </li>
                          <li class="grayBorderBottom">
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo9.png" alt=""/>
                                  《星际争霸：重制版》
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">🌀&nbsp;&nbsp;更多游戏</a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">🚀&nbsp;&nbsp;下载</a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">🗨&nbsp;&nbsp;游戏论坛</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a class="grayTitle" href="javascript:;">商城</a>
                  </li>
                  <li>
                      <a class="grayTitle" href="javascript:;">新闻</a>
                  </li>
                  <li data-trigger="dropdown2" class="testHeight">
                      <div class="left_select_border2"></div>
                      <a id="gameList2" class="grayTitle" href="javascript:;">
                          电子竞技 <img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                      </a>
                      <ul class="dropdown-manu list-unstyled">
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo10.png" alt=""/>
                                  守望先锋电竞官网
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo11.png" alt=""/>
                                  炉石传说黄金系列赛
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo12.png" alt=""/>
                                  HGC黄金风暴联赛
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo13.png" alt=""/>
                                  星际争霸II黄金职业联赛
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  <img src="http://127.0.0.1:3000/img/header/leftSelectSmallLogo14.png" alt=""/>
                                  魔兽争霸III黄金联赛
                              </a>
                          </li>
                          <li>
                              <a class="newsTxt wihteTxt" href="javascript:;">
                                  &nbsp;🏆
                                  &nbsp;申请暴雪电竞赛事授权
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a class="grayTitle" href="javascript:;">BLIZZCON</a>
                  </li>
              </ul>
          </div>


          <!-- 搜索栏-->
          <div class="header_search">
              <ul class="list-unstyled d-flex justify-content-strat mb-0">
                  <li class="search_li0"><a class="grayTitle" href="javascript:;">主页</a></li>
                  <li class="search_li1">
                      <a class="grayTitle header_game_drop" href="javascript:;">
                          游戏&nbsp;
                          <img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                      </a>
                      <div class="header_drop1">
                          <ul class="list-unstyled h-100 d-flex flex-column justify-content-between">
                              <li>暴雪游戏</li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game1.svg" alt=""/>&nbsp;
                                      魔兽世界
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game2.svg" alt=""/>&nbsp;
                                      守望先锋
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game3.svg" alt=""/>&nbsp;
                                      暗黑破坏神III
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game4.svg" alt=""/>&nbsp;
                                      炉石传说
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game5.svg" alt=""/>&nbsp;
                                      风暴英雄
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game6.svg" alt=""/>&nbsp;
                                      星际争霸II
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      <img src="http://127.0.0.1:3000/img/product/product_header/left_select_game7.svg" alt=""/>&nbsp;
                                      星际争霸
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li class="search_li2">
                      <a class="grayTitle header_help_drop" href="javascript:;">
                          服务
                          <img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                      </a>
                      <div class="header_drop2">
                          <ul class="list-unstyled h-100 d-flex flex-column justify-content-between">
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      ✍&nbsp;战网昵称修改服务
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      🎫 暴雪嘉年华门票
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      🌟&nbsp;使用兑换码
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li class="search_input">
                      <div class="search_input_scale">🔍</div>
                      <input type="text" placeholder="搜索商城"/>
                  </li>
                  <li class="heart_border text-center"><a class="grayTitle" href="javascript:;">❤&nbsp;<span>心愿单</span></a></li>
                  <li class="search_li3 pl-1">
                      <a class="grayTitle header_money_drop" href="javascript:;">
                          暴雪游戏点数
                          <img src="http://127.0.0.1:3000/img/header/jiantou2.png" alt=""/>
                      </a>
                      <div class="header_drop3">
                          <ul class="list-unstyled h-100 d-flex flex-column justify-content-between">
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      🎁&nbsp;充值点数
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      💝&nbsp;赠送点数
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      💸&nbsp;兑换点卡
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      📚&nbsp;充值历史
                                  </a>
                              </li>
                              <li>
                                  <a class="grayTitle" href="javascript:;">
                                      💠&nbsp;暴雪游戏点数帮助
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </li>
              </ul>
          </div>

          <!-- 底部锚点，需要在下拉到一定高度出现，返回有动画效果-->
          <a class="toTop" href="javascript:;">
              <div class="product_tag">🔺</div>
          </a>
        </header>

    <router-view @changeShow="setShow" @changeBg="setBg" @changeFooter="setFoot"></router-view>

    <!-- 主组件底部 -->
    <footer id="footer" class="resign_footer" v-show="isBg">
        <h1>
            <img src="http://127.0.0.1:3000/img/login/login_logo.png" alt=""/>
        </h1>
        <ul class="list-unstyled d-flex flex-column justify-content-between text-center">
            <li class="footer_first_li">
                <a class="grayTitle" href="">工作机会&nbsp; &nbsp;</a>|
                <a class="grayTitle" href="javascript:;"> &nbsp;&nbsp;关于&nbsp;&nbsp; </a>|
                <a class="grayTitle" href="javascript:;"> &nbsp;&nbsp;支持&nbsp;&nbsp; </a>
                <span class="shushow">|</span>
                <br class="brshow"/>
                <a class="grayTitle" href="javascript:;"> &nbsp;&nbsp;媒体中心&nbsp;&nbsp;</a>|
                <a class="grayTitle" href="javascript:;"> &nbsp;&nbsp;API&nbsp;&nbsp;</a>|
                <a class="grayTitle" href="javascript:;"> &nbsp;&nbsp;安全中心&nbsp;</a>
            </li>
            <li class="resign_line">
                &copy;2018暴雪娱乐有限公司版权所有。<br/>
                由上海网之易网络科技发展有限公司运营。<br/>
                <a class="grayTitle" href="javascript:;"> &nbsp;隐私&nbsp;</a>|
                <a class="grayTitle" href="javascript:;"> &nbsp;法律条款&nbsp;</a>
            </li>
            <li>
                <a class="grayTxt" href="">沪网文〔2017〕9633-727号 &nbsp;</a>
                <br class="brshow2"/><span class="shushow2">|</span>
                <a class="grayTxt" href="javascript:;"> &nbsp;增值电信业务经营许可证编号：沪B2－20080012&nbsp; </a> <br/>
                互联网违法和不良信息举报电话：0571-28090163 &nbsp;
                <br class="brshow2"/><span class="shushow2">|</span>
                &nbsp;沪公网安备：31011502002167 <br/>
                <a class="grayTitle" href="">&nbsp; 适龄提示：适合13岁及以上使用 家长监护工程&gt;&nbsp; </a>
                <br class="brshow2"/><span class="shushow2">|</span>
                <a class="grayTitle" href="javascript:;">&nbsp; 上海市网络游戏行业自律公约&nbsp; </a><br/>
                上海市张江高科技园区碧波路690号5号楼301-A &nbsp;
                <br class="brshow2"/><span class="shushow2">|</span>
                &nbsp;客服电话：0571-28090163
            </li>
            <li>
                <img src="http://127.0.0.1:3000/img/login/login_footer1.gif" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="http://127.0.0.1:3000/img/login/login_footer2.gif" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="http://127.0.0.1:3000/img/login/login_footer3.gif" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="http://127.0.0.1:3000/img/login/login_footer4.gif" alt=""/>&nbsp;&nbsp;&nbsp;
                <img class="login_footer_smimg" src="http://127.0.0.1:3000/img/login/login_footer5.gif" alt=""/>
            </li>
            <li class="resign_line">健康游戏忠告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当<br/>适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活 </li>
        </ul>
    </footer>
  </div>
</template>

<script>
export default {
  
  created(){
    // console.log(this.$store.state.uname);
    // console.log(2222)
    if(this.$store.state.uid){
        this.myuser=this.$store.state.uid;
        this.islogin=this.$store.state.islogin;
        this.isloginout=this.$store.state.isloginout;
    }
  },
  data(){
    return{
        isShow:true,
        isBg:true,
        myuser:"我的账户",
        islogin:false,
        isloginout:true
    }
  },
  methods:{
    saveState() {
        sessionStorage.setItem('state', JSON.stringify(this.$store.state));
    },
    removeState(){
        // this.$store.state.uid="我的账户";
        // sessionStorage.setItem('state', '我的账户');
        // console.log(this.$store.state.uname);
        this.$store.commit("removeUid");
        window.location.reload();
    },
    //   islogin(){
    //     if(this.$store.state.uname){
    //         this.usershow=this.$store.state.uname;
    //     }
    //   },
      setShow(msg){
          this.isShow=msg;
      },
      setBg(bg){
          var boddy=document.querySelector("body");
          boddy.style.background=bg;
          console.log(122312)
      },
      setFoot(fo){
          this.isBg=fo;
      }
  },
  mounted(){
      window.addEventListener('unload', this.saveState)
  },
  watch:{
    $route(now,old) {
        if(now.path!="/login") {
            if(this.$store.state.uid){
                this.myuser=this.$store.state.uid;
            }
        }
    }
  }
}
</script>

<style>
  @import '../static/css/product_header.css';
  @import '../static/css/product_footer.css'
</style>

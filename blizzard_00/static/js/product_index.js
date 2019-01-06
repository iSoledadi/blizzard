$(function(){
	 //屏幕宽度改变时banner图片src更改
	//  $(document).ready(function(){
	// 			if($(window).width()>751){
	// 					$(".my_banner_img1").attr("src","img/product/product_banner/pBanner1.jpg");
	// 					$(".my_banner_img2").attr("src","img/product/product_banner/pBanner2.jpg");
	// 					$(".my_banner_img3").attr("src","img/product/product_banner/pBanner3.jpg");
	// 			}else{
	// 					$(".my_banner_img1").attr("src","img/product/product_banner/pSmallBanner1.png");
	// 					$(".my_banner_img2").attr("src","img/product/product_banner/pSmallBanner2.jpg");
	// 					$(".my_banner_img3").attr("src","img/product/product_banner/pSmallBanner3.jpg");
	// 			}
	// 	})
	// 	$(window).resize(function(){
	// 			if($(window).width()>751){
	// 					$(".my_banner_img1").attr("src","img/product/product_banner/pBanner1.jpg");
	// 					$(".my_banner_img2").attr("src","img/product/product_banner/pBanner2.jpg");
	// 					$(".my_banner_img3").attr("src","img/product/product_banner/pBanner3.jpg");
	// 			}else{
	// 					$(".my_banner_img1").attr("src","img/product/product_banner/pSmallBanner1.png");
	// 					$(".my_banner_img2").attr("src","img/product/product_banner/pSmallBanner2.jpg");
	// 					$(".my_banner_img3").attr("src","img/product/product_banner/pSmallBanner3.jpg");
	// 			}
	// 		})
				//测试轮播图active时位移
				// if($(".carousel-item").hasClass("active")){
				// 		$(".my_banner_img1").toggleClass("testMove");
				// 		$(".my_banner_img2").toggleClass("testMove");
				// 		$(".my_banner_img3").toggleClass("testMove");
				// }else{
				// 		$(".my_banner_img1").removeClass("testMove");
				// 		$(".my_banner_img2").removeClass("testMove");
				// 		$(".my_banner_img3").removeClass("testMove");
				// }

				// 鼠标hover时箭头变成白色
				// $(".prevButton").mouseenter(function(){
				// 		$(".prevButton img").attr("src","img/index/game/hover-prev3.png");
				// })
				// $(".prevButton").mouseleave(function(){
				// 		$(".prevButton img").attr("src","img/index/game/hover-prev.png");
				// })
				// $(".nextButton").mouseenter(function(){
				// 		$(".nextButton img").attr("src","img/index/game/hover-next3.png");
				// })
				// $(".nextButton").mouseleave(function(){
				// 		$(".nextButton img").attr("src","img/index/game/hover-next.png");
				// })


				//轮播图
				// $(".my_banner").mouseenter(function(){
				// 		$(".prevButton").addClass("darkBg");
				// 		$(".nextButton").addClass("darkBg");
				// })
				// $(".my_banner").mouseleave(function(){
				// 		$(".prevButton").removeClass("darkBg");
				// 		$(".nextButton").removeClass("darkBg");
				// })
				
				 $(function () {
						// 获取手指在轮播图元素上的一个滑动方向（左右）

						// 获取界面上轮播图容器
						var $carousels = $('.carousel');
						var startX,endX;
						// 在滑动的一定范围内，才切换图片
						var offset = 50;
						// 注册滑动事件
						$carousels.on('touchstart',function (e) {
								// 手指触摸开始时记录一下手指所在的坐标x
								startX = e.originalEvent.touches[0].clientX;

						});
						$carousels.on('touchmove',function (e) {
								// 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
								endX = e.originalEvent.touches[0].clientX;
						});
						$carousels.on('touchend',function (e) {
								//console.log(endX);
								//结束触摸一瞬间记录手指最后所在坐标x的位置 endX
								//比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
								var distance = Math.abs(startX - endX);
								if (distance > offset){
										//说明有方向的变化
										//根据获得的方向 判断是上一张还是下一张出现
										$(this).carousel(startX >endX ? 'next':'prev');
								}
						})
				});

				//展示区左右出现
				// $(window).on("scroll",function(e) {
				// 	e.preventDefault();
				// 	if ($(window).scrollTop() > ($(".product_center").offset().top-150)) {
				// 			$(".pengpengDoctor").addClass("pengpengApear");
				// 			$(".product_introduce_caption").addClass("introduceApear");
				// 	}
				// })
				// var obj=document.querySelector(".product_center");
				// var rightobj=document.querySelector(".pengpengDoctor");
				// var leftobj=document.querySelector(".product_introduce_caption");
				// var top = obj.getBoundingClientRect().top //元素顶端到可见区域顶端的距离
				// var se = document.documentElement.clientHeight //浏览器可见区域高度
				// if(top>=0 && top<=se){
				// 	rightobj.classList.add("pengpengApear");
				// 	leftobj.classList.add("introduceApear");
				// }
})
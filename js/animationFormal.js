var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
var i= e.length;
while (i--){
    document.createElement(e[i])
}


// 1.主要方法：documentElement的scrollTop
//2.利用js为动画初始化
//3.利用scrollTop设置每一屏的动画

// 封装两个函数
function addClass(className,element){
	var eleClassName=element.getAttribute('class');
	var reg= new RegExp(className);
	if(!reg.test(eleClassName)){
		eleClassName=eleClassName+" "+className;
		element.setAttribute('class',eleClassName);
	}
	
}
function removeClass(className,element){
	var eleClassName=element.getAttribute('class');
	var className=className;
	var reg= new RegExp(className);
	if(reg.test(eleClassName)){
		eleClassName=eleClassName.replace(className,"");
		element.setAttribute('class',eleClassName);
		console.log(eleClassName);
	}
	
}
//通过每一个元素的className得到该元素
function getElement(ClassName){
	var ClassNmae=document.querySelector(ClassName);//得到每一屏
	return ClassNmae;
}
function getAllElement(ClassName){
	var ClassNmae=document.querySelectorAll(ClassName);//得到每一屏
	return ClassNmae;
}

//每一屏的动画子元素
function aniElement(){
	var aniElement={
		screen1:
		[
			{
				elem:getElement('.screen-1_heading'),
				init:function(){
					this.elem.className="screen-1_heading screen-1_heading--init";
				},
				ani:function(){
					this.elem.className="screen-1_heading screen-1_heading--ani";
				}
			},
			{
				elem:getElement('.screen-1_phone'),
				init:function(){
					this.elem.className="screen-1_phone screen-1_phone--init";
				},
				ani:function(){
					this.elem.className="screen-1_phone screen-1_phone--ani";
				}
			},
			{
				elem:getElement('.screen-1_shadow'),
				init:function(){
					this.elem.className="screen-1_shadow screen-1_shadow--init";
				},
				ani:function(){
					this.elem.className="screen-1_shadow screen-1_shadow--ani";
				}
			}
	    ],
	    screen2:
	    [
		    	{
					elem:getElement('.screen-2_heading'),
					init:function(){
						this.elem.className="screen-2_heading screen-2_heading--init";
					},
					ani:function(){
						this.elem.className="screen-2_heading screen-2_heading--ani";
					}
				},
				{
					elem:getElement('.screen-2_subheading'),
					init:function(){
						this.elem.className="screen-2_subheading screen-2_subheading--init";
					},
					ani:function(){
						this.elem.className="screen-2_subheading screen-2_subheading--ani";
					}
				},
				{
					elem:getElement('.screen-2_phone'),
					init:function(){
						this.elem.className="screen-2_phone screen-2_phone--init";
					},
					ani:function(){
						this.elem.className="screen-2_phone screen-2_phone--ani";
					}
				},
				{
					elem:getElement('.screen-2_point--item-1'),
					init:function(){
						this.elem.className="screen-2_point--item screen-2_point--item-1 screen-2_point--item-1--init";
					},
					ani:function(){
						this.elem.className="screen-2_point--item screen-2_point--item-1 screen-2_point--item-1--ani";
					}
				},
				{
					elem:getElement('.screen-2_point--item-2'),
					init:function(){
						this.elem.className="screen-2_point--item screen-2_point--item-2 screen-2_point--item-2--init";
					},
					ani:function(){
						this.elem.className="screen-2_point--item screen-2_point--item-2 screen-2_point--item-2--ani";
					}
				},
				{
					elem:getElement('.screen-2_point--item-3'),
					init:function(){
						this.elem.className="screen-2_point--item screen-2_point--item-3 screen-2_point--item-3--init";
					},
					ani:function(){
						this.elem.className="screen-2_point--item screen-2_point--item-3 screen-2_point--item-3--ani";
					}
				}
	    ],
	    screen3:
	    [
	    		{
					elem:getElement('.screen-3_heading'),
					init:function(){
						this.elem.className="screen-3_heading screen-3_heading--init";
					},
					ani:function(){
						this.elem.className="screen-3_heading screen-3_heading--ani";
					}
				},
				{
					elem:getElement('.screen-3_subheading'),
					init:function(){
						this.elem.className="screen-3_subheading screen-3_subheading--init";
					},
					ani:function(){
						this.elem.className="screen-3_subheading screen-3_subheading--ani";
					}
				},
				{
					elem:getElement('.screen-3_features'),
					init:function(){
						this.elem.className="screen-3_features screen-3_features--init";
					},
					ani:function(){
						this.elem.className="screen-3_features screen-3_features--ani";
					}
				},
				{
					elem:getElement('.screen-3_phone'),
					init:function(){
						this.elem.className="screen-3_phone screen-3_phone--init";
					},
					ani:function(){
						this.elem.className="screen-3_phone screen-3_phone--ani";
					}
				}
	    ],
	    screen4:
	    [
	    		{
					elem:getElement('.screen-4_heading'),
					init:function(){
						this.elem.className="screen-4_heading screen-4_heading--init";
					},
					ani:function(){
						this.elem.className="screen-4_heading screen-4_heading--ani";
					}
				},
				{
					elem:getElement('.screen-4_subheading'),
					init:function(){
						this.elem.className="screen-4_subheading screen-4_subheading--init";
					},
					ani:function(){
						this.elem.className="screen-4_subheading screen-4_subheading--ani";
					}
				},
				{
					elem:getElement('.screen-4_phone--item-1'),
					init:function(){
						this.elem.className="screen-4_phone--item screen-4_phone--item-1 screen-4_phone--item-1--init";
					},
					ani:function(){
						this.elem.className="screen-4_phone--item screen-4_phone--item-1 screen-4_phone--item-1--ani";
					}
				},
				{
					elem:getElement('.screen-4_phone--item-2'),
					init:function(){
						this.elem.className="screen-4_phone--item screen-4_phone--item-2 screen-4_phone--item-2--init";
					},
					ani:function(){
						this.elem.className="screen-4_phone--item screen-4_phone--item-2 screen-4_phone--item-2--ani";
					}
				},
				{
					elem:getElement('.screen-4_phone--item-3'),
					init:function(){
						this.elem.className="screen-4_phone--item screen-4_phone--item-3 screen-4_phone--item-3--init";
					},
					ani:function(){
						this.elem.className="screen-4_phone--item screen-4_phone--item-3 screen-4_phone--item-3--ani";
					}
				},
				{
					elem:getElement('.screen-4_phone--item-4'),
					init:function(){
						this.elem.className="screen-4_phone--item screen-4_phone--item-4 screen-4_phone--item-4--init";
					},
					ani:function(){
						this.elem.className="screen-4_phone--item screen-4_phone--item-4 screen-4_phone--item-4--ani";
					}
				}
	    ],
	    screen5:
	    [
	    		{
					elem:getElement('.screen-5_heading'),
					init:function(){
						this.elem.className="screen-5_heading screen-5_heading--init";
					},
					ani:function(){
						this.elem.className="screen-5_heading screen-5_heading--ani";
					}
				},
				{
					elem:getElement('.screen-5_subheading'),
					init:function(){
						this.elem.className="screen-5_subheading screen-5_subheading--init";
					},
					ani:function(){
						this.elem.className="screen-5_subheading screen-5_subheading--ani";
					}
				},
				{
					elem:getElement('.screen-5_phone--able'),
					init:function(){
						this.elem.className="screen-5_phone--able screen-5_phone--able--init";
					},
					ani:function(){
						this.elem.className="screen-5_phone--able screen-5_phone--able--ani";
					}
				}
	    ]






	};
	return aniElement;
}
//设置动画初始化--init
function setAnimationInit(screen,aniElement){
	var screen=getElement(screen);//得到第一屏
	var aniElement=aniElement;//得到第一屏所有动画子元素
	
		for(i=0;i<aniElement.length;i++){
			(function(i){
				aniElement[i].init();//所有动画子元素初始化
			})(i);
		}
}

//所有屏进行初始化。传参并且调用函数setAnimationInit
function init(){
	var screen1=aniElement().screen1;//从返回的对象中取得screen1
	setAnimationInit('.screen-1',screen1);
	var screen2=aniElement().screen2;
	setAnimationInit('.screen-2',screen2);//传参
	var screen3=aniElement().screen3;
	setAnimationInit('.screen-3',screen3);//传参
	var screen4=aniElement().screen4;
	setAnimationInit('.screen-4',screen4);//传参
	var screen5=aniElement().screen5;
	setAnimationInit('.screen-5',screen5);
}
//设置动画开始--ani
function setAnimationAni(screen,aniElement){
	var screen=getElement(screen);//得到第一屏
	var aniElement=aniElement;//得到所有动画子元素
		for(i=0;i<aniElement.length;i++){
			(function(i){
				aniElement[i].ani();
			})(i);
		}
}  
//滚动条事件需要监听
//获取scrollTop
function scrollTop(){
	var t=document.documentElement.scrollTop||document.body.scrollTop;
	return t;
}

//通过scrollTop来判断header的字体颜色，如果是小于80，则是黑色，如果大于80，就是白色。在totalHeader中调用
function header_nav_color(color){
	var headerChildren=getElement('.header_nav').children;
  	for(i=0;i<headerChildren.length-1;i++){
	  	if(color=='black'){
	  		removeClass('header_nav--item--white',headerChildren[i]);
	  		addClass('header_nav--item--black',headerChildren[i]);
	  	}
	  	else{
	  		removeClass('header_nav--item--black',headerChildren[i]);
	  		addClass('header_nav--item--white',headerChildren[i]);
	  	}
	  	
	  	// headerChildren[i].style.borderBottom='transparent';
  	}
 
}
//设置header的背景色和字体颜色。加载得时候以及监控滚动事件的时候都要调用。
function totalHeader(){
	var t=scrollTop();//scrollTop值
	var header=getElement('.header');
	//header背景色和文字颜色
	if(t<80){
		header_nav_color('black');//文字颜色黑
		header.className="header";//背景颜色白
	}
	else{
		header_nav_color('write');//文字白色
		// header.className="header header--fixed";//背景色蓝色
		addClass('header--fixed',header)
	}
}
//与顶栏联动，通过top改变每一个item的样式，返回值是header_nav，用于点击事件
function headerConnect(){
	var t=scrollTop();
	var header_nav={
		item1:getElement('.header_nav--item-1'),
		item2:getElement('.header_nav--item-2'),
		item3:getElement('.header_nav--item-3'),
		item4:getElement('.header_nav--item-4'),
		item5:getElement('.header_nav--item-5')
	};

	//去除所有red border getElement只有一个元素
	var navItem=getAllElement('.header_nav--item');
	var asideItem=getAllElement('.outline--item');
		for(i=0;i<navItem.length-1;i++){
			removeClass('header_nav--item--red',navItem[i]);
		}
		for(i=0;i<navItem.length-1;i++){
			removeClass('outline--item-red',asideItem[i]);
		}
		
		if(t<720){
			addClass('header_nav--item--red',navItem[0]);
			addClass('outline--item-red',asideItem[0]);

		}
		else if(t>=720&&t<1520){
			addClass('header_nav--item--red',navItem[1]);
			addClass('outline--item-red',asideItem[1]);

		}
		else if(t>=1520&&t<2320){
			addClass('header_nav--item--red',navItem[2]);
			addClass('outline--item-red',asideItem[2]);

		}
		else if(t>=2320&&t<3120){
			addClass('header_nav--item--red',navItem[3]);
			addClass('outline--item-red',asideItem[3]);
		}
		else if(t>=3120){
			addClass('header_nav--item--red',navItem[4]);
			addClass('outline--item-red',asideItem[4]);
		}
	return header_nav;
}
//监听事件函数
//1.根据目前scrolltop位置，决定item样式--颜色，下划线。headerConnect()
//2.根据目前scrolltop位置，决定header字体颜色。totalHeader()
//3.通过scrolltop，来判断进行动画的时机。
function setAnimation(){
	var t=scrollTop();
	totalHeader();//先判断header字体颜色、背景
	headerConnect();//再决定item样式--颜色，下划线会覆盖
	var screen1=aniElement().screen1;
	var screen2=aniElement().screen2;//通过aniElement()得到动画子元素
	var screen3=aniElement().screen3;
	var screen4=aniElement().screen4;
	var screen5=aniElement().screen5;
	// 侧栏位置初始化
	if(t<500){
		removeClass('outline_ani',getElement('.outline'));
	}
	else{
		addClass('outline_ani',getElement('.outline'));//其实所有的初始化元素都可以写在这里，即使没有滚动，也先执行一次
	}
	//动画联动，到了固定的点，开始动画
	if(t<720){
		setAnimationAni('.screen-1',screen1);//每一屏的动画。
	}
	else if(t>=720&&t<1520) {
		
		setAnimationAni('.screen-2',screen2);//每一屏的动画。
		
	}
	else if(t>=1520&&t<2320) {
		
		setAnimationAni('.screen-3',screen3);

	}
	else if(t>=2320&&t<3120) {
		
		setAnimationAni('.screen-4',screen4);

	}
	else if(t>=3120) {
		
		setAnimationAni('.screen-5',screen5);

	}
	console.log(t);	
	};

//item click事件，切换屏
function itemClick(className){
     var navItem=getAllElement(className);
     for(i=0;i<navItem.length;i++){
     	(function(i){
     		navItem[i].onclick=function(e){
     			e.preventDefault();//非常重要！！
				document.documentElement.scrollTop=i*800;
     		}
     		
     	})(i)
     }
}
// hover,为了让当前元素可以去掉和增进颜色、下划线
function currentItem(){
		var t=scrollTop();
		var header_nav=headerConnect();
		var currentItem;
		if(t<720){
			currentItem=header_nav.item1;
		}
		else if(t>=720&&t<1520){
			currentItem=header_nav.item2;
		}
		else if(t>=1520&&t<2320){
			currentItem=header_nav.item3;
		}
		else if(t>=2320&&t<3120){
			currentItem=header_nav.item4;
		}
		else if(t>=3120){
			currentItem=header_nav.item5;
		}
		return currentItem;
	}
// nav的hover事件(有滑动条)
function hover(){
	var headerChildren=getElement('.header_nav').children;//这里用querySelectorAll函数
	for(i=0;i<headerChildren.length-1;i++){
		(function(i){
			headerChildren[i].onmouseover=function(){
				removeClass('header_nav--item--red',currentItem())
				addClass('header_nav--item--red',headerChildren[i]);
			};
			headerChildren[i].onmouseout=function(){

				removeClass('header_nav--item--red',headerChildren[i]);
				addClass('header_nav--item--red',currentItem())
			};
		})(i);
	}
}
// 侧栏，和headercollect写在了一起。
// function outlineConnect(){
// 	var t=scrollTop();
// 	var aside={
// 		item1:getElement('.outline--item-1'),
// 		item2:getElement('.outline--item-2'),
// 		item3:getElement('.outline--item-3'),
// 		item4:getElement('.outline--item-4'),
// 		item5:getElement('.outline--item-5')
// 	};

// 	//去除所有red border getElement只有一个元素
// 	var asideChildren=getElement('.outline').children;
// 	for(i=0;i<asideChildren.length;i++){
// 		removeClass('outline--item-red',asideChildren[i]);
// 	}
	
// 	if(t<720&&t>=500){
// 		addClass('outline--item-red',aside.item1);
// 	}
// 	else if(t>=720&&t<1520){
// 		addClass('outline--item-red',aside.item2);
// 	}
// 	else if(t>=1520&&t<2320){
// 		addClass('outline--item-red',aside.item3);
// 	}
// 	else if(t>=2320&&t<3120){
// 		addClass('outline--item-red',aside.item4);
// 	}
// 	else if(t>=3120){
// 		addClass('outline--item-red',aside.item5);
// 	}
// }
window.onload=function(){
	init();//动画初始化(动画开始在滚动事件中调用)
	setAnimation();//先调用滚动事件，让页面元素在定位的位置实现该有的效果
	// setTimeout(function(){
	// var screen1=aniElement().screen1;//页面加载时第一屏动画开始
	// setAnimationAni('.screen-1',screen1);
 //   	})
	window.onscroll=setAnimation;//滚动事件
	itemClick('.header_nav--item');//点击事件用乘法就很简单了。
	itemClick('.outline--item');
	hover();	
};


// 1.获取动画元素class名字，调用该函数，点击后动画效果出来，再次点击，动画效果消失。
// 但是，原po是以每一版为基础，点击这一版，所有动画都开始。所以，应该传的参数是每一个版
// 然后每一版的所有动画同时开始。
// 2.遍历，给每个动画元素添加动画样式

function setAnimation(screen,aniElement){
	var screen=getElement(screen);//得到第一屏
	var aniElement=aniElement;//得到所有动画子元素
	screen.addEventListener('click',function(){
		for(i=0;i<aniElement.length;i++){
			(function(i){
				var eleClassName=aniElement[i]['elem'].className;
				
				var reg=/init/g;
				reg.test(eleClassName)?aniElement[i].ani():aniElement[i].init();
				console.log(eleClassName);
			})(i);
		}
	});
}
// 传入class获得元素
function getElement(screenClassName){
	var screenClassNmae=document.querySelector(screenClassName);//得到每一屏
	return screenClassNmae;
}

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
var screen1=aniElement().screen1;//从返回的对象中取得screen1
setAnimation('.screen-1',screen1);//传参
var screen2=aniElement().screen2;
setAnimation('.screen-2',screen2);//传参
var screen3=aniElement().screen3;
setAnimation('.screen-3',screen3);//传参
var screen4=aniElement().screen4;
setAnimation('.screen-4',screen4);//传参
var screen5=aniElement().screen5;
setAnimation('.screen-5',screen5);

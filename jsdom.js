var EventUtil = {
	addHandler:function(element,type,handler){
		//此处为添加绑定事件
		if(element.addEventListener){
			element.addEventListener(type,handler,false)
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler)
		}else{
			element["on"+type] = handler
		}
	},
	removeHandler:function(element,type,handler){
		//解绑事件
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false)
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler)
		}else{
			element["on"+type] = null
		}
	},
	getEvent:function(event){
		//判断是ie浏览器还是主流得浏览器来获取元素得事件
		return event?event:window.event;
	},
	getTarget:function(event){
		//获取目标元素得内容className,id,innerHTML,innerText
		return event.target||window.event.srcElement;
	},
	preventDefault:function(event){
		//阻止默认行为，比如可以主治a标签得跳转
		if(event.preventDefault){
			event.preventDefault();
		}else{
			window.event.returnValue = false
		}
	},
	stopPropagation:function(event){
		//阻止继续冒泡
		if(event.stopPropagation){
			event.stopPropagation()
		}else{
			window.event.cancleBubble = true
		}
	}
}
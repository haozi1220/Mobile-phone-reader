/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-18 09:47:39
 * @version $Id$
 */

//公共一些方法
//通过ID获取元素
function id(obj){
	return document.getElementById(obj);
}
function getClass(obj){
	return document.getElementsByClassName(obj);
}
function getTag(obj1,tagName){
	if( obj1 ){
		return obj1.getElementsByTagName(tagName);
	}else{
		return document.getElementsByTagName(tagName);
	}
}
//绑定事件方法
function bind(obj, ev, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
//获取视口的宽和高
function view(){
	return {
		w:document.documentElement.clientWidth,
		h:document.documentElement.clientHeight
	}
}
//添加class方法
function addClass( obj,sClass ){
	var aClass = obj.className.split( ' ' );
	if( !obj.className ){
		obj.className = sClass;
		return;
	}
	for( var i = 0;i < aClass.length;i++ ){
		if( aClass[i] === sClass ) return;
	}
	obj.className += ' '+sClass;
}
//删除class
function removeClass( obj,sClass ){
	var aClass = obj.className.split(' ');
	if( !obj.className ) return;
	for( var i = 0;i < aClass.length;i++ ){
		if( aClass[i] === sClass ){
			aClass.splice(i,1);
			obj.className = aClass.join(' ');
			break;
		}
	}
}
//操作历史记录
/*var historyUtils = {
	add:function (url){
		var historyArray = historyUtils.getLocal();
		if( !historyArray ){
			historyArray = [];
		}
		var currentPage = historyArray.pop();
		if( currentPage && currentPage==url ){
			//do nothing
		}else if( currentPage ){
			historyArray.push(currentPage);//历史里面没有传入的URL，在加回去
		};
		historyArray.push(url);
		historyUtils.saveLocal(historyArray);
	},
	back:function(){
		var historyArray = historyUtils.getLocal();
		var currentPage = historyArray.pop();//去掉当前页面,pop取最后
		var history = historyArray.pop();
		if( !historyUtils ){//没有历史页面
			historyUtils.add( currentPage );//将当前页面加入回数组中
			return;
		}
		historyUtils.saveLocal(historyArray);
		window.location.href = history;
	},
	getLocal:function(){
		var result = window.sessionStorage.getItem(historyUtils.key);
		if( !result ){return null;}
		return JSON.parse(result);
	},
	saveLocal:function(data){
		window.sessionStorage.setItem(historyUtils.key,JSON.stringify(data));
	},
	int:function(){
		historyUtils.saveLocal([]);
	},
	key:"_history_"
}
historyUtils.add(window.location.href);*/
/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-02-19 10:51:14
 * @version $Id$
 */
	/*获取元素区域*/
	//加载页
function fnLoad(){
	var firstPage = id("firPage");
	var loadSol = getClass("loadSol")
	var aLi = getTag(loadSol[0],"li");
	var prev = 0;
	var num = 0;
	var oTimer = null;
	var iTime = new Date().getTime();	//记录时间
	var oLoading = true;		//加载完成之后设为true
	var bTime = false;				//记录时间间隔
	var oTimer2 = null;
	bind(firstPage,"webkitTransitionEnd",end);
	bind(firstPage,"transitionEnd",end);
	/*功能实现区域*/
	//家在效果
	oTimer = setInterval(function(){
		num++;
		if( num > aLi.length-1 ) num = 0;
		scale(num);
	},600);
	oTimer2 = setInterval(function(){
		//通过一定的时间间隔来模拟判断加载完成效果
		if( new Date().getTime() - iTime > 500 ){
			bTime = true;
		}
		if( bTime&&oLoading ){
			clearInterval(oTimer);
			clearInterval(oTimer2);
			firstPage.style.opacity = 0;
			showLogin();
		}
	},1000);
	/*功能函数区域*/
	//加载效果函数
	function scale(n){
		aLi[prev].className = '';
		addClass(aLi[n],"active");
		prev = n;
	}
	function end(){
		removeClass(firstPage,"pageShow");
	}
};
/*执行注册登录页*/
function showLogin() {
	var secondPage = id("secPage");
	addClass(secondPage,"pageShow");
	var logBtn = id("login");
	var regBtn = id("register");

	//给登录、注册按钮绑定点击事件
	bind(logBtn,"touchstart",logStart);
	bind(regBtn,"touchstart",regStart);
	function logStart(){
		addClass(logBtn,"active1");
		removeClass(regBtn,"active1");
		showLogPage();
	}
	function regStart(){
		addClass(regBtn,"active1");
		removeClass(logBtn,"active1");
		showRegPage();
	}
}
/*执行登录页*/
function showLogPage(){
	var logPage = id("loginPage");
	var logHeader = getClass("loginHeader")[0];
	var register = getClass("register")[0];
	var closeLog = getTag(logHeader,"span")[0];
	var cssStyle = window.getComputedStyle(logPage);
	var prevLeft = cssStyle.left;		//记录出现前的left值
	var prevIndex = cssStyle.zIndex;	//记录出现前的zIndex值
	//点击登录按钮后显示登录页
	addClass(logPage,"pageShow");
	logPage.style.left = 0;
	logPage.style.zIndex = 10;

	//点击关闭按钮
	bind(closeLog,"touchstart",close);
	function close(){
		logPage.style.left = prevLeft;
		logPage.style.zIndex = prevIndex;
		removeClass(logPage,"pageShow");
	}
	//点击注册按钮
	bind(register,"touchstart",showRegPage);
};
/*执行注册页*/
function showRegPage(){
	var regPage = id("regPage");
	var btnWrap = getClass("btnWrap1")[0];
	var backBtn = getTag(btnWrap,"span")[0];
	var cssStyle = window.getComputedStyle(regPage);
	var prevLeft = cssStyle.left;
	console.log(prevLeft)
	var prevIndex = cssStyle.zIndex;
	//显示注册页
	addClass(regPage,"pageShow");
	regPage.style.left = 0;
	regPage.style.zIndex = 10;
	//点击返回按钮
	bind(backBtn,"touchstart",back);
	function back(){
		regPage.style.left = prevLeft;
		regPage.style.zIndex = prevIndex;
		removeClass(regPage,"pageShow");
	}
}
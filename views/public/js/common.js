




//PHPSESSID用来获取cookie传过来的值，并且域名
if(!$.cookie('PHPSESSID') && location.pathname !='/login'){
	// 登录页面需要判断有无sessinID
	window.location.href='/login'
}
if(location.pathname !='/login' && location.pathname != '/dashboard/login' && location.pathname != '/views/dashboard/login'){
	var htmlStr = template('tpl_aside',JSON.parse($.cookie('userlnfo')));
	$('.aside .profile').html(htmlStr);
}



// if(!$.cookie('PHPSESSID') && location.pathname !='/login'){
// 	//用$.cookie('PHPSESSID')来获取当前域名 下面有没有服务器设置过来的sessionID，如果有的话，就会获取到，如果没有获取的就是空
// 	// 登录页面不需要判断有无sessinID
// 	window.location.href='/login';
// }

// 	// 因为每个页面都会引入aside文件，而且也会引入common.js公共的js文件，因此在这里写js代码
// 	// 将登录页面排除掉，因为登录页面没有头像和用户名
// if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
// 	// 除主页面之外，其它的页面都需要渲染头像和用户名
// 	var htmlStr=template('tpl_aside',JSON.parse($.cookie('userlnfo')));
// 	$('.aside .profile').html(htmlStr);
// }
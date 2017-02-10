/**功能点1：页面加载完后，异步请求页头和页尾**/
$(function(){
	$('#header').load('data/header.php');
	$('#footer').load('data/footer.php');
});

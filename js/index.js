/**
 * Created by Administrator on 2016/12/24.
 */
/*****1:广告轮播*****/
/*广告图片数组*/
var imgs=[
  {"i":0,"img":"imgs/slide1.jpg"},
  {"i":1,"img":"imgs/slide2.jpg"},
  {"i":2,"img":"imgs/slide3.jpg"},
  {"i":3,"img":"imgs/slide4.jpg"},
  {"i":4,"img":"imgs/slide5.jpg"}
];
var adv={
  LIWIDTH:0,
  $ulImgs:null,
  INTERVAL:2000,
  WAIT:3000,
  timer:null,
  init(){
    this.LIWIDTH=parseFloat($('.adv_box').css('width'));
    this.$ulImgs=$('#imgs');
    this.updateView();
    $("#index-txt").on('mouseover','li',(e)=>{
      var target=$('#index-txt>li').index(e.target);
      var old=imgs[0].i;
      this.move(target-old);
    });
    this.autoMove();
  },
  autoMove(){
    this.timer=setTimeout(
      ()=>this.move(1),this.WAIT
    );
  },
  movePrev(n){
    n*=-1;
    imgs=imgs.splice(-n,n).concat(imgs);
    this.updateView();
    this.$ulImgs.css("left",parseFloat(this.$ulImgs.css("left"))-n*this.LIWIDTH);
  },
  move(n){
    clearTimeout(this.timer);
    if(n<0){
      this.movePrev(n);
      this.$ulImgs.stop(true).animate(
        {left:0},
        this.INTERVAL,
        ()=>this.autoMove()
      );
    }else{
      this.$ulImgs.stop(true).animate(
        {left:-n*this.LIWIDTH},
        this.INTERVAL,
        ()=>this.moveCallback(n)
      );
    }
  },
  moveCallback(n){
    imgs=imgs.concat(imgs.splice(0,n));
    this.updateView();
    this.$ulImgs.css('left',0);
    this.autoMove();
  },
  updateView(){
    for(var i=0,lis="",idxs="";i<imgs.length;i++){
        lis+=`<li><img src="${imgs[i].img}"/></li>`;
        
    }
	idxs+=` <li>群星后裔争荣耀王者</li>
                <li>【KPL】预选赛直播中</li>
                <li>嘴强王者12期</li>
                <li>人人有奖一起分享</li>
                <li>戚薇夫妇撒狗粮</li>
            `;
    this.$ulImgs.html(lis).css("width",imgs.length*this.LIWIDTH);
    $("#index-txt").html(idxs).children(`li:eq(${imgs[0].i})`).addClass("hover");
  },
};
adv.init();


/**为登录按钮绑定事件监听，实现异步的用户登录**/
var loginUname=null;
var loginUid=null;
$('#qq-login').click(function(){
	var data=$('#qq-login-form').serialize();
	$.ajax({
		type:'POST',
		url:'data/qq_user_login.php',
		data:data,
		success:function(result){
			if(result.code!==1){
				$('p.alert').html(result.msg);
				return;
			}
			$('.modal').hide();
			loginUname = result.uname;
			loginUid = result.uid; 
			$('.go_login').children('a').html(loginUname);
		},
		error:function(){
			alert('响应完成但有问题');
		}
	});
});


$('#weixin-login').click(function(){
	var data=$('#weixin-login-form').serialize();
	$.ajax({
		type:'POST',
		url:'data/weixin_user_login.php',
		data:data,
		success:function(result){
			if(result.code!==1){
				$('p.alert').html(result.msg);
				return;
			}
			$('.modal').hide();
			loginUname = result.uname;
			loginUid = result.uid;
			$('.go_login').children('a').html(loginUname);
		},
		error:function(){
			alert('响应完成但有问题');
		}
	});
});



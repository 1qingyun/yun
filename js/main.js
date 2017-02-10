
/***登录框***/
$('#login').on('click','a',function(){
    $('#modal').css('display','block');
});
$('.close').click(function(){
	$('#modal').css('display','none');
});

/***qq登录框***/
$('.qq_login').click(function(){
	$('#qq-modal').css('display','block');
	$('#modal').css('display','none');
});
/**表单验证***/
/*qq用户名验证***/
qq_uname.onblur=function(){
	if(this.validity.valueMissing){
		var msg="用户名不能为空";
		this.nextElementSibling.innerHTML=msg;
		this.nextElementSibling.className='help-block danger';
		this.setCustomValidity(msg);
	}else{
      this.nextElementSibling.innerHTML='用户名正确';
	  this.nextElementSibling.className=' help-block success';
      this.setCustomValidity('');
    }
	};

/*密码验证***/
qq_upwd.onblur=function(){
    if(this.validity.valueMissing){
      var msg='密码不能为空';
      this.nextElementSibling.innerHTML=msg;
      this.nextElementSibling.className='help-block danger';
      this.setCustomValidity(msg);
    }else if(this.validity.tooShort){
      var msg="长度短于6位";
      this.nextElementSibling.innerHTML=msg;
      this.nextElementSibling.className="help-block danger";
      this.setCustomValidity(msg);
    }else if(this.validity.tooLong){
      var msg="长度大于12位";
      this.nextElementSibling.innerHTML=msg;
      this.nextElementSibling.className="help-block danger";
      this.setCustomValidity(msg);
    }else{
      this.nextElementSibling.innerHTML='密码正确';
      this.nextElementSibling.className=' help-block success';
      this.setCustomValidity('');
    }
};

/***微信登录框***/
$('.weixin_login').click(function(){
	$('#weixin-modal').css('display','block');
	$('#modal').css('display','none');
});
/*微信用户名验证***/
weixin_uname.onblur=function(){
	if(this.validity.valueMissing){
		var msg="用户名不能为空";
		this.nextElementSibling.innerHTML=msg;
		this.nextElementSibling.className='help-block danger';
		this.setCustomValidity(msg);
	}else{
      this.nextElementSibling.innerHTML='用户名正确';
	  this.nextElementSibling.className=' help-block success';
      this.setCustomValidity('');
    }
};

/*密码验证***/
weixin_upwd.onblur=function(){
    if(this.validity.valueMissing){
      var msg='密码不能为空';
      this.nextElementSibling.innerHTML=msg;
      this.nextElementSibling.className='help-block danger';
      this.setCustomValidity(msg);
    }else if(this.validity.tooShort){
      var msg="长度短于6位";
      this.nextElementSibling.innerHTML=msg;
      this.nextElementSibling.className="help-block danger";
      this.setCustomValidity(msg);
    }else if(this.validity.tooLong){
      var msg="长度大于12位";
      this.nextElementSibling.innerHTML=msg;
      this.nextElementSibling.className="help-block danger";
      this.setCustomValidity(msg);
    }else{
      this.nextElementSibling.innerHTML='密码正确';
      this.nextElementSibling.className=' help-block success';
      this.setCustomValidity('');
    }
};

/**导航中间的图片**/
$('.pic_middle').mouseenter(function(){
	$('.middle_down').css('display','block');
});
$('.pic_middle').mouseleave(function(){
	$('.middle_down').css('display','none');
});

/**下拉框**/
$('.nav_title').mouseenter(function(){
	$('.dropdown_box').css('display','block');
	$('.dropdown_box').mouseenter(function(){
		$('.dropdown_box').css('display','block');
	});
	$('.dropdown_box').mouseleave(function(){
		$('.dropdown_box').css('display','none');
	})
});
$('.nav_title').mouseleave(function(){
	$('.dropdown_box').css('display','none');
});

//下载游戏弹出框
$('.download').click(function () {
	$('#down-game').css('display','block');
});
$('.down_close').click(function(){
	$('#down-game').css('display','none');
});


// 周免英雄
$(function(){
	var count=0;
	$(".free-li").each(function(){
		$(this).hover(function(){
			var beforeImg = $('.free-li a img').eq(count);
			var imgId = beforeImg.attr('data-id');
			var afterSrc = beforeImg.attr('src','imgs/'+imgId+'.jpg');
			beforeImg.css('width',69);
			var thisImg = $(this).find('img');
			var thisImgId = thisImg.attr('data-id');
			var thisSrc = thisImg.attr('src','imgs/'+thisImgId+'-freehover'+'.png');
			thisImg.css('width',224);
			count = $(this).index();
		});
	});
});

//视频列表及内容切换
$(function(){
	var count=0;
	$('.video_hd li').each(function(){
		$(this).click(function(e){
			e.preventDefault();
			$('.video_hd li a').eq(count).removeClass('current');
			$('.video_bd').eq(count).addClass('video_hidden');
			count=$(this).index();
			$('.video_hd li a').eq(count).addClass('current');
			$(".video_bd").eq(count).removeClass("video_hidden");
		});
	});
});


/****新闻切换*****/
$(function(){
	var count=0;
	$('#news-details-box li').each(function(){
		$(this).click(function(e){
			e.preventDefault();
			$('#news-details-box li a').eq(count).removeClass('current');
			$('.news_kpl').eq(count).addClass('video_hidden');
			count=$(this).index();
			$('#news-details-box li a').eq(count).addClass('current');
			$('.news_kpl').eq(count).removeClass('video_hidden');
		});
	});
});
/***进入王者学院的新闻切换*****/
$(function(){
	var count=0;
	$('#news-right-box li').each(function(){
		$(this).click(function(e){
			e.preventDefault();
			$('#news-right-box li a').eq(count).removeClass('current');
			$('.news-list-block').eq(count).addClass('video_hidden');
			count=$(this).index();
			$('#news-right-box li a').eq(count).addClass('current');
			$('.news-list-block').eq(count).removeClass('video_hidden');
		});
	});	
});

/***赛事中心主体切换*****/
$(function(){
	var count=0;
	$('.game_hd>li').each(function(){
		$(this).click(function(e){
			e.preventDefault();
			$('.game_hd>li>a').eq(count).removeClass('current');
			$('.banner_box').eq(count).addClass('video_hidden');
			count=$(this).index();
			
			$('.game_hd>li>a').eq(count).addClass('current');
			$('.banner_box').eq(count).removeClass('video_hidden');

		});
	});	
	
});


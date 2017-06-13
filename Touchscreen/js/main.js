$(function(){
	   // 长按  
	$.fn.longPress = function(fn) {  
	    var timeout = undefined;  
	    var $this = this;  
	    $($this).each(function(i){  
	        $this[i].addEventListener('touchstart', function(event) {  
	          timeout = setTimeout(function(e){  
	              $('.tc').show();
	              $($this).eq(i).addClass("longPress")
	            }, 800);  //长按时间超过800ms，则执行传入的方法  
	            }, false);  
	        $this[i].addEventListener('touchend', function(event) {  
	            clearTimeout(timeout);  //长按时间少于800ms，不会执行传入的方法  
	        }, false);  
	    }) 
	}  
	  
	$('section dl').longPress(function(e){
		
	});  
	$('.tc li a.confirm').on('touchend',function(){  
	    $('section dl.longPress').remove(); 
	    $(".tc").hide()
	    //$('.deletefont').remove();  
		});
		$('.tc li a.cancel').on('touchend',function(){
			$(".tc").hide()
	});
	$("#submit").click(function(){
		getHtml.loginCheck()
	})
})


var getHtml = {
					newsClass : function(){
						var url='http://192.168.10.249:8080/touchScreen/newsClass';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
								  	var content = $("#content");  
						            var strHtml = "";
						            content.empty();
								  		$.each(msg.data,function(infoIndex,info){ 
			            			strHtml += "<h1>"+info["classid"]+""+info["classname"]+"</h1>"; 
		                		})  
		            			content.html(strHtml);
						  }
						});
					},
					newsList : function(){
						var url='http://192.168.10.249:8080/touchScreen/newsList';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
								  	var content = $("#content");  
						            var strHtml = "";
						            content.empty();
								  		$.each(msg.data,function(infoIndex,info){ 
			            			strHtml += "<h1>"+info["classid"]+""+info["classname"]+"</h1>"; 
		                		})  
		            			content.html(strHtml);
						  }
						});
					},
					newsDetail : function(){
						var url='http://192.168.10.249:8080/touchScreen/newsDetail?id=""';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
								  	var content = $("#content");  
						            var strHtml = "";
						            content.empty();
								  		$.each(msg.data,function(infoIndex,info){ 
			            			strHtml += "<h1>"+info["classid"]+""+info["classname"]+"</h1>"; 
		                		})  
		            			content.html(strHtml);
						  }
						});
					},
					paperList : function(tag){
						var url='http://192.168.10.249:8080/touchScreen/paperList';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
								  	$.each(msg.data,function(infoIndex,info){ 
			            				strHtml += "<a href='paperwz.html?id="+info["seqid"]+"'><img src='images/mobile/pic-8.png' />"+info["title"]+"</a>";
		                			})  
		            			$(tag).html(strHtml);
						  }
						});
					},
					paperlayList : function(){
						var paraString = window.location.href;
				    	var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
						var url='http://192.168.10.249:8080/touchScreen/paperlayList';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:"id="+id,
							    success:function(msg){
							    	console.log(msg)
								  	var content = $("#content");  
						            var strHtml = "";
						            content.empty();
								  		$.each(msg.data,function(infoIndex,info){ 
			            			strHtml += "<h1>"+info["title"]+"</h1>"; 
		                		})  
		            			content.html(strHtml);
						  }
						});
					},
					bookList : function(tag){
						var url='http://192.168.10.249:8080/touchScreen/bookList';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
								  	var content = $("#content");  
						            var strHtml = "";
								  	$.each(msg.data,function(infoIndex,info){ 
			            			strHtml += "<dl onclick='window.location.href=\"book.html?id="+info.seqid+"\"'><dt class='fl'><img src='images/mobile/pic-2.png' /></dt><dd class='bookname'>"+info.title+"</dd><dd><label>作&emsp;&emsp;者：</label>"+info.auther+"</dd><dd><label>出&nbsp;&nbsp;版&nbsp;&nbsp;社：</label>"+info.press+"</dd><dd><label>出版时间：</label>"+info.createdtime+"</dd></dl>";
		                		})  
		            			$(tag).html(strHtml);
						  }
						});
					},
					bookDetail : function(tag){
						var paraString = window.location.href;
				    	var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
						var url='http://192.168.10.249:8080/touchScreen/bookDetail';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:"id="+id,
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
								  	var info = msg.data
			            				strHtml += "<div class='main'><dl><dt><img src='images/mobile/pic-2.png' /></dt><dd>"+info.title+"</dd><dd><i class='active'></i><i></i><i></i><i></i><i></i></dd><dd>作&emsp;者：<span>"+info.author+"</span></dd><dd>出版社：<span>"+info.press+"</span></dd><dd>34.7万</dd></dl><ol><li>内容简介</li><li>"+info.abstracts+"</li></ol></div><p class='addsc'><a>下载</a></p>";
		            				$(tag).html(strHtml);
						  }
						});
					},
					favorite : function(tag){
						var url='http://192.168.10.249:8080/touchScreen/favorite';
						//alert($.session.get('data'))
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:'userid='+$.session.get('data'),
							    success:function(msg){
							    	var strHtmlPaper = "";
							    	var strHtmlNews = "";
							    	var strHtmlBook = "";
							    	console.log(msg);
							    	console.log(msg.data.paper);
							    	$.each(msg.data.paper,function(infoIndex,info){
											strHtmlPaper +=	"<div class='collection-list' onclick='window.location.href=\"paper.html?id="+info.seqid+"\"'><div class='main'><dl><dt><a><img src='images/mobile/ico-1.png' /></a><span>"+info.author+"</span><i>"+info.createdtime+"</i></dt><dd><img src=images/mobile/pic-1.png' class='fl' /><ol><li>"+info.title+"</li><li></li></ol></dd></dl></div></div>";
							    	})
							    	$.each(msg.data.news,function(infoIndex,info){
											strHtmlNews +=	"<div class='collection-list' onclick='window.location.href=\"news.html?id="+info.seqid+"\"'><div class='main'><dl><dt><a><img src='images/mobile/ico-1.png' /></a><span>"+info.author+"</span><i>"+info.createdtime+"</i></dt><dd><img src=images/mobile/pic-1.png' class='fl' /><ol><li>"+info.abstracts+"</li><li>"+info.title+"</li></ol></dd></dl></div></div>";
							    	})
							    	$.each(msg.data.book,function(infoIndex,info){
											strHtmlBook +=	"<div class='collection-list' onclick='window.location.href=\"book.html?id="+info.seqid+"\"'><div class='main'><dl><dt><a><img src='images/mobile/ico-1.png' /></a><span>"+info.author+"</span><i>"+info.createdtime+"</i></dt><dd><img src=images/mobile/pic-1.png' class='fl' /><ol><li>"+info.title+"</li><li>"+info.press+"</li></ol></dd></dl></div></div>";
							    	})
							    	
			            			$(tag).append(strHtmlPaper+strHtmlNews+strHtmlBook)
		                		}	
							})
						},
						loginCheck : function(){
							if($("#username").val() == "" || $("#username").val() == ""){
								alert("账号密码不能为空")
							}
							var url='http://192.168.10.249:8080/touchScreen/login';
							$.ajax({
								type:"post",
								url:url,
								data:"username="+escape($("#username").val())+"&passwd="+escape($("#password").val()), 
								success:function(data,msg){
									var info = data.data
									alert(info)
										if(msg == "success"){
											$.session.set('data', info)
											alert("登录成功")
											
											window.location.href='user.html?userid='+info+''
										}else{
											alert("登录失败")
										}
								}
							});
						},
						userHtml: function(m){
							var paraString = window.location.href;
				    		var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
							var url='http://192.168.10.249:8080/touchScreen/login';
							$.ajax({
								type:"post",
								url:url,
								data:"userid="+id,
								success:function(msg){
									var strHtml = ""
									var info = msg.data
									strHtml += "<dl><dt><a><img src="+info.photo+" /></a>"+info.nickname+"</dt><dd><a href='collection.html'><img src='images/mobile/ico-3.png' />我的收藏<img src='images/mobile/ico-5.png' /></a></dd><dd><a href='booklist.html'><img src='images/mobile/ico-4.png' />我的图书<img src='images/mobile/ico-5.png' /></a></dd><dd><a id='loginout' style='cursor:pointer' onclick='getHtml.loginOut()'>登出</a></dd></dl>";
									$(m).html(strHtml)
								}
								
							});
						},
						loginOut : function(){
							$.session.clear();
							$.cookie("username", '', { expires: -1 });
							$.cookie("password", '', { expires: -1 });
							window.location.href="index.html";
							alert(1)
						}
					
					
				}
				
				
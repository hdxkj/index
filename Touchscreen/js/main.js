$(function(){
	$("#submit").click(function(){
		getHtml.loginCheck()
	});
	thingsFun.bottomNav();
})
var baseUrl = 'http://192.168.10.249:8080/touchScreen/'
var bookID = ""
var thingsFun = {
			loginOut : function(){
				$.session.clear();
				//$.cookie("name",null,{path:"/"}); 
				//$.cookie("passwd",null,{path:"/"});
                var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
                if(keys) {  
                    for(var i = keys.length; i--;)  
                        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
                }  
				
				window.location.href="index.html";
			},
			bottomNav : function(){
				$(".addsc a").eq(0).attr("href","index.html")
				$(".addsc a").eq(1).attr("href","user.html?userid="+$.cookie('id')+"")
			},
			searchId : function(){
				function GetQueryString(name)
				{
				     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
				     var r = window.location.search.substr(1).match(reg);
				     if(r!=null)return  unescape(r[2]); return null;
				}
				//var paperid = GetQueryString("paperid");
				var id = GetQueryString("id");
				
				/*var url = baseUrl +"search";
				var bookname = "鬼吹灯"
				$.ajax({
				    type: 'POST',
				    url: url,
				    data:"bname="+bookname,
				    dataType: 'json',
				    success:function(msg){
				    	bookID = msg.data
				    	return bookID
			  		}
				});*/
				
			},
			ifLogin : function(){
				var ifTrue =  $.cookie('id')
				if(ifTrue == undefined){
					alert("你尚未登录，请登陆后操作")
					function GetQueryString(name)
				{
				     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
				     var r = window.location.search.substr(1).match(reg);
				     if(r!=null)return  unescape(r[2]); return null;
				}
				//var paperid = GetQueryString("paperid");
				var id = GetQueryString("id");
					$.session.set('bookId', id)
					bookID = $.session.get('bookId')
					window.location.href = 'index.html'
					return bookID
				}else{
					getHtml.collectConfirm()
				}
			}
}

var getHtml = {
					newsClass : function(){
						var url = baseUrl+'newsClass';
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
					newsList : function(tag){
						var url = baseUrl+'newsAll';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:"id="+1,
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
								  		$.each(msg.data,function(infoIndex,info){ 
			            			strHtml +=	"<div class='collection-list' onclick='window.location.href=\"news.html?id="+info.seqid+"\"'><div class='main'><dl style='min-height:auto'><dt><span>"+info.sources+"</span><i>"+info.pubdate+"</i></dt><dd><ol><li>"+info.title+"</li></ol></dd></dl></div></div>"
		                		})  
		            			$(tag).html(strHtml);
						  }
						});
					},
					mynewsDetail : function(tag){
						var paraString = window.location.href;
				    	var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
						var url = baseUrl+'newsDetail';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    data:"id="+id,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
						            var info = msg.data
			            			strHtml += "<div class='main'><dl><dt style='width:100%;line-height:24px'>"+info.title+"</dt><dd>"+info.sources+"<span>"+info.createdtime+"</span></dd><dd class='text'><p>"+info.fulltxt+"</p></dd></dl></div><p class='addsc'><a onclick='getHtml.collectCancelPaper()'><input type='hidden' value='"+info.seqid+"'>取消收藏</a></p>"; 
		            			$(tag).html(strHtml);
						  }
						});
					},
					newsDetail : function(tag){
						var paraString = window.location.href;
				    	var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
						var url = baseUrl+'newsDetail';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    data:"id="+id,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
						            var info = msg.data
			            			strHtml += "<div class='main'><dl><dt style='width:100%;line-height:24px'>"+info.title+"</dt><dd>"+info.sources+"<span>"+info.createdtime+"</span></dd><dd class='text'><p>"+info.fulltxt+"</p></dd></dl></div>"; 
		            			$(tag).html(strHtml);
						  }
						});
					},
					mynewsDetail : function(tag){
						var paraString = window.location.href;
				    	var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
						var url = baseUrl+'newsDetail';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    data:"id="+id,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
						            var info = msg.data
			            			strHtml += "<div class='main'><dl><dt style='width:100%;line-height:24px'>"+info.title+"</dt><dd>"+info.sources+"<span>"+info.createdtime+"</span></dd><dd class='text'><p>"+info.fulltxt+"</p></dd></dl></div><p class='addsc'><a onclick='getHtml.collectCancelNews()'><input type='hidden' value='"+info.seqid+"'>取消收藏</a></p>"; 
		            			$(tag).html(strHtml);
						  }
						});
					},
					paperList : function(tag){
						var url = baseUrl+'paperList';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
								  	$.each(msg.data,function(infoIndex,info){ 
			            				strHtml += "<a href='paper.html?id="+info["seqid"]+"'><img src='images/mobile/pic-8.png' />"+info["title"]+"</a>";
		                			})  
		            			$(tag).html(strHtml);
						  }
						});
					},
					paperlayList : function(tag){
						var paraString = window.location.href;
				    	var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
						var url = baseUrl+'paperlayList';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:"id="+id,
							    success:function(msg){
							    	console.log(msg)
						            $(".paper .title span").html(msg.title)
						            var strHtml = "";
								  	$.each(msg.data,function(infoIndex,info){ 
			            			strHtml += "<ol><li onclick='window.location.href=\"paperwz.html?paperid="+info.paperid+"&layid="+info.seqid+"\"'><img src='images/mobile/pic-7.png'  /></li><li style='display:inline-block;width:82px;height:16px;overflow:hidden;'><b>"+info.seqid+"</b>版：<span>"+info.title+"</span></li></ol>"
			            			
		                		})  
		            			$(tag).html(strHtml);
						  }
						});
					},
					paperContent  : function(tag){
						var url = baseUrl+'paperContent';
						function GetQueryString(name)
						{
						     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
						     var r = window.location.search.substr(1).match(reg);
						     if(r!=null)return  unescape(r[2]); return null;
						}
						var paperid = GetQueryString("paperid");
						var layid = GetQueryString("layid");
						
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:"paperid="+paperid+"&layid="+layid,
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
								  	$.each(msg.data,function(infoIndex,info){ 
			            			strHtml += "<article onclick='window.location.href=\"paperDetail.html?seqid="+info.seqid+"\"'><div class='main'><ul><li>"+info.title+"</li><li>"+info.author+"</li></dl></div></article>";
		                		})  
		            			$(tag).html(strHtml);
						  }
						});
					},
					paperDetail  : function(tag){
						var url = baseUrl+'paperContentText';
						function GetQueryString(name)
						{
						     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
						     var r = window.location.search.substr(1).match(reg);
						     if(r!=null)return  unescape(r[2]); return null;
						}
						var seqid = GetQueryString("seqid");
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:"seqid="+seqid,
							    success:function(msg){
							    	console.log(msg.data)
							    	var info = msg.data
						            var strHtml = "";
			            			strHtml += "<article class='wzitem'><div class='main'><ul><li>"+info.title+"</li><li><p>"+info.fulltxt+"</p></li><li>"+info.author+"</li></dl></div></article>";
		            			$(tag).html(strHtml);
						  }
						});
					},
					bookList : function(tag){
						var url = baseUrl+'bookList';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    success:function(msg){
							    	//console.log(msg)
						            var strHtml = "";
								  	$.each(msg.data,function(infoIndex,info){ 
			            			strHtml += "<dl onclick='window.location.href=\"book.html?id="+info.seqid+"\"'><dt class='fl'><img src='"+baseUrl+"source/"+info.thumbnail+"' /></dt><dd class='bookname'>"+info.title+"</dd><dd><label>作&emsp;&emsp;者：</label>"+info.auther+"</dd><dd><label>出&nbsp;&nbsp;版&nbsp;&nbsp;社：</label>"+info.press+"</dd><dd><label>出版时间：</label>"+info.createdtime+"</dd></dl>";
		                		})  
		            			$(tag).html(strHtml);
						  }
						});
					},
					bookDetail : function(tag){
						var paraString = window.location.href;
				    	var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
						var url = baseUrl+'bookDetail';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:"id="+id,
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
								  	var info = msg.data
								  	//alert(info.pdfpath)
			            			strHtml += "<div class='main'><dl><dt><img src='"+baseUrl+"source/"+info.thumbnail+"' /></dt><dd>"+info.title+"</dd><dd><i class='active'></i><i></i><i></i><i></i><i></i></dd><dd>作&emsp;者：<span>"+info.author+"</span></dd><dd>出版社：<span>"+info.press+"</span></dd><dd>34.7万</dd></dl><ol><li>内容简介</li><li>"+info.abstracts+"</li></ol></div><p class='addsc'><a onclick='thingsFun.ifLogin()'><input type='hidden' value='"+info.seqid+"'><input type='hidden' value='"+info.pdfpath+"'>查看</a></p>";
		            				$(tag).html(strHtml);
						  }
						});
					},
					mybookDetail : function(tag){
						var paraString = window.location.href;
				    	var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
						var url = baseUrl+'bookDetail';
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:"id="+id,
							    success:function(msg){
							    	console.log(msg)
						            var strHtml = "";
						            //alert(msg.title)
								  	var info = msg.data
			            				strHtml += "<div class='main'><dl><dt><img src='"+baseUrl+"source/"+info.thumbnail+"' /></dt><dd>"+info.title+"</dd><dd><i class='active'></i><i></i><i></i><i></i><i></i></dd><dd>作&emsp;者：<span>"+info.author+"</span></dd><dd>出版社：<span>"+info.press+"</span></dd><dd>34.7万</dd></dl><ol><li>内容简介</li><li>"+info.abstracts+"</li></ol></div><p class='addsc'><a onclick='getHtml.collectCancel()' '><input type='hidden' value='"+info.seqid+"'>删除</a><a onclick='getHtml.bookViewer()'>查看</a></p>";
		            				$(tag).html(strHtml);
						  }
						});
					},
					favorite : function(tag){
						var url=baseUrl+'favorite';
						//alert($.session.get('data'))
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:'userid='+$.cookie('id'),
							    success:function(msg){
							    	var strHtmlPaper = "";
							    	var strHtmlNews = "";
							    	console.log(msg);
							    	console.log(msg.data.paper);
							    	$.each(msg.data.paper,function(infoIndex,info){
											strHtmlPaper +=	"<div class='collection-list' onclick='window.location.href=\"news.html?id="+info.seqid+"\"'><div class='main'><dl><dt><a><img src='images/mobile/ico-1.png' /></a><span>"+info.author+"</span><i>"+info.createdtime+"</i></dt><dd><img src='"+baseUrl+"source/"+info.thumbnail+"' class='fl' /><ol><li>"+info.title+"</li><li></li></ol></dd></dl></div></div>";
							    	})
							    	$.each(msg.data.news,function(infoIndex,info){
											strHtmlNews +=	"<div class='collection-list' onclick='window.location.href=\"mynews.html?id="+info.seqid+"\"'><div class='main'><dl style='min-height:auto'><dt><span>"+info.sources+"</span><i>"+info.pubdate+"</i></dt><dd><ol><li>"+info.title+"</li></ol></dd></dl></div></div>";
							    	})
			            			$(tag).append(strHtmlPaper+strHtmlNews)
		                		}	
							})
						},
						favoriteBook : function(tag){
						var url=baseUrl+'favorite';
						//alert($.session.get('data'))
					    $.ajax({
							    type: 'POST',
							    url: url,
							    dataType: 'json',
							    data:'userid='+$.cookie('id'),
							    success:function(msg){
							    	var strHtmlBook = "";
							    	console.log(msg);
							    	console.log(msg.data.paper);
							    	$.each(msg.data.book,function(infoIndex,info){
							    		strHtmlBook += "<dl onclick='window.location.href=\"mybook.html?id="+info.seqid+"\"'><dt class='fl'><img src='"+baseUrl+"source/"+info.thumbnail+"' /></dt><dd class='bookname'>"+info.title+"</dd><dd><label>作&emsp;&emsp;者：</label>"+info.auther+"</dd><dd><label>出&nbsp;&nbsp;版&nbsp;&nbsp;社：</label>"+info.press+"</dd><dd><label>出版时间：</label>"+info.createdtime+"</dd></dl>";
							    	})
			            			$(tag).append(strHtmlBook)
		                		}	
							})
						},
						loginCheck : function(){
							if($("#username").val() == "" || $("#username").val() == ""){
								alert("账号密码不能为空")
							}
							var url=baseUrl+'login';
							$.ajax({
								type:"post",
								url:url,
								data:"username="+escape($("#username").val())+"&passwd="+escape($("#password").val()), 
								success:function(data,msg){
									var info = data.data
									//alert(info)
										if(msg == "success"){
											$.session.set('data', info)
											$.cookie('username', $("#username").val())
											$.cookie('passwd', $("#password").val())
											$.cookie('id',info)
											alert("登录成功")
											if(bookID != ""){
												window.location.href='bookDetail.html?id='+bookID+''
											}else{
												//alert($.cookie('username'))
												//alert($.cookie('passwd'))
												//alert($.cookie('id'))
												window.location.href='user.html?userid='+info+''
											}
										}else{
											alert("登录失败")
										}
								}
							});
						},
						autoLogin : function(){
							if($.cookie('username') !="" && $.cookie('passwd') != "" && $.cookie('id') != undefined && $.cookie('id') != null ){
								window.location.href='user.html?userid='+$.cookie('id')+''
							}
						},
						userHtml: function(m){
							var paraString = window.location.href;
				    		var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
							var url=baseUrl+'login';
							$.ajax({
								type:"post",
								url:url,
								data:"userid="+id,
								success:function(msg){
									var strHtml = ""
									var info = msg.data
									strHtml += "<dl><dt><a><img src='"+baseUrl+"source/"+info.photo+"'' /></a>"+info.nickname+"</dt><dd><a href='collection.html'><img src='images/mobile/ico-3.png' />我的收藏<img src='images/mobile/ico-5.png' /></a></dd><dd><a href='mybooklist.html'><img src='images/mobile/ico-4.png' />我的图书<img src='images/mobile/ico-5.png' /></a></dd><dd><a id='loginout' style='cursor:pointer' onclick='thingsFun.loginOut()'>登出</a></dd></dl>";
									$(m).html(strHtml)
								}
								
							});
						},
						collectConfirm: function(){
							var url = baseUrl+'collect'
							var rescodeNum = $("input[type='hidden']:eq(0)").val();
							var pdfpath = $("input[type='hidden']:eq(1)").val();
							$.ajax({
								type:"post",
								url:url,
								data:"userid="+$.cookie('id')+"&restype=self_book&"+"rescode="+rescodeNum,
								success:function(msg){
									if(msg = "success"){
										alert("收藏成功")
										window.location.href="user.html?userid="+$.cookie('id')+""
									}else{
										alert("收藏失败")
									}
								}
							});
						},
						collectConfirmPaper: function(){
							var url = baseUrl+'collect'
							var rescodeNum = $("input[type='hidden']").val();
							$.ajax({
								type:"post",
								url:url,
								data:"userid="+$.cookie('id')+"&restype=self_paper&"+"rescode="+rescodeNum,
								success:function(msg){
									if(msg = "success"){
										alert("收藏成功")
										window.location.href="user.html?userid="+$.cookie('id')+""
									}else{
										alert("收藏失败")
									}
								}
							});
						},
						collectConfirmNews: function(){
							var url = baseUrl+'collect'
							var rescodeNum = $("input[type='hidden']").val();
							$.ajax({
								type:"post",
								url:url,
								data:"userid="+$.cookie('id')+"&restype=self_news&"+"rescode="+rescodeNum,
								success:function(msg){
									if(msg = "success"){
										alert("收藏成功")
										window.location.href="user.html?userid="+$.cookie('id')+""
									}else{
										alert("收藏失败")
									}
								}
							});
						},
						collectCancel: function(){
							var url = baseUrl+'cancel'
							var rescodeNum = $("input[type='hidden']").val();
							$.ajax({
								type:"post",
								url:url,
								data:"userid="+$.cookie('id')+"&restype=self_book&"+"rescode="+rescodeNum,
								success:function(msg){
									if(msg = "success"){
										alert("取消成功")
										window.location.href="user.html?userid="+$.cookie('id')+""
									}else{
										alert("取消失败")
									}
								}
							});
						},
						bookViewer: function(){
							var url = baseUrl+'cancel'
							var rescodeNum = $("input[type='hidden']").val();
							var paraString = window.location.href;
				    		var id= paraString.substring(paraString.indexOf("=")+1,paraString.Length).split("&");
							$.ajax({
								type:"post",
								url:url,
								data:"id="+rescodeNum,
								success:function(msg){
									window.location.href="bookDisc.html?id="+rescodeNum
								}
							});
						},
						collectCancelNews: function(){
							var url = baseUrl+'cancel'
							var rescodeNum = $("input[type='hidden']").val();
							$.ajax({
								type:"post",
								url:url,
								data:"userid="+$.cookie('id')+"&restype=self_news&"+"rescode="+rescodeNum,
								success:function(msg){
									if(msg = "success"){
										alert("取消成功")
										window.location.href="user.html?userid="+$.cookie('id')+""
									}else{
										alert("取消失败")
									}
								}
							});
						},
						collectCancelPaper: function(){
							var url = baseUrl+'cancel'
							var rescodeNum = $("input[type='hidden']").val();
							$.ajax({
								type:"post",
								url:url,
								data:"userid="+$.cookie('id')+"&restype=self_paper&"+"rescode="+rescodeNum,
								success:function(msg){
									if(msg = "success"){
										alert("取消成功")
										window.location.href="user.html?userid="+$.cookie('id')+""
									}else{
										alert("取消失败")
									}
								}
							});
						},
					
				}
				
			

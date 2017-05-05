$(function(){
	
	var items = {};
			items[0] = {
						name:"OPE全球视频资源分享平台", 
						href:"ope.html",
						img:"img/ope/logo.jpg"
					}
			items[1] = {  
					    name:"建材竞价网",  
					    href:"jcjjw.html",
					    img:"img/jcjjw/logo.jpg"
					}
			items[2] = {  
					    name:"LinkLab医疗平台项目",  
					    href:"linklab.html",
					    img:"img/linklab/logo.jpg",
					}
			items[3] ={  
					    name:"长沙工业云平台",  
					    href:"csicloud.html",
					    img:"img/csicloud/logo.jpg",
					}
			items[4] ={  
					    name:"莹辉在线",  
					    href:"brightonline.html",
					    img:"img/brightonline/logo.jpg",
					}
			items[5] ={  
					    name:"煤小二",  
					    href:"mxer.html",
					    img:"img/mxer/logo.jpg",
					}
			items[6] ={  
					    name:"莹辉ipad app",  
					    href:"brightonline2.html",
					    img:"img/brightonline/logoapp.jpg",
					} 
	
	
	var projectItem = {
		projectHtml : function(content){
			for(var x in items){
				var strHtml = "";
				strHtml += "<div class='work'><a href="+items[x].href+"><img src="+items[x].img+" class='media' alt=''/><div class='caption'><div class='work_title'><h1>"+items[x].name+"</h1></div></div></a></div>";
				content.append(strHtml)
			}
		},
		resumetHtml : function(content){
			for(var x in items){
				var strHtml = "";
				var imgurl = "../Project/" 
				strHtml += "<a href='"+imgurl+""+items[x].href+"' title="+items[x].name+"><img src='"+imgurl+""+items[x].img+"' alt=''/></a>";
				content.append(strHtml)
			}
		}
		
	
	}
	//projectItem.itemList()
	projectItem.projectHtml($("#content"))	
	projectItem.resumetHtml($("#small-dialog"))	


})
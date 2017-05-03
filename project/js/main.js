$(document).ready(function(){



    //mobile menu toggling
    $("#menu_icon").click(function(){
        $("header nav ul").toggleClass("show_menu");
        $("#menu_icon").toggleClass("close_menu");
        return false;
    });

    

    //Contact Page Map Centering
    var hw = $('header').width() + 50;
    var mw = $('#map').width();
    var wh = $(window).height();
    var ww = $(window).width();

    $('#map').css({
        "max-width" : mw,
        "height" : wh
    });

    if(ww>1100){
         $('#map').css({
            "margin-left" : hw
        });
    }

   



    //Tooltip
    $("a").mouseover(function(){

        var attr_title = $(this).attr("data-title");

        if( attr_title == undefined || attr_title == "") return false;
        
        $(this).after('<span class="tooltip"></span>');

        var tooltip = $(".tooltip");
        tooltip.append($(this).data('title'));

         
        var tipwidth = tooltip.outerWidth();
        var a_width = $(this).width();
        var a_hegiht = $(this).height() + 3 + 4;

        //if the tooltip width is smaller than the a/link/parent width
        if(tipwidth < a_width){
            tipwidth = a_width;
            $('.tooltip').outerWidth(tipwidth);
        }

        var tipwidth = '-' + (tipwidth - a_width)/2;
        $('.tooltip').css({
            'left' : tipwidth + 'px',
            'bottom' : a_hegiht + 'px'
        }).stop().animate({
            opacity : 1
        }, 200);
       

    });

    $("a").mouseout(function(){
        var tooltip = $(".tooltip");       
        tooltip.remove();
    });


	
		function contentHtml(){
			var con = {};
			con[0] = {
						name:"OPE全球视频资源分享平台", 
						href:"ope.html",
						img:"img/ope/logo.jpg"
					}
			con[1] = {  
					    name:"建材竞价网",  
					    href:"jcjjw.html",
					    img:"img/jcjjw/logo.jpg"
					}
			con[2] = {  
					    name:"LinkLab医疗平台项目",  
					    href:"linklab.html",
					    img:"img/linklab/logo.jpg",
					}
			con[3] ={  
					    name:"长沙工业云平台",  
					    href:"csicloud.html",
					    img:"img/csicloud/logo.jpg",
					}
			con[4] ={  
					    name:"莹辉在线",  
					    href:"brightonline.html",
					    img:"img/brightonline/logo.jpg",
					}
			con[5] ={  
					    name:"煤小二",  
					    href:"mxer.html",
					    img:"img/mxer/logo.jpg",
					}
			con[6] ={  
					    name:"莹辉ipad app",  
					    href:"brightonline2.html",
					    img:"img/brightonline/logoapp.jpg",
					} 
			for(var x in con){
				var content = $("#content");  
				var strHtml = "";
				strHtml += "<div class='work'><a href="+con[x].href+"><img src="+con[x].img+" class='media' alt=''/><div class='caption'><div class='work_title'><h1>"+con[x].name+"</h1></div></div></a></div>";
				content.append(strHtml)
			}
		}
		
	contentHtml()
	//主体内容
	/*$.getJSON("../db/content.json",function(data){  
	            var content = $("#content");  
	            var strHtml = "";//存储数据的变量  
	            content.empty();//清空内容  
	            $.each(data,function(infoIndex,info){  
            		strHtml += "<div class='work'><a href="+info["href"]+"><img src="+info["img"]+" class='media' alt=''/><div class='caption'><div class='work_title'><h1>"+info["name"]+"</h1></div></div></a></div>"; 
	                })  
	            content.html(strHtml);//显示处理后的数据     
	            })  */
});






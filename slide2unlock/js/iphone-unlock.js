/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
* BelongsTo:   The iPhone unlock screen in xHTML, CSS and jQuery
* Modifications: Swing back and "slide to unlock"-fade made by Martin Jansson (http://www.martinjansson.se)
*/

$(document).ready(function()
{
	// Set the slider to be sliding
	$("#unlock-slider").slider({
		handle: "#unlock-handle",
		animate:true,
		slide: function(e,ui)
		{
			$("#slide-to-unlock").css("opacity", 1-(parseInt($("#unlock-handle").css("left"))/120));
		},
		stop: function(e,ui)
		{
			if($("#unlock-handle").position().left == 205)
			{
				unlock();
			}
			else
			{
				$("#unlock-handle").animate({left: 0}, 200 );
				$("#slide-to-unlock").animate({opacity: 1}, 200 );
			}
		}
		}
	);
	
	var unlock = function()
	{
		//$("#iphone-inside").animate({backgroundPosition: '0 40'}, 400, '', function()
		//{
			$("#unlock-bottom").animate({bottom: -100}, 300);
			$("#unlock-top").animate({top: -100}, 300, '', function()
			{});	
			$("#iphone-inside").fadeOut("normal", function(){window.location="index1.html";});								  
		//});
	}
	
	// Set the date and time
	<!DOCTYPE html>

                <script type="text/javascript">
                    function startTime(){
                        var date_format = '12';
                        var today=new Date();
                        var h=today.getHours();
                        var m=today.getMinutes();
                        var result  = h;
                        var ext     = '';
                        if(date_format == '12'){
                            if(h > 12){
                                h = (h - 12);
                                if(h < 10){
                                    result = "0" + h;
                                }

                            }
                        }
                        if(m < 10){
                            m = "" + m;
                        }
                        result = result + ":" + m;
                        console.log(result);
                        m=checkTime(m);
                        document.getElementById('txt').innerHTML= + h + " : "  + m;t=setTimeout('startTime()',1);
                    }
                    function checkTime(i){
                        if (i<10){
                            i="0" + i;
                        }
                        return i;
                    }
                </script>
                <body onload="startTime()">
                    <div id="txt"> 
                    </div>
                </body>

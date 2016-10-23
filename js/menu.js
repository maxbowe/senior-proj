var introPuckHome =false;
/* date on menu click*/
function displayDate() {
    document.getElementById("menuClick").innerHTML = Date();
}
function changeImage(obj,img) {
			  obj.src = img;
			}
//returns to home state
function returnToHome(){
			$("#leftlink").show();
			$("#toplink").show();
			$("#rightlink").show();
			$("#bottomlink").show();
			$("#menubutton").show();
			$("#introtext1").hide();
			$("#introtext2").hide();
			$("#introtext3").hide();
			$("#introtext4").hide();
			$(".crosby").hide();
			$(".crosbyspeech").hide();
			$(".introbg").hide();
			hideCorr();

			canvasReset();
					introON=false;
}
function returnToHomeFromLink(){
				returnToHome();	

	$(".puck").animate({
				height: '+=450px',
				width: '+=450px',
				bottom: "0px",
				top:"+=25%",
				left:"+=35%"
			});
			$("body").css({
				'background-size': '100%',
				'background-position': 'center'
			});

			}
function hideHome(){
	$("#leftlink").hide();
	$("#toplink").hide();
	$("#rightlink").hide();
	$("#bottomlink").hide();
	$("#menubutton").hide();
	canvasReset();


}
function canvasReset(){
	defCorrel= false;
	defRep = false;
	$("#CorrCanvas").hide();	
	$("#RepCanvas").hide();
}

/*  initates intro text page */
var introON = false;
$("#introtext1").hide();
$("#introtext2").hide();
$("#introtext3").hide();
$("#introtext4").hide();
$(".introbg").hide();

$(".puck").click(function(){
	 if(introPuckHome){
	$(".puck").animate({
		height: '+=450px',
		width: '+=450px',
		top:"+=-23%",
		left:"-=28%"
	});
	introPuckHome=false;
	$("body").css({
				'background-size': '100%',
				'background-position': 'center'
			});
			changeImage(this,"../images/puck.png");
			returnToHome();
	}
	else if(introON){
		$(".puck").animate({
				height: '+=100px',
				width: '+=100px',
				bottom: "0px",
				top:"-=40%",
				left:"-=3%"

				

			});
			$("body").css({
				'background-size': '100%',
				'background-position': 'center'
			});
			changeImage(this,"../images/puck.png");
			returnToHome();


		introON=false;
	}
	
	/* returns puck to normal */
	else if(leftlinkON) {
		
			returnToHomeFromLink();

			
		leftlinkON=false;
	}
	/* returns puck to normal */
	else if(rightlinkON) {
		returnToHomeFromLink();


		rightlinkON=false;
	}
	/* returns puck to normal */
	else if(toplinkON && !introPuckHome) {
		returnToHomeFromLink();


		toplinkON=false;
	}
	/* returns puck to normal */

	else if(bottomlinkON) {
		returnToHomeFromLink();


		bottomlinkON=false;
	}
	
	else{
		changeImage(this,"../images/home.png");
		$(".introbg").show();

				introtext1Start();


		$(".puck").animate({
				height: '-=100px',
				width: '-=100px',
				top:"+=40%",
				left:"+=3%"
			});
			$("body").css({
				'background-size': '150%',
				'background-position': 'center'
				   

			});
			hideHome();		
			
			
			$("#introtext1").show();

		introON=true;
	}
});  
/* brings up defintion of correlation */
 var defCorrel = false;
$("#CorrCanvas").hide();
$("#CorrGraph1").hide();
$("#CorrGraph2").hide();
$("#CorrGraph3").hide();
function hideCorr(){
	$("#CorrCanvas").hide();
		$("#defCorrelation").css({
		});
		$("#CorrGraph1").hide();
		corr3();
		$("#CorrGraph1").hide();
		$("#CorrGraph2").hide();
			$("#CorrGraph3").hide();
			$(".corrX1").hide();
$(".corrY1").hide();
	
}
var CorrGraph =1;
$("#defCorrelation").click(function(){
	if(defCorrel){
		hideCorr();
		defCorrel= false;
	}
	else{
		$(".puck").animate({
			zIndex:"1"
		});
		$("#CorrCanvas").show();
		$("#CorrGraph1").show();
		CorrGraph =1;
		$(".corrX1").show();
			$(".corrY1").show();
		
		defCorrel=true;
		
	}

});
$(".corrX1").hide();
$(".corrY1").hide();
$("#CorrCanvas").click(function(){
 if(CorrGraph==1){
	 		$(".corrX1").show();
			$(".corrY1").show();
	$("#CorrGraph1").hide();

	CorrGraph=2;
	$("#CorrGraph2").show();
	 corr1();
 }
	else if (CorrGraph==2){
		$("#CorrGraph2").hide();
	$("#CorrGraph3").show();

		CorrGraph=3;
		corr2();
	}
	else if(CorrGraph==3){
		CorrGraph=4;
		$("#CorrCanvas").hide();
		$("#CorrGraph3").hide();

		$(".corrX1").hide();
		$(".corrY1").hide();
		corr3();
		defCorrel = false;
		}
});
function corr1(){
	$(".corrX1").velocity({
	  borderRadius: "25px",
	  width: "45px",
	  height:"45px",
	  paddingLeft: "0",
	  paddingRight: "0",
	  color: "#fff",
	  borderColor: "#8CC152",
	  boxShadowX: "0",
	  boxShadowY: "0",
	  top:"41%",
		left:"48%"
	}, {
		duration: 350,
		easing: "easeInQuad"
	});
	$(".corrY1").velocity({
	  borderRadius: "25px",
	  width: "45px",
	  height:"45px",
	  paddingLeft: "0",
	  paddingRight: "0",
	  color: "#fff",
	  borderColor: "#8CC152",
	  boxShadowX: "0",
	  boxShadowY: "0",
	  top:"44%",
		left:"45%"
	}, {
		duration: 350,
		easing: "easeInQuad"
	});
}
function corr2(){
	$(".corrX1").velocity({

	  paddingLeft: "0",
	  paddingRight: "0",
	  color: "blue",
	  borderColor: "#8CC152",
	  boxShadowX: "0",
	  boxShadowY: "0",
	  	 top:"30%",
		left:"58%"
	}, {
		duration: 350,
		easing: "easeInQuad"
	});
	$(".corrY1").velocity({

	  paddingLeft: "0",
	  paddingRight: "0",
	  color: "#fff",
	  borderColor: "#8CC152",
	  boxShadowX: "0",
	  boxShadowY: "0",
	  	 top:"52%",
		left:"32%"
	}, {
		duration: 350,
		easing: "easeInQuad"
	});
}
function corr3(){
	$(".corrX1").velocity({

	  paddingLeft: "0",
	  paddingRight: "0",
	  color: "blue",
	  borderColor: "#8CC152",
	  boxShadowX: "0",
	  boxShadowY: "0",
	  	 top:"33%",
	left:"55%"
	}, {
		duration: 350,
		easing: "easeInQuad"
	});
	$(".corrY1").velocity({

	  paddingLeft: "0",
	  paddingRight: "0",
	  color: "#fff",
	  borderColor: "#8CC152",
	  boxShadowX: "0",
	  boxShadowY: "0",
	 top:"50%",
	left:"34%"
	}, {
		duration: 350,
		easing: "easeInQuad"
	});
}
var defRep = false;
var my_canvas = document.getElementById('RepCanvas');
var repDisp = my_canvas.getContext("2d");
$("#RepCanvas").hide();
$("#defRepeat").click(function(){
	if(defRep){
		$("#RepCanvas").hide();
		$("#defRepeat").css({
		});
		defRep= false;
	}
	else{
		$("#RepCanvas").show();

		defRep=true;
	}

});

//controls arrow for intro section
$(".introarrow1").click(function(){
	$("#introtext1").hide();
	$("#introtext2").show();
	$("#CorrCanvas").hide();
	introtext2Start();
	animate1.stop();
	canvasReset();

});
$(".introbackarrow2").click(function(){
	$("#introtext1").show();
	$("#introtext2").hide();
	introtext1Start();
	animate2.stop();
		canvasReset();



});
$(".introarrow2").click(function(){
	$("#introtext2").hide();
	$("#introtext3").show();
	introtext3Start();
	animate2.stop();

	canvasReset();

});
$(".introbackarrow3").click(function(){
	$("#introtext2").show();
	$("#introtext3").hide();
	animate3.stop();
	introtext2Start();


});
$(".introarrow3").click(function(){
	$("#introtext3").hide();
	$("#introtext4").show();
	introtext4Start();
	animate3.stop();

	$(".puck").animate({
		height: '-=350px',
		width: '-=350px',
		top:"-=16%",
		left:"+=25%",
		zIndex:"2"
	});
	introPuckHome =true;
});
$(".introbackarrow4").click(function(){
	$("#introtext3").show();
	$("#introtext4").hide();
	animate4.stop();
	introtext3Start();
	$(".puck").animate({
		height: '+=350px',
		width: '+=350px',
		top:"+=17%",
		left:"-=25%"
	});
		introPuckHome =false;

			

});
/* $(".introX").click(function(){
	$(".puck").animate({
				height: '+=100px',
				width: '+=100px',
				bottom: "0px",
				top:"-=40%",
				left:"-=3%",
			

			});
		$(".puck").attr("src", "../images/puck.png");

	

	$("body").css({
				'background-size': '100%',
				'background-position': 'center'
			});
			returnToHome();


		introON=false;
}); */
/* actives toplink */
var toplinkON = false;
$(".crosby").hide();
$(".crosbyspeech").hide();


$("#toplink").click(function(){

	if(toplinkON){

	}
	else{
		$(".puck").animate({
			height: '-=450px',
			width: '-=450px',
			top:"-=25%",
			left:"-=35%"	
			});
			$("body").css({
			'background-size': '200%',
			'background-position': '50% 0%'
		});
		hideHome();			
		$(".crosby").show();
		$(".crosbyspeech").show();
		$("#crosby2").hide();
		$("#crosby3").hide();
		$("#crosby4").hide();
		$("#toptext1").show();	
		toplinkON=true;


	}
});  
 var crosbySlideNum =1 , crosbySlide= "#crosby1" ;
 $(".crosbyspeech").click(function(){
				console.log(crosbySlideNum);

		if(crosbySlideNum == 4){
			crosbySlideNum = 1;
			crosbySlide= "#crosby" + crosbySlideNum;

			returnToHomeFromLink();
			toplinkON=false;



		}
		
		else{			
			$(crosbySlide).hide();
			crosbySlideNum+=1;
			crosbySlide= "#crosby" + crosbySlideNum;
			$(crosbySlide).show();
				console.log(crosbySlideNum);


		} 
		

});

/* actives leftlink */
var leftlinkON = false;
$("#leftlink").click(function(){
	if(leftlinkON){
		
		
	}
	else{
		$(".puck").animate({
				height: '-=450px',
				width: '-=450px',
				top:"-=25%",
				left:"-=35%"
			});
			$("body").css({
				'background-size': '180%',
				'background-position': '0% 50%'


				   

			});
			hideHome();			

			$("#lefttext1").show();
			
		leftlinkON=true;
	}
});  
/* actives rightlink */
var rightlinkON = false;
$("#rightlink").click(function(){
	if(rightlinkON){
		
		
	}
	else{
		$(".puck").animate({
				height: '-=450px',
				width: '-=450px',
				top:"-=25%",
				left:"-=35%"
			});
			$("body").css({
				'background-size': '180%',
				'background-position': '100% 50%'


				   

			});
			hideHome();			

			$("#lefttext1").show();
			
		rightlinkON=true;
	}
});  
/* actives bottomlink */

var bottomlinkON = false;
$("#bottomlink").click(function(){
	if(bottomlinkON){
		
		
	}
	else{
		$(".puck").animate({
				height: '-=450px',
				width: '-=450px',
				top:"-=25%",
				left:"-=35%",

			});

			$("body").css({
				'background-size': '200%',
				'background-position': '50% 100%'
				   

			});

			hideHome();			
			$("#lefttext1").show();

			
		bottomlinkON=true;
	}
});  

 //sample chart
/*  var redNum = crosbySlideNum;

 var ctx = document.getElementById("CorrCanvas");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
            label: '# of Votes',
            data: [redNum, 4, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min:0,
					beginAtZero:true
					
                }
            }]
        },
		legend: {
            display: false,
			fontSize: 55
        },
		title: {
                    display: true,
                    text: 'SAMPLE CHART',
					fontSize: 42
		}
    }
});
var cty = document.getElementById("RepCanvas");
var myPieChart = new Chart(cty,{
    type: 'pie',
    data: { labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [25, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
	}]}
}); */

var animate1 = $("#introtext1").blast({ delimiter: "character" });
function introtext1Start(){animate1.each(function(i) {
  // initialize position
  $(this).css({
    position: 'relative',
    left: 0,
	opacity:0
  })

  // Delay: we don't want to animate
  // characters simultaneously
  .delay(i * 7)

  // Animate to the right
  .animate({ opacity: 1}, 500);
});
}
var animate2 = $("#introtext2").blast({ delimiter: "character" });
function introtext2Start(){ animate2.each(function(i) {
	  // initialize position
	  $(this).css({
		position: 'relative',
		left: 0,
		opacity:0
	  })

	  // Delay: we don't want to animate
	  // characters simultaneously
	  .delay(i * 7)

	  // Animate to the right
	  .animate({ opacity: 1}, 500);
	});
}
var animate3 = $("#introtext3").blast({ delimiter: "character" });
function introtext3Start(){ animate3.each(function(i) {
	  // initialize position
	  $(this).css({
		position: 'relative',
		left: 0,
		opacity:0
	  })

	  // Delay: we don't want to animate
	  // characters simultaneously
	  .delay(i * 7)

	  // Animate to the right
	  .animate({ opacity: 1}, 500);
	});
}
var animate4 = $("#introtext4").blast({ delimiter: "character" });
function introtext4Start(){ animate4.each(function(i) {
	  // initialize position
	  $(this).css({
		position: 'relative',
		left: 0,
		opacity:0
	  })

	  // Delay: we don't want to animate
	  // characters simultaneously
	  .delay(i * 7)

	  // Animate to the right
	  .animate({ opacity: 1}, 500);
	});
}


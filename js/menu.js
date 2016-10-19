
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
$(".puck").click(function(){
	if(introON){
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
	else if(toplinkON) {
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

		$(".puck" || ".centerpuck").animate({
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
var my_canvas = document.getElementById('CorrCanvas');
var corrDisp = my_canvas.getContext("2d");
$("#CorrCanvas").hide();
$("#defCorrelation").click(function(){
	if(defCorrel){
		$("#CorrCanvas").hide();
		$("#defCorrelation").css({
		});
		defCorrel= false;
	}
	else{
		$("#CorrCanvas").show();
		
		defCorrel=true;
	}

}); 

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
	canvasReset();

});
$(".introbackarrow2").click(function(){
	$("#introtext1").show();
	$("#introtext2").hide();
		canvasReset();



});
$(".introarrow2").click(function(){
	$("#introtext2").hide();
	$("#introtext3").show();
	canvasReset();

});
$(".introbackarrow3").click(function(){
	$("#introtext2").show();
	$("#introtext3").hide();
});
$(".introarrow3").click(function(){
	$("#introtext3").hide();
	$("#introtext4").show();
});
$(".introbackarrow4").click(function(){
	$("#introtext3").show();
	$("#introtext4").hide();
});
$(".introX").click(function(){
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
});
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

		if(crosbySlideNum >= 4){
			
			returnToHomeFromLink();
			toplinkON=false;

			crosbySlideNum = 1;

		}
		
		else{
			$(crosbySlide).hide();
			crosbySlideNum+=1;
			crosbySlide= "#crosby" + crosbySlideNum;


			$(crosbySlide).show(); 

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
 var ctx = document.getElementById("CorrCanvas");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
            label: '# of Votes',
            data: [5, 4, 3],
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
            data: [300, 50, 100],
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
});
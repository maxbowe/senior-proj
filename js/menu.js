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
	$("#canvas").hide();


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
	$("#CorrGraph1").hide();
	$("#CorrGraph2").hide();
	$("#CorrGraph3").hide();
	
}
var CorrGraph =1;
$("#canvas").hide();

$("#defCorrelation").click(function(){
	if(defCorrel){
		hideCorr();
		$("#canvas").hide();

		defCorrel= false;
	}
	else{
		$(".puck").animate({
			zIndex:"1"
		});
		$("#CorrCanvas").show();
		$("#CorrGraph1").show();
		$("#canvas").show();
		CorrGraph =1;

		
		defCorrel=true;
		
	}

});

$(".correlation").click(function(){
	if(CorrGraph==1){
		$("#CorrGraph1").hide();
		CorrGraph=2;
		corrUpdate(1);
		$("#CorrGraph2").show();

	}
	else if (CorrGraph==2){
		$("#CorrGraph2").hide();
		$("#CorrGraph3").show();
		corrUpdate(2);
		CorrGraph=3;
	}
	else if(CorrGraph==3){
		CorrGraph=4;
		$("#CorrCanvas").hide();
		$("#CorrGraph3").hide();
		$("#canvas").hide();

		corrUpdate(3);

		defCorrel = false;
	}
});

var defRep = false;
$("#repGraph").hide();
$("#RepCanvas").hide();
$("#RepGraph1").hide();
$("#RepGraph2").hide();
$("#RepGraph3").hide();
$("#defRepeat").click(function(){
	if(defRep){
		$("#RepCanvas").hide();
		$("#repGraph").hide();
		$("#RepGraph1").hide();
		$("#RepGraph2").hide();
		$("#RepGraph3").hide();
		repGraph=1;
		repUpdate(6);
		defRep= false;
	}
	else{
		$(".repeatability").show();
		$("#RepCanvas").show();
		$("#repGraph").show();
		$("#RepGraph1").show();

		defRep=true;
	}

});
var repGraph=1;
//repeatability clickthrough
$(".repeatability").click(function(){
	if(repGraph==1){
		$("#RepGraph1").hide();
		repGraph=2;
		repUpdate(1);
		$("#RepGraph2").show();

	}
	else if (repGraph==2){
		$("#RepGraph2").hide();
		$("#RepGraph3").show();
		repUpdate(2);
		repGraph=3;
	}
	else if(repGraph==3){
		repGraph=4;
		

		repUpdate(3);

	}
	else if (repGraph==4){
		repUpdate(4);
		repGraph=5;


	}
	else if (repGraph==5){
		repUpdate(5);
		repGraph=6;


	}
	else if (repGraph==6){
		repUpdate(6);
		$("#CorrCanvas").hide();
		$("#RepGraph3").hide();
		$(".repeatability").hide();
		repGraph=1;
		defRep = false;

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


var animate1 = $("#introtext1").blast({ delimiter: "word" });
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
var animate2 = $("#introtext2").blast({ delimiter: "word" });
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
var animate3 = $("#introtext3").blast({ delimiter: "word" });
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
var animate4 = $("#introtext4").blast({ delimiter: "word" });
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
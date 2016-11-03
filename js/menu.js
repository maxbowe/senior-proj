var introPuckHome =false;
//function that changes one image to another
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
	$("#introtext5").hide();
	$("#introtext6").hide();
	$("#introtext7").hide();
	$("#introtext8").hide();
	$(".crosby").hide();
	$(".crosbyspeech").hide();
	$(".introbg").hide();
	hideCorr();
	$("#canvas").hide();


	canvasReset();
	introON=false;
}

//returns to home from link, shrinks puck and returns background to normal
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
$("#introtext5").hide();
$("#introtext6").hide();
$("#introtext7").hide();
$("#introtext8").hide();

$(".introbg").hide();

$(".puck").click(function(){
	if(introPuckHome){
		$(".puck").animate({
			height: '+=450px',
			width: '+=450px',
			top:"-=30%",
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
$("#chartButton").hide();
function hideCorr(){
	$("#CorrCanvas").hide();
	$("#defCorrelation").css({
	});
	$("#CorrGraph1").hide();
	$("#CorrGraph1").hide();
	$("#CorrGraph2").hide();
	$("#CorrGraph3").hide();
	$("#chartButton").hide();

	
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
			$("#chartButton").show();

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
		hideCorr();
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
					$("#chartButton").hide();

		repGraph=1;
		repUpdate(6);
		defRep= false;
	}
	else{
		$(".repeatability").show();
		$("#RepCanvas").show();
		$("#repGraph").show();
		$("#RepGraph1").show();
			$("#chartButton").show();

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
		repUpdate(2);
		repGraph=3;
	}
	else if(repGraph==3){
		repGraph=4;
		

		repUpdate(3);
 
	}
	else if (repGraph==4){
		$("#RepGraph2").hide();
		$("#RepGraph3").show();
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
							$("#chartButton").hide();

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

	canvasReset();

});
$(".introbackarrow4").click(function(){
	$("#introtext3").show();
	$("#introtext4").hide();
	animate4.stop();
	introtext3Start();


});
$(".introarrow4").click(function(){
	$("#introtext4").hide();
	$("#introtext5").show();
	introtext5Start();
	animate4.stop();

	canvasReset();

});
$(".introbackarrow5").click(function(){
	$("#introtext4").show();
	$("#introtext5").hide();
	animate5.stop();
	introtext4Start();


});

$(".introarrow5").click(function(){
	$("#introtext5").hide();
	$("#introtext6").show();
	introtext6Start();
	animate5.stop();

	canvasReset();

});
$(".introbackarrow6").click(function(){
	$("#introtext5").show();
	$("#introtext6").hide();
	animate6.stop();
	introtext5Start();


});
$(".introarrow6").click(function(){
	$("#introtext6").hide();
	$("#introtext7").show();
	introtext7Start();
	animate6.stop();

	canvasReset();

});
$(".introbackarrow7").click(function(){
	$("#introtext6").show();
	$("#introtext7").hide();
	animate7.stop();
	introtext6Start();


});
$(".introarrow7").click(function(){
	$("#introtext7").hide();
	$("#introtext8").show();
	introtext8Start();
	animate7.stop();

	$(".puck").animate({
		height: '-=350px',
		width: '-=350px',
		top:"-=10%",
		left:"+=25%",
		zIndex:"2"
	});
	introPuckHome =true;
});
$(".introbackarrow8").click(function(){
	$("#introtext7").show();
	$("#introtext8").hide();
	animate8.stop();
	introtext7Start();
	$(".puck").animate({
		height: '+=350px',
		width: '+=350px',
		top:"+=17%",
		left:"-=25%"
	});
	introPuckHome =false;



});
// does action on space bar press
// $(window).keypress(function (e) {
//   if (e.keyCode === 0 || e.keyCode === 32) {
//     e.preventDefault()
//     console.log('Space pressed')
//   }
// })
/* actives toplink */
var toplinkON = false;
$(".crosby").hide();
$(".crosbyspeech").hide();


$("#toplink").click(function(){

	if (introON){
		$(".crosby").show();
		hideHome();
				toplinkON=true;
				introOn=false;

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
var animate5 = $("#introtext5").blast({ delimiter: "word" });
function introtext5Start(){ animate5.each(function(i) {
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
var animate6 = $("#introtext6").blast({ delimiter: "word" });
function introtext6Start(){ animate6.each(function(i) {
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
var animate7 = $("#introtext7").blast({ delimiter: "word" });
function introtext7Start(){ animate7.each(function(i) {
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
var animate8 = $("#introtext8").blast({ delimiter: "word" });
function introtext8Start(){ animate8.each(function(i) {
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
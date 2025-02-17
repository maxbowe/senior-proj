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
	$(".bergeron").hide();
$(".bergyspeech").hide();
$("#bergy1").hide();
$("#bergy2").hide();
$("#bergy3").hide();
$("#bergy4").hide();
$("#heroChart").hide();
$("#heroChart2").hide();
$("#bergy5").hide();
$("#bergy6").hide();
$("#bergy7").hide();
$("#bergy8").hide();
$("#bergy9").hide();
$("#bergy10").hide();
$("#burnsAnalysis").hide();
	$(".introbg").hide();
	hideCorr();
	$("#canvas").hide();
	$(".CORSI").hide();
	$("#goalie").hide();
$("#strengths1").hide();
$("#strengths2").hide();
$("#strengths3").hide();
$("#strengths4").hide();

	$(".introarrow").show();

	canvasReset();
	introON=false;
}

//returns to home from link, shrinks puck and returns background to normal
function returnToHomeFromLink(){
	returnToHome();	

	$(".puck").animate({
		height: '+=350px',
		width: '+=350px',
		bottom: "0px",
		top:"+=25%",
		left:"+=35%"
	});
	
	$("body").css({
		'background-size': '100%',
		'background-position': 'center'
	});
	
	if(crosbySlideNum>4){
	
		$("#check1").animate({
			opacity:'0'
			},1000);
		$("#puck1").animate({
			
			top:"+=180%",
			left:"-=50%"
		});
		
		}
	
	 if(crosbySlideNum>5){

		$("#hit2").animate({
			
			opacity:'0'
			},1000);
		$("#puck2").animate({
			
			top:"+=170%",
			left:"+=30%"
		});
	}
	 if(crosbySlideNum>6){

		$("#hit3").animate({
				opacity:'0'
				},2400);
		$("#puck3").animate({
				
				top:"+=170%",
				left:"+=10%"
			},600);
		$("#defenseman").animate({
		left:'+=80%'
		});
	}
	crosbySlideNum=1;
	bergySlideNum=1;
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
			height: '+=350px',
			width: '+=350px',
			top:"-=30%",
			left:"-=28%"
		});
		introPuckHome=false;
		$("body").css({
			'background-size': '100%',
			'background-position': 'center'
		});
		returnToHome();
	}
	else if(introON){
		$(".puck").animate({
			
			bottom: "0px",
			top:"-=40%",
			left:"-=3%"



		});
		$("body").css({
			'background-size': '100%',
			'background-position': 'center'
		});
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
	else if(toplinkON ) {
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
				introPart=1;


		$(".puck").animate({
			
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
var introPart;
$("#introbackarrow").hide();

$(".introarrow").click(function(){
	if (introPart==7){
		introPart++;
		$(".introarrow").hide();

		$(".puck").animate({
		height: '-=350px',
		width: '-=350px',
		top:"-=10%",
		left:"+=25%",
		zIndex:"2"
	});
 	introPuckHome =true;
	}
	else{
		$("#introtext"+introPart).hide();
		introPart++;
		$("#introtext"+introPart).show();



	}
 });
$(".introbackarrow").click(function(){
	if (introPart==8){
				introPart--;

	$(".introarrow").show();
		$(".puck").animate({
		height: '+=350px',
		width: '+=350px',
		top:"+=10%",
		left:"-=25%",
		zIndex:"2"
	});
	}
	else{
	$("#introtext"+introPart).hide();
		introPart--;
		$("#introtext"+introPart).show();
		
	}
 });

// $(".introarrow1").click(function(){
// 	$("#introtext1").hide();
// 	$("#introtext2").show();
// 	$("#CorrCanvas").hide();
// 	introtext2Start();
// 	animate1.stop();
// 	canvasReset();

// });
// $(".introbackarrow2").click(function(){
// 	$("#introtext1").show();
// 	$("#introtext2").hide();
// 	introtext1Start();
// 	animate2.stop();
// 	canvasReset();



// });
// $(".introarrow2").click(function(){
// 	$("#introtext2").hide();
// 	$("#introtext3").show();
// 	introtext3Start();
// 	animate2.stop();

// 	canvasReset();

// });
// $(".introbackarrow3").click(function(){
// 	$("#introtext2").show();
// 	$("#introtext3").hide();
// 	animate3.stop();
// 	introtext2Start();


// });


// $(".introarrow3").click(function(){
// 	$("#introtext3").hide();
// 	$("#introtext4").show();
// 	introtext4Start();
// 	animate3.stop();

// 	canvasReset();

// });
// $(".introbackarrow4").click(function(){
// 	$("#introtext3").show();
// 	$("#introtext4").hide();
// 	animate4.stop();
// 	introtext3Start();


// });
// $(".introarrow4").click(function(){
// 	$("#introtext4").hide();
// 	$("#introtext5").show();
// 	introtext5Start();
// 	animate4.stop();

// 	canvasReset();

// });
// $(".introbackarrow5").click(function(){
// 	$("#introtext4").show();
// 	$("#introtext5").hide();
// 	animate5.stop();
// 	introtext4Start();


// });

// $(".introarrow5").click(function(){
// 	$("#introtext5").hide();
// 	$("#introtext6").show();
// 	introtext6Start();
// 	animate5.stop();

// 	canvasReset();

// });
// $(".introbackarrow6").click(function(){
// 	$("#introtext5").show();
// 	$("#introtext6").hide();
// 	animate6.stop();
// 	introtext5Start();


// });
// $(".introarrow6").click(function(){
// 	$("#introtext6").hide();
// 	$("#introtext7").show();
// 	introtext7Start();
// 	animate6.stop();

// 	canvasReset();

// });
// $(".introbackarrow7").click(function(){
// 	$("#introtext6").show();
// 	$("#introtext7").hide();
// 	animate7.stop();
// 	introtext6Start();


// });
// $(".introarrow7").click(function(){
// 	$("#introtext7").hide();
// 	$("#introtext8").show();
// 	introtext8Start();
// 	animate7.stop();

// 	$(".puck").animate({
// 		height: '-=350px',
// 		width: '-=350px',
// 		top:"-=10%",
// 		left:"+=25%",
// 		zIndex:"2"
// 	});
// 	introPuckHome =true;
// });
// $(".introbackarrow8").click(function(){
// 	$("#introtext7").show();
// 	$("#introtext8").hide();
// 	animate8.stop();
// 	introtext7Start();
// 	$(".puck").animate({
// 		height: '+=350px',
// 		width: '+=350px',
// 		top:"+=17%",
// 		left:"-=25%"
// 	});
// 	introPuckHome =false;



// });
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
$(".CORSI").hide();

$("#toplink").click(function(){

	if (introON){
		$(".crosby").hide();
		hideHome();
				toplinkON=true;
				introOn=false;

	}
	else{
		$(".puck").animate({
			height: '-=350px',
			width: '-=350px',
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
		$(".CORSI").show();
		$("#net").hide();
		$("#hit2").hide();
		$("#goalie").hide();
		$("#defenseman").hide();

		$("#check1").hide();
		$("#crosby2").hide();
		$("#crosby3").hide();
		$("#crosby4").hide();
		$("#crosby5").hide();
		$("#crosby6").hide();
		$("#crosby7").hide();
		$("#crosby8").hide();
		$("#crosby9").hide();
		$("#crosby10").hide();
		$("#crosby11").hide();
		toplinkON=true;


	}
});  

var crosbySlideNum =1 , crosbySlide= "#crosby1" ;
$(".crosbyspeech").click(function(){
	console.log(crosbySlideNum);

	if(crosbySlideNum==1){
		$("#net").show();
		$("#goalie").show();


	}
	if(crosbySlideNum==2){


	}
	if(crosbySlideNum==3){


	}
	if(crosbySlideNum==4){
		$("#check1").show();
		$("#puck1").animate({
			
			top:"-=180%",
			left:"+=50%",

		},600);
		$("#check1").animate({
			opacity:'1'
			},2400);
		


	}
	if(crosbySlideNum==5){


		$("#hit2").show();
		$("#hit2").animate({
			opacity:'1'
			},2400);
	$("#puck2").animate({
			
			top:"-=170%",
			left:"-=30%"
		},600);
		

	}
	if(crosbySlideNum==6){
	$("#defenseman").show();
	$("#defenseman").animate({
		left:'-=80%'
		});
	$("#hit3").animate({
			opacity:'1'
			},2400);
	$("#puck3").animate({
			
			top:"-=170%",
			left:"-=10%"
		},600);


	}
	if(crosbySlideNum==7){
		$("#hit2").animate({
			
			opacity:'0'
			},1);
		$("#check1").animate({
			opacity:'0'
			},1);
		$("#puck1").css({
			
			top:"210%",
			left:"-10%"
		});
		$("#puck2").css({
			
			top:"210%",
			left:"110%"
		});
		$("#hit3").animate({
			opacity:'0'
			},1);
	$("#puck3").css({
			
			top:"210%",
			left:"60%"
		},1);
	$("#defenseman").animate({
		left:'+=80%'
		},1);
		



	
	}
	if(crosbySlideNum==8){
		$("#hit2").show();
		$("#hit2").animate({
			opacity:'1'
			},2400);
	$("#puck2").animate({
			
			top:"-=170%",
			left:"-=30%"
		},600);
	$("#check1").show();
		$("#puck1").animate({
			
			top:"-=180%",
			left:"+=50%",

		},600);
		$("#check1").animate({
			opacity:'1'
			},2400);
		
	}
	if(crosbySlideNum == 11){
		crosbySlideNum = 1;
		crosbySlide= "#crosby" + crosbySlideNum;
		$("#hit2").animate({
			
			opacity:'0'
			},1000);
		$("#check1").animate({
			opacity:'0'
			},1000);
		$("#puck1").animate({
			
			top:"+=180%",
			left:"-=50%"
		});
		$("#puck2").animate({
			
			top:"+=170%",
			left:"+=30%"
		});
		
	
		returnToHomeFromLink();
		toplinkON=false;



	}
	
	else{			
		crosbySlide= "#crosby" + crosbySlideNum;

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
			height: '-=350px',
			width: '-=350px',
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
			height: '-=350px',
			width: '-=350px',
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
$(".bergeron").hide();
$(".bergyspeech").hide();
$("#bergy1").hide();
$("#bergy2").hide();
$("#bergy3").hide();
$("#bergy4").hide();
$("#heroChart").hide();
$("#bergy5").hide();
$("#bergy6").hide();
$("#bergy7").hide();
$("#bergy8").hide();
$("#bergy9").hide();
$("#bergy10").hide();
$("#burnsAnalysis").hide();
$("#heroChart2").hide();
$("#strengths1").hide();
$("#strengths2").hide();
$("#strengths3").hide();
$("#strengths4").hide();




var bottomlinkON = false;
$("#bottomlink").click(function(){
	if(bottomlinkON){
		
		
	}
	else{
		$(".puck").animate({
			height: '-=350px',
			width: '-=350px',
			top:"-=25%",
			left:"-=35%",

		});

		$("body").css({
			'background-size': '200%',
			'background-position': '50% 100%'


		});
			$(".bergeron").show();
			$(".bergyspeech").show();
			$("#bergy2").hide();
$("#bergy3").hide();
$("#bergy4").hide();
$("#bergy5").hide();
$("#bergy6").hide();
$("#bergy7").hide();
$("#bergy8").hide();
$("#bergy9").hide();
$("#bergy10").hide();
$("#heroChart").hide();
$("#heroChart2").hide();
$("#burnsAnalysis").hide();
$("#strengths1").hide();
$("#strengths2").hide();
$("#strengths3").hide();
$("#strengths4").hide();




		hideHome();			

		
		bottomlinkON=true;
	}
});  

var bergySlideNum =1 , bergySlide= "#bergy1" ;
$(".bergyspeech").click(function(){
	console.log(bergySlideNum);

	if(bergySlideNum == 10){
		bergySlideNum = 1;
		bergySlide= "#bergy" + bergySlideNum;

		returnToHomeFromLink();
		bottomlinkON=false;



	}

	else{			
		$(bergySlide).hide();
		bergySlideNum+=1;
		bergySlide= "#bergy" + bergySlideNum;
		$(bergySlide).show();
		console.log(bergySlideNum);


	} 
	 if(bergySlideNum==1){

	}
	else if(bergySlideNum==2){

	}
	else if(bergySlideNum==3){

	}
	else if(bergySlideNum==4){
		$("#strengths1").show();

	}
	else if(bergySlideNum==5){
		$("#strengths2").show();
		$("#strengths1").hide();

	}
	else if(bergySlideNum==6){
		$("#strengths3").show();
		$("#strengths2").hide();


	}
	else if(bergySlideNum==7){
		$("#strengths4").show();
		$("#strengths3").hide();

	}
	else if(bergySlideNum==8){
		$("#strengths4").hide();

		$("#burnsAnalysis").show();

	}

	else if(bergySlideNum==9){
	$("#burnsAnalysis").hide();

		$("#heroChart").show();

	}
	else if(bergySlideNum==10){
		$("#heroChart2").show();
		$("#heroChart").hide();


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
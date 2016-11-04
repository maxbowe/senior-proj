
var clickNum;
function corrUpdate(clickNum) {
  if(clickNum==1){
      corrData.datasets[0].data=[{x:55,y:52,r:25}];
      corrData.datasets[1].data=[{x:45,y:48,r:25}];	  
      CorrChart.update();
  }
  else if(clickNum==2){
      corrData.datasets[0].data=[{x:10,y:10,r:25}];
      corrData.datasets[1].data=[{x:90,y:90,r:25}];
      CorrChart.update();

  }
  else if (clickNum==3){
     corrData.datasets[0].data=[{x:75,y:75,r:25}];
     corrData.datasets[1].data=[{x:25,y:25,r:25}];
     CorrChart.update();
 }


}	

var corrData = {
	animation: {
        duration: 50000
    },
    datasets: [{
        label: "Team Red",
        backgroundColor: 'red',
        data: [{
            x: 75,
            y: 75,
            r: 25
        }]
    }, {
        label: "Team Blue",
        backgroundColor: 'blue',
        data: [{
            x: 25,
            y: 25,
            r: 25
        }]
    }]
};

var ctx = document.getElementById("canvas").getContext("2d");
CorrChart = new Chart(ctx, {
    type: 'bubble',
    data: corrData,
    options: {
        scales: {
         responsive: true,
         yAxes: [{
            ticks: {
                beginAtZero:true,
                max: 100,
                min: 0,
                stepSize: 25,

            },
            scaleLabel: {
                display: true,
                labelString: 'Winning chance',
                fontSize:20
            },
            gridLines:{
              color:"rgba(255,255,255,1)",
              zeroLineColor:"rgba(255,255,255,1)"
          }
        }],
        xAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 25,

            },
            scaleLabel: {
                display: true,
                labelString: 'Corsi For %',
                fontSize:20
            },
            gridLines:{
              color:"rgba(255,255,255,1)",
              zeroLineColor:"rgba(255,255,255,0)",
              scaleLineColor:"rgba(0,0,0,1)"
          }
      }]
  },
  title:{
    display:true,
    text:"Winning Chances X Corsi For %",
    fontSize:28,
    fontFamily:"Calibri"  
}
},
label:{
    fontSize:20

}

});

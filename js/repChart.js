var repNum;
 function repUpdate(repNum) {
     if(repNum==1){
        repData.datasets[0].data=[1025,975];
        repChart.update();
    }
    else if(repNum==2){
        repData.datasets[0].data=[963,1037];
        repChart.update();

    }
  else if (repNum==3){
          repData.datasets[0].data=[1100,900];

        repChart.update();
    }
    else if (repNum==4){

        repData.datasets[0].data=[750,1250];

        repChart.update();
    }
    else if (repNum==5){
      repData.datasets[0].data=[1014,986];

        repChart.update();
    }
    else if (repNum==6){
      repData.datasets[0].data=[950,1050];

        repChart.update();
    }
    
}

var repData = { labels: [
        "# of Heads",
        "# of tails"
    ],
    datasets: [
        {
            data: [950, 1050],
            backgroundColor: [
                "#E8C07F",
                "#58DAFF"
            ],
            hoverBackgroundColor: [
                "#E89C32",
                "#12C5FF"
            ]
    }]}

 var cty = document.getElementById("repGraph").getContext("2d");
 repChart = new Chart(cty, {
    type: 'pie',
    data: repData,
    options:{
        title:{
            display:true,
            text:"Flipping coins",
            fontSize:28,
            fontFamily:"Calibri"  
            },
         legend: {
            display: true,
            position:'bottom',
            labels: {
                fontSize: 20
            }
        }
          
    }	
		 });
    Chart.defaults.global.defaultFontColor = '#fff';

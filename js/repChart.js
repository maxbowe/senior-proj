var repNum;
 function repUpdate(repNum) {
     if(repNum==1){
        repData.datasets[0].data=[800,1200];
        repChart.update();
    }
    else if(repNum==2){
        repData.datasets[0].data=[1150,850];
        repChart.update();

    }
  else if (repNum==3){
      repData.datasets[0].data=[750,1250];

        repChart.update();
    }
    else if (repNum==4){
      repData.datasets[0].data=[920,1080];

        repChart.update();
    }
    else if (repNum==5){
      repData.datasets[0].data=[1500,500];

        repChart.update();
    }
    else if (repNum==6){
      repData.datasets[0].data=[900,1000];

        repChart.update();
    }
    
}

var repData = { labels: [
        "Red",
        "Blue"
    ],
    datasets: [
        {
            data: [900, 1000],
            backgroundColor: [
                "#FF6384",
                "#36A2EB"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
            ]
    }]}

 var cty = document.getElementById("repGraph").getContext("2d");
 repChart = new Chart(cty, {
    type: 'pie',
    data: repData,	
		 });
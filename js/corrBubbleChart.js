var a,b,c;
var i=2;
var data1={x: 75, y:75,r: 32}, data2={x: 25, y: 23,r: 32};
var clickNum
 function corrUpdate(clickNum) {
	 if(clickNum==1){
		dataPlace.datasets[0].data=[{x:55,y:52,r:25}];
		dataPlace.datasets[1].data=[{x:45,y:48,r:25}];	  
		CorrChart.update();
    }
	else if(clickNum==2){
		dataPlace.datasets[0].data=[{x:10,y:10,r:25}];
		dataPlace.datasets[1].data=[{x:90,y:90,r:25}];
		CorrChart.update();

	}
  else if (clickNum==3){
	  dataPlace.datasets[0].data=[{x:75,y:75,r:25}];
		dataPlace.datasets[1].data=[{x:25,y:25,r:25}];
		CorrChart.update();
	}

	
}	

var dataPlace = {
	animation: {
                duration: 50000
            },
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'red',
                data: [{
                    x: 75,
                    y: 75,
                    r: 25
                }]
            }, {
                label: "My Second dataset",
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
    data: dataPlace,
    options: {
        scales: {
			responsive: true,
            yAxes: [{
                ticks: {
                    beginAtZero:true,
					max: 100,
                    min: 0,
                    stepSize: 25
                }
            }],
			 xAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 25
                }
            }]
        }
    }
			
		 });
       
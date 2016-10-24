var a,b,c;
var i=2;
var data1={x: 75, y:75,r: 32}, data2={x: 25, y: 23,r: 32};

 function corrUpdate1() {
            dataPlace={
					animation: {
								duration: 10000
							},
							datasets: [{
								label: "My First dataset",
								backgroundColor: 'red',
								data: [{
									x: 51,
									y: 52,
									r: 25
								}]
							}, {
								label: "My Second dataset",
								backgroundColor: 'blue',
								data: [{
									x: 49,
									y: 48,
									r: 25
								}]
							}]
				  };
				  
            window.CorrChart.update();
        }

var dataPlace = {
	animation: {
                duration: 10000
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

         window.onload = function() {
 var ctx = document.getElementById("canvas").getContext("2d");
             window.CorrChart = new Chart(ctx, {
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
			
		 });};
       
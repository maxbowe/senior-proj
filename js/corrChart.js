/* $(document).ready(function() {

            var max_value = 5

            chartOptions = {
              segmentShowStroke: true,
              percentageInnerCutout: 5,
              animation: false
            };

            chartData = [{
                value: 0,
                color: '#4FD134'
            },{
                value: max_value,
                color: '#DDDDDD'
            }];

            var cty = $('#CorrCanvas').get(0).getContext("2d");
            var theChart = new Chart(cty).Doughnut(chartData,chartOptions);

            $('#CorrCanvas').click(function(){ 
                if (theChart.segments[0].value == max_value) {
                    theChart.segments[0].value =0
                } else {
                    theChart.segments[0].value = theChart.segments[0].value+1
                    theChart.segments[1].value = theChart.segments[1].value-1
                    theChart.update()
                }
            });
      }); */
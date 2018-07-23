var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["May 2018", "June 2018", "July 2018", "August 2018", "September 2018", "October 2018"],
        datasets: [{
            label: '# of Votes',
            data: [0.5, 0.7, 0.8, 1, 1.2, 1.6, 1.9, 2, 2.1, 2.4, 3],
            backgroundColor: [
                'rgba(58, 83, 214, 0.16)'
            ],
            borderColor: [
                '#3A53D6'
            ],
            borderWidth: 3
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      }
    }

    
});
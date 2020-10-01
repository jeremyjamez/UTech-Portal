if(document.getElementById('gpa-history') != null){
    var ctx = document.getElementById('gpa-history').getContext('2d');
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4"],
        datasets: [{
            label: "GPA",
            data: [2.89, 3.0, 2.98, 3.3]
        }],
    };
    
    var options = {
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 20,
                fontColor: 'black'
            }
        }
    };
    
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}
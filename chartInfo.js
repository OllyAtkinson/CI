let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Helvetica Neue Light';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#11152D';

    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Extrovert', 'Introvert', 'Assertive', 'Passive'],
        datasets:[{
          label:'Score',
          data:[
            integer,
            PCorrect,
            ECorrect,
            ICorrect,
            0.0001
          ],
          //backgroundColor:'green',
          backgroundColor:[
            '#E87406',
            '#8D4896',
            '#C1D112',
            '#857650',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#11152D',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Results of CSI',
          fontSize:25
        },
        legend:{
          display:true,
          position:'left',
          labels:{
            fontColor:'#11152D'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
});
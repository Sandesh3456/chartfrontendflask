// console.log(myJson);
var barColors = ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)","hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"];
new Chart(
    document.getElementById('chart_1'),
    {
        type: 'bar',
        data: {
        labels: myJson.map(row => row.day),
        datasets: [
            {
            label:"Amounts in seven days",
            backgroundColor: barColors,
            data: myJson.map(row => row.amount),
            }
        ]
        }
    }
);
let sum = (prev, cur) => {
    return prev + cur;
  }
const arrSum = myJson.map(row => row.amount);
const result = arrSum.reduce(sum, 0);
document.getElementById("month_amount").innerHTML=result;






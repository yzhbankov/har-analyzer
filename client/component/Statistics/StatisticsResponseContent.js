import React, {Component} from 'react'
import Chart from 'chart.js'

import '../style/Statistics.less'

export default class StatisticsResponseContent extends Component {
    componentWillReceiveProps(props){
        console.log(props);
        const dataSet = props.data;
        const ctx = document.getElementById("myChart");
        const data = {
            labels: [
                "Image",
                "CSS",
                "Html",
                "Javascript",
                "Others"
            ],
            datasets: [
                {
                    data: [dataSet.image, dataSet.css, dataSet.html, dataSet.javascript, dataSet.others],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ]
                }]
        };
        const myPieChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontSize: 30
                    }
                },
                animation:{
                    animateScale:true
                }
            }
        });
    }
    render() {
        return (
            <div>
                <canvas id="myChart"></canvas>
            </div>
        )
    }
}
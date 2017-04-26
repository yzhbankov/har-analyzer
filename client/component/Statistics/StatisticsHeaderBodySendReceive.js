import React, {Component} from 'react'
import Chart from 'chart.js'

import '../style/Statistics.less'

export default class StatisticsHeaderBodySendReceive extends Component {
    componentDidMount() {
        if (this.props.data)
            this.buildPieChart(this.props);
    }

    buildPieChart(props) {
        Chart.defaults.global.defaultFontSize = 30;
        const dataSet = props.data;
        const ctx = document.getElementById("headBodyPie");
        const data = {
            labels: [
                "Bodies send",
                "Headers send",
                "Bodies receive",
                "Headers receive"
            ],
            datasets: [
                {
                    data: [dataSet.bodySend, dataSet.headSend, dataSet.bodyReceive, dataSet.headReceive],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED"
                    ]
                }]
        };
        const myPieChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {

                animation: {
                    animateScale: true
                }
            }
        });
    }

    render() {
        return (
            <canvas id="headBodyPie"></canvas>
        )
    }
}
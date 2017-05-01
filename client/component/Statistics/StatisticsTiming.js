import React, {Component} from 'react'
import Radium from 'radium'
import Chart from 'chart.js'

import {canvas} from '../../style/component/statistics'

@Radium
export default class StatisticsTiming extends Component {
    componentDidMount() {
        if (this.props.data)
            this.buildPieChart(this.props);
    }

    buildPieChart(props) {
        Chart.defaults.global.defaultFontSize = 15;
        const dataSet = props.data;
        const ctx = document.getElementById("timingPie");

        const data = {
            labels: [
                "Blocked",
                "Connect",
                "DNS",
                "Receive",
                "Send",
                "SSL",
                "Wait"
            ],
            datasets: [
                {
                    data: [dataSet.blocked, dataSet.dns, dataSet.ssl, dataSet.connect, dataSet.send, dataSet.wait, dataSet.receive],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB",
                        "#f46133",
                        "#7ceb59"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB",
                        "#f46133",
                        "#7ceb59"
                    ]
                }]
        };
        const myPieChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {
                responsive: false,
                animation: {
                    animateScale: true
                }
            }
        });
    }

    render() {
        console.log(canvas);
        return (
            <canvas id="timingPie"></canvas>
        )
    }
}
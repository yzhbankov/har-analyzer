import React, {Component} from 'react'
import Radium from 'radium'
import Chart from 'chart.js'

@Radium
export default class StatisticsTiming extends Component {
    componentDidMount() {
        if (this.props.data)
            this.buildPieChart(this.props);
    }

    buildPieChart(props) {
        Chart.defaults.global.defaultFontSize = 11;
        const dataSet = props.data;
        const id = 'timingPie' + this.props.number;
        const ctx = document.getElementById(id);
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
                    data: [dataSet.blocked, dataSet.connect, dataSet.dns, dataSet.receive, dataSet.send, dataSet.ssl, dataSet.wait],
                    backgroundColor: [
                        "#ff0024",
                        "#4BC0C0",
                        "#FFCE56",
                        "#3ce200",
                        "#36A2EB",
                        "#f46133",
                        "#bf00ff"
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
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels:{
                        boxWidth: 10,
                        padding: 5
                    }
                }
            }
        });
    }

    render() {
        return (
            <canvas style={{margin:'0 auto', height: '200px', width:'200px'}} id={"timingPie" + this.props.number}> </canvas>
        )
    }
}
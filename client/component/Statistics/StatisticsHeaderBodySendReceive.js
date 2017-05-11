import React, {Component} from 'react'
import Radium from 'radium'
import Chart from 'chart.js'

@Radium
export default class StatisticsHeaderBodySendReceive extends Component {
    componentDidMount() {
        if (this.props.data)
            this.buildPieChart(this.props);
    }

    buildPieChart(props) {
        Chart.defaults.global.defaultFontSize = 11;
        const dataSet = props.data;
        const id = "headBodyPie" + this.props.number;
        const ctx = document.getElementById(id);
        const data = {
            labels: [
                "Bod/send",
                "Head/send",
                "Bod/receive",
                "Head/receive"
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
            <canvas style={{margin:'0 auto', height: '230px', width:'230px'}} id={"headBodyPie" + this.props.number}> </canvas>
        )
    }
}
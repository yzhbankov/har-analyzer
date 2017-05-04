import React, {Component} from 'react'
import Radium from 'radium'
import Chart from 'chart.js'

import {canvas} from '../../style/components'

@Radium
export default class StatisticsResponseContent extends Component {
    componentDidMount() {
        if (this.props.data)
            this.buildPieChart(this.props);
    }

    buildPieChart(props) {
        Chart.defaults.global.defaultFontSize = 15;
        const dataSet = props.data;
        const ctx = document.getElementById("receiveContentPie");

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
                responsive: false,
                animation: {
                    animateScale: true
                }
            }
        });
    }

    render() {
        return (
            <canvas style={{margin:'0 auto'}} id="receiveContentPie"> </canvas>
        )
    }
}
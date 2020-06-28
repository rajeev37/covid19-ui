import React from "react";
import InnerHeader from "../InnerHeader/InnerHeader.js";

import LeftSection from "../LeftSection/LeftSection.js";

import RightSection from "../RightSection/RightSection.js";
import { GoogleCharts } from 'google-charts';

class DashBoard extends React.Component {
    componentDidMount() {

        let data, options;
        setTimeout(() => {
            window.google.load('visualization', '1', { packages: ['corechart'] });
            window.google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                setTimeout(() => {
                    data = new window.google.visualization.DataTable();
                    data.addColumn('date', 'Patient Stats');
                    data.addColumn('number', 'Fever');

                    data.addRows([
                        [new Date("2020, 05, 6"), 0], [new Date("2020, 05, 7"), 10], [new Date("2020, 05, 8"), 23], [new Date("2020, 05, 9"), 17], [new Date("2020, 05, 10"), 18],
                        [new Date("2020, 05, 11"), 11], [new Date("2020, 05, 12"), 27], [new Date("2020, 05, 13"), 33], [new Date("2020, 05, 14"), 40], [new Date("2020, 05, 15"), 32]
                    ]);
                    options = {
                        hAxis: {
                            title: 'Date',
                            format: 'YYYY MM DD',
                        },
                        vAxis: {
                            title: 'Fever'
                        },
                        colors: ['#a52714', '#097138'],
                        crosshair: {
                            color: '#000',
                            trigger: 'selection'
                        },
                        animation: {
                            duration: 1000,
                            easing: 'out',
                        },
                    };
                    var dateFormatter = new window.google.visualization.NumberFormat({
                        pattern: 'YYYY MM DD'
                    });
                    dateFormatter.format(data, 0);
                    var chart = new window.google.visualization.LineChart(document.getElementById('chart_div'));
                    chart.draw(data, options);
                    chart.setSelection([{ row: 38, column: 1 }])
                }, 2000);

            };
        }, 2000);

    }
    render() {
        return (
            <section className="r-content" >

                <div id="chart_div" style={{ width: "700px", height: "400px" }}></div>
            </section>
        );
    }
}
export default DashBoard;
import React from "react";
import { Chart } from "react-google-charts";

class DashBoard extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <section className="r-content">
            <h1>DashBoard</h1>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<img src="http://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-11.jpg" width="50px"/>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7],
                ]}
                options={{
                    title: 'My Daily Activities',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
            <br></br>
            <Chart
                width={'300px'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'dogs'],
                    [0, 0],
                    [1, 10],
                    [2, 23],
                    [3, 17],
                    [4, 18],
                    [5, 9],
                    [6, 11],
                    [7, 27],
                    [8, 33],
                    [9, 40],
                    [10, 32],
                    [11, 35],
                ]}
                options={{
                    hAxis: {
                    title: 'Time',
                    },
                    vAxis: {
                    title: 'Popularity',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </section>
    
        );
    }
}
export default DashBoard;
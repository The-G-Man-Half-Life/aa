import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Chart from 'chart.js/auto'

(async function () {
    const data = [
        { year: 2010, count: 10000 },
        { year: 2011, count: 202222 },
        { year: 2012, count: 152333 },
        { year: 2013, count: 252323 },
        { year: 2014, count: 24343 },
        { year: 2015, count: 104343 },
        { year: 2016, count: 28434 },
    ];

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'bar',
            options: {
                aspectRatio: 100000,
                scales: {
                    x:{
                        max:1000000,
                        ticks:{
                            callback: value =>'${value.year}'
                        },
                    },
                    y:{
                        max:data[3].count
                    }
                },
                animation: true,
                plugins: {
                    legend: {
                        display: true
                    },
                    tooltip:{
                        enabled: true
                    }
                }
            },
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'spent',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();
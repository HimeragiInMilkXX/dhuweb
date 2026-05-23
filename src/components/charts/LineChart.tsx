import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const axisColor = "white";
const gridColor = "rgba(255, 255, 255, 0.12)";

const baseAnimation = {
    duration: 1600,
    easing: "easeOutCubic" as const,
};

const labourDemandLineData = {
    labels: [
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "Now",
    ],
    datasets: [
        {
            label: "ウェブ業界の労働需要指数",
            data: [20, 23, 27, 31, 36, 42, 49, 56, 64, 72, 82, 91, 101, 112, 126, 139, 150],
            borderColor: "rgb(46, 171, 255)",
            backgroundColor: "rgba(46, 171, 255, 0.25)",
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            tension: 0,
        },
    ],
};

const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: baseAnimation,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: axisColor,
                padding: 20
            },
        },
        title: {
            display: true,
            text: "ウェブ業界における労働需要の拡大",
            color: axisColor,
            padding: 20
        },
    },
    scales: {
        x: {
            ticks: {
                color: axisColor,
            },
            grid: {
                color: gridColor,
            },
            border: {
                color: axisColor,
            },
        },
        y: {
            beginAtZero: true,
            max: 160,
            ticks: {
                color: axisColor,
            },
            grid: {
                color: gridColor,
            },
            border: {
                color: axisColor,
            },
        },
    },
};

export function LineChart() {
    return (
        <div className="md:aspect-square aspect-4/5 w-4/5">
            <Line data={labourDemandLineData} options={lineOptions} redraw/>
        </div>
    );
}
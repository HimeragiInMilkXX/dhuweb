import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const webIndustryGrowth = [
    10, 12, 15, 18, 22, 27, 33, 40, 48, 57, 64, 70, 77, 84, 91, 97, 100,
];

const data = {
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
        label: "ウェブ業界の成長",
        data: webIndustryGrowth,
        backgroundColor: "rgba(42, 123, 177, 0.5)",
        borderColor: "rgb(46, 171, 255)",
        borderWidth: 1,
        maxBarThickness: 24
        },
    ],
};

const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animations: {
        y: {
            from: (ctx) => {
                const yScale = ctx.chart.scales.y;
                return yScale.getPixelForValue(0);
            },
            duration: 1600,
            easing: "easeOutCubic",
        },
    },
    scales: {
        x: {
        ticks: {
            color: "white",
        },
        border: {
            color: "white",
        },
        },
        y: {
        beginAtZero: true,
        max: 110,
        ticks: {
            color: "white",
        },
        border: {
            color: "white",
        },
        },
    },
    plugins: {
        legend: {
            position: 'bottom',
            labels: { padding: 20 }
        },
        title: {
            display: true,
            text: "ウェブ業界の成長",
            color: 'white',
            padding: 20
        },
    },
};

export default function BarChart() {
    return (
        <div className="md:aspect-square aspect-4/5 w-4/5">
            <Bar data={data} options={options}/>
        </div>
    );
}
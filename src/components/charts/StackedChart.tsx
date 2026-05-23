import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    type ChartData,
    type ChartOptions,
    type ScriptableContext,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const axisColor = "white";
const gridColor = "rgba(255, 255, 255, 0.12)";

const webDepartmentBarData: ChartData<"bar", number[], string> = {
    labels: ["2014", "2016", "2018", "2020", "2022", "2024", "Now"],
    datasets: [
        {
        label: "ウェブ部門あり",
        data: [24, 30, 37, 45, 51, 58, 63],
        backgroundColor: "rgba(46, 171, 255, 0.75)",
        borderColor: "rgb(46, 171, 255)",
        borderWidth: 1,
        },
        {
        label: "ウェブ部門の設置を計画中",
        data: [18, 22, 25, 28, 27, 24, 21],
        backgroundColor: "rgba(20, 184, 166, 0.75)",
        borderColor: "rgb(20, 184, 166)",
        borderWidth: 1,
        },
        {
        label: "ウェブ部門なし",
        data: [58, 48, 38, 27, 22, 18, 16],
        backgroundColor: "rgba(148, 163, 184, 0.75)",
        borderColor: "rgb(148, 163, 184)",
        borderWidth: 1,
        },
    ],
};

const horizontalBarOptions: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    animations: {
        x: {
        from: (ctx: ScriptableContext<"bar">) => {
            const xScale = ctx.chart.scales.x;
            return xScale.getPixelForValue(0);
        },
        duration: 1600,
        easing: "easeOutCubic",
        },
    },
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
            text: "日本における企業のWeb部門の導入状況",
            color: axisColor,
            padding: 20
        },
    },
    scales: {
        x: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
            color: axisColor,
            callback: function (value) {
            return `${value}%`;
            },
        },
        grid: {
            color: gridColor,
        },
        border: {
            color: axisColor,
        },
        },
        y: {
        stacked: true,
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

export default function StackedChart() {
    return (
        <div className="md:aspect-square aspect-4/5 w-4/5">
        <Bar data={webDepartmentBarData} options={horizontalBarOptions} redraw />
        </div>
    );
}

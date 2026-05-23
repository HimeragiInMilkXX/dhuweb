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
import { Pie } from "react-chartjs-2";

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

const itGdpPieData = {
    labels: [
        "ウェブ産業",
        "ソフトウェア / SaaS",
        "ITインフラストラクチャ",
        "ハードウェア",
        "通信 / ネットワーク",
        "その他のITサービス",
    ],
    datasets: [
        {
            label: "IT産業GDPの構成比",
            data: [18, 28, 16, 12, 17, 9],
            backgroundColor: [
                "rgba(46, 171, 255, 0.75)",
                "rgba(42, 123, 177, 0.75)",
                "rgba(99, 102, 241, 0.75)",
                "rgba(14, 165, 233, 0.75)",
                "rgba(20, 184, 166, 0.75)",
                "rgba(148, 163, 184, 0.75)",
            ],
            borderColor: "#000000",
            borderWidth: 4,
        },
    ],
};

const pieOptions: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 1600,
        easing: "easeOutCubic",
        animateRotate: true,
        animateScale: true,
    },
    transitions: {
        resize: {
        animation: {
            duration: 300,
        },
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
            text: "日本のIT産業GDPに占めるウェブ産業の割合",
            color: axisColor,
            padding: 20
        },
    },
};
export function PieChart() {
    return (
        <div className="md:aspect-square aspect-4/5 w-4/5">
            <Pie data={itGdpPieData} options={pieOptions}/>
        </div>
    );
}
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type SubjectData = {
	id: number;
	name: string;
	hours: number;
};

type PieChartProps = {
	data: SubjectData[];
};

const PieChart = ({ data }: PieChartProps) => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);

	const createChart = () => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext('2d');

			if (ctx) {
				new Chart(ctx, {
					type: 'doughnut',
					data: {
						labels: data.map(item => item.name),
						datasets: [
							{
								data: data.map(item => item.hours),
								backgroundColor: [
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 162, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
								],
							},
						],
					},
					options: {
						plugins: {
							title: {
								display: true,
								text: 'Статистика часов по предметам',
							},
							legend: {
								display: true,
								position: 'bottom',
							},
						},
					},
				});
			}
		}
	};

	useEffect(() => {
		createChart();
	}, [data]);

	return <canvas ref={chartRef} />;
};

export default PieChart;

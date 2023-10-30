import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type SubjectData = {
	id: number;
	name: string;
	hours: number;
};

type VerticalBarChartProps = {
	data: SubjectData[];
};

const VerticalBarChart = ({ data }: VerticalBarChartProps) => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);

	const createChart = () => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext('2d');

			if (ctx) {
				new Chart(ctx, {
					type: 'bar',
					data: {
						labels: data.map(item => item.name),
						datasets: [
							{
								label: 'Часы',
								data: data.map(item => item.hours),
								backgroundColor: [
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 162, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
								],
								borderWidth: 1,
							},
						],
					},
					options: {
						indexAxis: 'x', // Инвертируем ось для вертикальной диаграммы
						plugins: {
							title: {
								display: true,
								text: 'Статистика часов по предметам',
							},
							legend: {
								display: false, // Скрываем легенду
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

export default VerticalBarChart;

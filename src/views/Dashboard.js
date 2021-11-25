import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import Heading from 'components/atom/Heading/Heading';
import { GetCamera } from 'api/FetchCamera';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { GetChart } from 'api/FetchChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [data, setData] = useState(null);

  const SetChart = async () => {
    try {
      const res = await GetChart();

      console.log(res.data);
      const arrayData = res.data.reverse();
      const labels = arrayData.map((item) => item[0]);
      setData({
        labels,
        datasets: [
          {
            label: 'Zwierzaki',
            data: arrayData.map((item) => item[1]),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SetChart();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      SetChart();
    }, 120000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MainTemplate>
      <Heading>Jak czesto widziany jest twój futszak ...</Heading>
      {data && <Line style={{ height: '20vh' }} data={data} />}
    </MainTemplate>
  );
};
export default Dashboard;

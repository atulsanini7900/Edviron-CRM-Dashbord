import React from 'react'
import Chart from 'chart.js/auto';
import MyChart from './MyChart';
import MDonutChart from './MDonutChart'



// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
//   import { Bar } from 'react-chartjs-2';
//   import faker from 'faker';

//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );

//   export const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' ,
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Bar Chart',
//       },
//     },
//   };

//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//   export const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };




const AllChart = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Area Chart */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              {/* Card Header - Dropdown */}
              {/* <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Card Body */}
              {/* <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart" />
                                    </div>
                                </div>  */}


              <MyChart />

            </div>
          </div>
          {/* Pie Chart */}
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
            <div class="text-center">
  <h3 class="font-weight-bold text-dark mt-3">Payment Mode</h3>
  <p class="text-center mr-3 ml-3">Split between Online, Cash and Cheque for collections till date</p>
</div>



              <MDonutChart />



            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AllChart
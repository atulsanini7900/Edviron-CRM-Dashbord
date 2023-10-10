import React from 'react'

import MyChart from './MyChart';
import MDonutChart from './MDonutChart'

const AllChart = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Area Chart */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">

              <MyChart />

            </div>
          </div>
          {/* Pie Chart */}
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              <div class="text-center">
                <h3 class="font-weight-bold text-dark mt-3">Payment Mode</h3>
                <p class="text-center mr-3 ml-3">Split between Online, Cash and Cheque for collections till date</p>
                <MDonutChart />
              </div>
             
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AllChart
import React from 'react'
import { FcComboChart } from 'react-icons/fc';
const Card = () => {
    return (
        <div className="container-fluid">
            <div className="col-xl-12 col-md-4 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">

                {/* Card 1 - Collection Till Date */}
                <div className="col-12 col-md-auto col-lg-auto mr-md-4">
                    <i className="fas fa-dollar-sign fa-4x text-success" />
                </div>
                <div className="col-12 col-md mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        <span className="h6 font-weight-bold">Collection till date</span>
                    </div>
                    <div className="h5 mb-2 font-weight-bold text-gray-800">
                        <span className="h2 font-weight-bold">₹5.34Cr</span>
                    </div>
                    <div className="h6 font-weight-bold text-gray-800">
                        <span className="text-success font-weight-bold">10% in last 30 days</span>
                    </div>
                </div>

                {/* Card 2 - Balance */}
                <div className="col-12 col-md-auto col-lg-auto mr-md-4">
                    <i className="fas fa-dollar-sign fa-4x text-primary" />
                </div>
                <div className="col-12 col-md mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        <span className="h6 font-weight-bold">Balance</span>
                    </div>
                    <div className="h5 mb-2 font-weight-bold text-gray-800">
                        <span className="h2 font-weight-bold">₹2.4L</span>
                    </div>
                </div>

                {/* Card 3 - Defaulters */}
                <div className="col-12 col-md-auto col-lg-auto mr-md-4">
                    <FcComboChart className='fa-4x text-gray-300'/>
                </div>
                <div className="col-12 col-md">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        <span className="h6 font-weight-bold">Defaulters</span>
                    </div>
                    <div className="h5 mb-2 font-weight-bold text-gray-800">
                        <span className="h2 font-weight-bold">11</span><sub>/ 1,049 Students</sub>
                    </div>
                    <div className="h6 font-weight-bold text-gray-800">
                        <span className="text-success">11% in the last 30 days</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            <div className="row">
                {/* Students Card */}
                <div className="col-xl-3 col-md-4 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Students</div>
                                    <div class='h2  font-weight-bold'>1,049</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Sections Card */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Sections</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"> <span>
                                        <span class="h2  font-weight-bold">18</span>
                                        <sub> in 12th classes</sub>
                                    </span></div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Collection this month*/}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Collection this month
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"> 
                                        <span class="h2  font-weight-bold">₹90.56L</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    {/* <i className="fas fa-clipboard-list fa-2x text-gray-300" /> */}
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Fine Collected till date card */}


                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Fine Collected till date
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"> 
                                        <span class="h2  font-weight-bold">₹11.20L</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

        </div>




    )
}

export default Card
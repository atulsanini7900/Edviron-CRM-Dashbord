import React from 'react'

const Card = () => {
    return (
        <div className="container-fluid">
            <div className="col-xl-12 col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Students</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">1,049</div>
                            </div>
                            <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}
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
                {/* Earnings (Monthly) Card Example */}
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
                {/* Earnings (Monthly) Card Example */}
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
                {/* Pending Requests Card Example */}


                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">FIne Collected till date
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
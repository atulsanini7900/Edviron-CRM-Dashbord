import React from 'react'
import AdminData from './AdminData'
import DisbursalsData from './DisbursalsData'

const Admin = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Content Column */}
                <div className="col-lg-6 mb-4">
                    {/* Project Card Example */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Admin</h6>
                        </div>
                        <AdminData/>
                    </div>
                    {/* Color System */}

                </div>
                <div className="col-lg-6 mb-4">
                    {/* Illustrations */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Disbursals</h6>
                        </div>
                        <DisbursalsData/>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Admin
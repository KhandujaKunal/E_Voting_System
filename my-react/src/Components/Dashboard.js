import React from 'react'
import './Dashboard.css'

function Dashboard() {


    return (

        <div>

            <div class="main-container">

                <div class="navcontainer">
                    <nav class="nav">
                        <div class="nav-upper-options">
                            <div class="nav-option option1">
                                <h3> Dashboard</h3>
                            </div>
                            
                            <div class="option2 nav-option">
                                <h3> Edit Candidates</h3>
                            </div>

                            <div class="nav-option option3">
                                <h3> Edit Voters</h3>
                            </div>

                            <div class="nav-option option4">
                                <h3> Result Statistics</h3>
                            </div>

                            <div class="nav-option option5">
                                <h3> Candidate Profile</h3>
                            </div>

                            <div class="nav-option option6">
                                <h3> Settings</h3>
                            </div>

                            <div class="nav-option logout">
                                <h3>Logout</h3>
                            </div>
                        </div>
                    </nav>           
                </div>
                
            </div>
          
            
        </div>
    )
}

export default Dashboard

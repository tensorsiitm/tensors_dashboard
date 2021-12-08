import React, { useState} from 'react';
import './prTeam.css';

function PrTeam() {
    const entry=[
        {
            id:0,
            date:"27/11",
            school: "abnfjfc",
            location: "xyz",
            purpose: "pqr",
            call: "pending",
            archive:true,
        },
        {
            id:1,
            date:"27/11", 
            school: "afmfbc",
            location: "xyz",
            purpose: "pqr",
            call: "pending",
            archive:false,
        },
        {
            id:2,
            date:"27/11",
            school: "abc",
            location: "xyz",
            purpose: "pqr",
            call: "pending",
            archive:true,
        },
        {
            id:3,
            date:"27/11", 
            school: "abc",
            location: "xyz",
            purpose: "pqr",
            call: "pending",
            archive:false,
        }
    ]
    
    const[x, setX]=useState(false)
    
    function at(){ setX ( (prevX)=>{ 
        if(prevX===true)return false
        else if (prevX===false) return true
    })}
    
    const onDelete = (y)=>{
        console.log("this is delete.")
    }
    const onArchive = (y)=>{
        console.log("i am happy.")
    }
    const onUnarchive = (y)=>{
        console.log("i am happy.")
    }
    


    return(
        <>
        <nav className="navbar navbar-expand-lg navbarpr navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand mx-4" href="#">PR Team</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active drpd"  onClick={()=>{at()}}>View</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active drpd" >Add new</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link drpd active" onClick={()=>{at()}}>Archives</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        <div className="container my-4">
            <div className="row rowh">
                <div className="col-1 hc">#</div>
                <div className="col-1 hc">date</div>
                <div className="col-3 hc">School</div>
                <div className="col-2 hc">location</div>
                <div className="col-3 hc">purpose</div>
                <div className="col-2 hc">Call Status</div>
            </div>
            {entry.map((a)=>{
                if(a.archive===x) {
                    return(
                        <>
                            <div className="row">
                            <div className="col-1 hc">{a.id}</div>
                            <div className="col-1 hc">{a.date}</div>
                            <div className="col-3 hc">{a.school}</div>
                            <div className="col-2 hc">{a.location}</div>
                            <div className="col-3 hc">{a.purpose}</div>
                            <div className="col-2 hc">{a.call}</div>
                            </div>
                        </>
                    )
                }
            })}
        </div>
    </>
    )
}

export default PrTeam;
import React from 'react'
import "./Leads.css";
import Leads_avalible from "./Leads_avalible";
import Leads_reject from "./Leads_reject";
import Leads_success from "./Leads_success";



export default function Leads() {
    return (
        <div className='row'>
            <Leads_avalible />
            <Leads_reject />
            <Leads_success />
        </div>
    )
}

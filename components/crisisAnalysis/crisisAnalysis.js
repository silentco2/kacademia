'use client'
import { useState } from "react"
import GlassSelector from "../glassSelector/glassSelector"
import RiskStudents from "./riskStudents"
import LowEngagement from "./lowEngagement"
import CommonDiffculties from "./commonDiffculties"
import Classes from './crisisAnalysis.module.css'
const items = ['At-Risk Students','Low Engagement', 'Common Difficulties']
const riskStudents = [{name:'osamaKh', email:'osamakhalifa333@gmail.com',completed:1,total:5}, {name:'AhmedKh', email:'ahmedmk03@gmail.com',completed:1,total:3},{name:'ayatKh', email:'ayat333@gmail.com',completed:3,total:5}]
const lowStudents = [{name:'osamaKh', email:'osamakhalifa333@gmail.com'}, {name:'AhmedKh', email:'ahmedmk03@gmail.com'}]
const diffculties = [{name:'The Mole', number:1, total:1}, {name:'Quantum Theory', number:1, total:1,}]
function CrisisAnalysis() {
    const [crisis,setCrisis] = useState('At-Risk Students')
    return (
        <>
            <GlassSelector items={items} selected={crisis} setSelected={setCrisis}/>
            <div className={`${Classes.crisis} glass-card`}>
                {crisis==='At-Risk Students'?<RiskStudents students={riskStudents}/>:crisis==='Low Engagement'?<LowEngagement students={lowStudents}/>:<CommonDiffculties diffculties={diffculties}/>}
            </div>
        </>
    )
}

export default CrisisAnalysis

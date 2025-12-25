import { Bot } from 'lucide-react'
import Buttons from '../buttons/buttons'
import Classes from './crisisAnalysis.module.css'
function riskStudents({students}) {
    return (
        <div className={Classes.crisisContainer}>
            <ul className={Classes.students}>
                {students.map(student=>riskStudent(student))}
            </ul>   
            <Buttons text='AI Analysis' icon={<Bot/>} bgcolor='var(--btn-purple)'/>
        </div>   
    )
}
function riskStudent(student){
    const percent = Math.round(student.completed/student.total*100)
    return(
        <li key={student.name} className={Classes.student}>
            <h2>{student.name} <span className={Classes.badge}>{percent}% Average</span></h2>
            <p>{student.email}</p>
            <progress className={Classes.progress} max={student.total} value={student.completed}>{percent}%</progress>
            <label className={Classes.smallText}>{student.completed} assessments completed</label>
        </li>
    );
}

export default riskStudents

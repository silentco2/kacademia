import { Bot } from 'lucide-react'
import Buttons from '../buttons/buttons'
import Classes from './crisisAnalysis.module.css'
function lowEngagement({students}) {
    return (
        <div className={Classes.crisisContainer}>
            <ul className={Classes.students}>
                {students.map(student=>lowStudent(student))}
            </ul>   
            <Buttons text='AI Analysis' icon={<Bot/>} bgcolor='var(--btn-purple)'/>
        </div> 
    )
}
function lowStudent(student){
    return(
        <li key={student.name} className={Classes.student}>
            <h2>{student.name}</h2>
            <p>{student.email}</p>
        </li>
    );
}
export default lowEngagement

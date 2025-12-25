import { Sparkles } from 'lucide-react';
import Buttons from '../buttons/buttons';
import Classes from './crisisAnalysis.module.css'
function commonDiffculties({diffculties}) {
    return (
        <>
            <ul className={`${Classes.students} ${Classes.diffculties}`}>
                {diffculties.map(difficulty=>commonDifficulty(difficulty))}
            </ul>
            <Buttons text='Generate Remedial Lesson Plan' icon={<Sparkles />} bgcolor='var(--btn-purple)'/>
        </>
    )
}
function commonDifficulty(difficulty){
    return(
        <li className={Classes.student}>
            <h2>{difficulty.name} <span className={Classes.badge} style={{float:'right'}}>{difficulty.number} student struggling</span></h2>
            <progress className={Classes.progress} max={difficulty.total} value={difficulty.number}>{difficulty.number*100}%</progress>
            <label className={Classes.smallText}>{difficulty.number*100}% of class needs support in this area</label>
        </li>
    );
}
export default commonDiffculties

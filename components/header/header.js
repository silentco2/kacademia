import Button from "../buttons/buttons"
import { TriangleAlert } from "lucide-react";
import classes from './header.module.css'
function header({username}) {
    return (
        <header className={`${classes.header} glass-card`}>
            <div>
                <h1>Welcome back, {username}!</h1>
                <p>AI-powered insights and recommendations for your classes</p>
            </div>
            <Button text="AI Alerts" icon={<TriangleAlert/>} bgcolor="var(--btn-sunset)"/>
        </header>
    )
}

export default header

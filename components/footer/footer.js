import { CircleQuestionMark, Mail, Shield } from 'lucide-react'
import Classes from './footer.module.css'
function footer() {
    return (
        <footer className={`${Classes.footer} glass-card`}>
            <div className={Classes.footerContent}>
                <p>&copy; 2025 K Academy</p>
                <nav>
                    <a className={Classes.footerLink}><CircleQuestionMark className={Classes.footerIcon} size={16}/> Help</a>
                    <a className={Classes.footerLink}><Mail className={Classes.footerIcon} size={16}/> Contact</a>
                    <a className={Classes.footerLink}><Shield className={Classes.footerIcon} size={16}/> Privacy</a>
                </nav>
            </div>
        </footer>
    )
}

export default footer

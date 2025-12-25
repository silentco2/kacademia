import Classes from './submissions.module.css'
function submissions() {
    return (
        <div className={`${Classes.submissions} glass-card`}>
            <h2>Recent Submissions</h2>
            <p className={Classes.empty}>No recent submissions</p>
        </div>
    )
}

export default submissions

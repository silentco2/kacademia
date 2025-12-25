'use client'
import { useState } from 'react'
import { TrendingUp } from 'lucide-react'
import GlassSelector from '../glassSelector/glassSelector'
import AnalyticsWindow from './analyticsWindow'
import Classes from './analyticsBoard.module.css'
const items = ['Exam Forecasts', 'Knowledge Decay', 'Collabration Patterns', 'Lesson Modification', 'Student Trends', 'Team Cohesion Predictions']
function AnalyticsBoard() {
    const [analysis,setAnalysis] = useState('Exam Forecasts')
    return (
        <div className={`${Classes.board} glass-card`}>
            <div className={Classes.title}>
                <TrendingUp size={32}/>
                <div className={Classes.text}>
                    <h1>Advanced Predictive Analytics</h1>
                    <p>Multi-dimensional AI forecasting and interventions</p>
                </div>
            </div>
            <GlassSelector items={items} selected={analysis} setSelected={setAnalysis}/>
            <AnalyticsWindow analysis={analysis}/>
        </div>
    )
}

export default AnalyticsBoard

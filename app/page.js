import { ClipboardList, GraduationCap, TrendingUp, UsersRound, Play, Plus, Sparkles } from "lucide-react"
import Header from "../components/header/header";
import DataList from "../components/linkList/dataList";
import AnalyticsBoard from "../components/analyticsBoard/analyticsBoard";
import CrisisAnalysis from "../components/crisisAnalysis/crisisAnalysis";
import Submissions from "../components/submissions/submissions";
import QuickList from "../components/linkList/quickList"
import Footer from "../components/footer/footer";
import Classes from "./page.module.css";
const data = [
    {title:'Total Classes', content:'2', color:'blue', icon:<UsersRound/>}, 
    {title:'Total Students', content:'1', color:'purple', icon:<GraduationCap/>}, 
    {title:'Active Quizzes', content:'2', color:'rose', icon:<ClipboardList/>}, 
    {title:'Average Class Score', content:'20 %', color:'green', icon:<TrendingUp/>}
]
const quick = [
    {title:'Create Assignment', content:'New assignment', icon:<Plus/>, color:'blue'},
    {title:'Video Assignment', content:'Interactive video', icon:<Play/>, color:'red'},
    {title:'Generate Lesson Plan', content:'AI-powered planning', icon:<Sparkles/>, color:'purple'},
    {title:'Create Quiz', content:'Build assessment', icon:<ClipboardList/>, color:'rose'}
]
export default function Home() {
  return (
    <>
      <main className={`${Classes.main} main`}>
        <Header username="Osama Khalifa"/>
        <DataList cards={data}/>
        <AnalyticsBoard/>
        <CrisisAnalysis/>
        <Submissions/>
        <h2>Quick Actions</h2>
        <QuickList cards={quick}/>
      </main>
      <Footer/>
    </>
  );
}
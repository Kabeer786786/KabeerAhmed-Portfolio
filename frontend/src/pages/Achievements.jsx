import AchievementList from "../components/achievements/AchievementList";
import achievements from "../constants/achievements"

export default function Achievements() {
  
  return (
    <div className="flex flex-col gap-4 items-start justify-start p-6 pb-24" style={{maxHeight:"80vh",overflow:"auto",maxWidth:"1400px"}}>
      <AchievementList achievements={achievements} />
    </div>
  )
}

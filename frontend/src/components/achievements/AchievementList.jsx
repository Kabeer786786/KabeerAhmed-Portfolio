/* eslint-disable react/prop-types */
import AchievementCard from './AchievementCard'

export default function AchievementList({achievements}) {
  return (
    <div className='flex items-center justify-center m-auto'> 
    <div className="grid xl:grid-cols-2 gap-4 items-center justify-center m-auto">
    {
      achievements.map((achievement,index) => {
        return <AchievementCard key={index} image={achievement.image} title={achievement.title} subtitle={achievement.subtitle} year={achievement.year} info={achievement.info} />
      })
    }
    </div>
    </div>
  )
}
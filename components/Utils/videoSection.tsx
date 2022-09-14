import dynamic from "next/dynamic"
import style from '../../styles/components/utils/videos.module.scss'

const VimeoEmbed = dynamic(() => import('./vimeoEmbed'))

const VideoSection = () => {
    const worksInProgress = [
        {id:'259784444', date: 'March', year: '2021', title: 'Test BB8 Animation', description: 'Test BB8 animation made in AE with Element3D'}, 
        {id:'254497683', date: 'February', year: '2021', title: 'Test UFO Animation', description: 'Test "UFO Shower" animation made in AE with Element3D'}
    ]

    return (
        <div className={style.container}>
            {worksInProgress.map(work => {
                return <div key={work.id}>
                    <div className={style.wip}>
                        <div className={style.calendar}>
                            <h3 className={style.date}>{work.date} </h3>
                            <h3 className={style.year}>{work.year} </h3>
                        </div>
                        <div className={style.video_section}>
                            <h2 className={style.title}>{work.title} </h2>
                            <div className={style.video_container}>
                                    <VimeoEmbed  width="900" height="550" embedId={work.id}/>
                            </div>
                            <div className={style.video_description}>
                                <p>{work.description} </p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default VideoSection 
import style from '../styles/components/works.module.scss'

const Works: React.FC = () => {
    return(
        <>
            <section className={style.work_container}>
                <div className={style.filterBar} id="filterBar">
                <ul className={style.filterList} id="filterList">
                    <li className={style.filterList_Item} id="All">All</li>
                    <li className={style.filterList_Item} id="Branding-Design">Branding</li>
                    <li className={style.filterList_Item} id="Retouching-Work">Photo Manipulation</li>
                </ul>
                </div>
                <div className={style.workGrid} id="workGrid"></div>
            </section>
        </>
    )
}

export default Works
import Head from 'next/head'
import style from '../../../styles/components/generalComponents/footer.module.scss'

const Footer = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
            </Head>
            <footer className={style.footer_container}>
                <div className={style.footer_item_1}>
                    <h4 className={style.h4_text}>2021 | Santiago Rimoldi | All rights reserved</h4>
                </div>
                <nav className={style.footer_item}>
                    <div className={style.footer_item_item}>
                        <a href="https://www.behance.net/rimoldi" target="_blank" rel="noreferrer"><i className="fab fa-behance"></i></a>
                    </div>
                    <div className={style.footer_item_item}>
                        <a href="https://www.linkedin.com/in/rimoldi/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className={style.footer_item_item}>
                        <a href="https://vimeo.com/rimoldi" target="_blank" rel="noreferrer"><i className="fab fa-vimeo-v"></i></a>
                    </div>
                    <div className={style.footer_item_item}>
                        <a href="https://www.instagram.com/rimoldi.design/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </nav>
            </footer>
        </>

    )
}

export default Footer
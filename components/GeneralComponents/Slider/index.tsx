import dynamic from 'next/dynamic'
import sliderOne from '../../../public/assets/general/Lighthouse_Slider.webp'
import sliderTwo from '../../../public/assets/general/Mut_Slider.webp'
import sliderThree from '../../../public/assets/general/Suns_Race_Slider.webp'
import style from '../../../styles/components/generalComponents/slider.module.scss'

const Image = dynamic(() => import('next/image'))

const Slider: React.FC = () => {
    return(
        <>
          <section className={style.slider_container}>
             <div id="slider_carousel" className={style.slider_carousel} >
                <div className={style.slider_one}>
                  <Image
                        src={sliderOne}
                        alt="Lighthouse's Photo Manipulation Work"
                        priority
                        width='2048px'
                        height='1152px'
                    />
                </div>
                <div className={style.slider_two}>
                  <Image
                          src={sliderTwo}
                          alt="Arquitect Studio's Branding Work"
                          priority
                          width='2048px'
                          height='1152px'
                      />
                </div>
                <div className={style.slider_three}>
                  <Image
                          src={sliderThree}
                          alt="Enduro Race's Photo Manipulation Work"
                          priority
                          width='2048px'
                          height='1152px'
                      />
                </div>
              </div>
            </section>
        </>
    )
}

export default Slider
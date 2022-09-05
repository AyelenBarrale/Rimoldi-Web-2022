import React from 'react'
import dynamic from 'next/dynamic'
import {LazyMotion, domAnimation, m} from 'framer-motion'
import images from './imagesSlider'
import style from '../../../styles/components/generalComponents/slider.module.scss'

const Image = dynamic(() => import('next/image'))

const Slider: React.FC = () => {
  // const [index, setIndex] = useState(0)

  // const handleNextSlide = () => {
  //   if(index === images.length -1) {
  //     setIndex(0)
  //     return
  //   }
  //   setIndex(index + 1)
  // }

  // const handlePrevtSlide = () => {
  //   if(index === 0) {
  //     setIndex(images.length -1)
  //     return
  //   }
  //   setIndex(index - 1)
  // }

    return(
        <>
          <div className={style.carousel}>
            <div className={style.inner_carousel}>
              {images.map((image) => {
                return(
                  <>
                    <LazyMotion features= {domAnimation}>
                      <m.div key={image.id} className={style.item} animate={{x: -2850}} transition={{repeat: Infinity, repeatType: "loop", repeatDelay: 1, duration: 10, delayChildren: 0.5}}>
                        <Image 
                          src={image.src}
                          alt={image.alt}
                          priority
                          width={image.width}
                          height={image.height}
                        />
                      </m.div>
                    </LazyMotion>
                  </>
                )
              })}
              {/* <Image 
                      src={images[index].src}
                      alt={images[index].alt}
                      priority
                      width={images[index].width}
                      height={images[index].height}
                    /> */}
            </div>
            {/* <motion.div>
              <button className={style.prev_button} onClick={handlePrevtSlide}>prev</button>
              <button className={style.next_button} onClick={handleNextSlide}>next</button>
            </motion.div> */}
          </div>
        </>
    )
  }
  
  export default Slider
  
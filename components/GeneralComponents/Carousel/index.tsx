import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import style from '../../../styles/components/generalComponents/carousel.module.scss'

const Image = dynamic(() => import('next/image'))

interface Props {
    images: string[],
    autoPlay?: boolean
}

const Carousel = (props : Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(props.images[0])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (props.autoPlay) {
          const interval = setInterval(() => {
            selectNewImage(selectedIndex, props.images);
          }, 3000);
          return () => clearInterval(interval);
        }
    });
    
    const selectNewImage = (selectedIndex: number, images: string[], next = true) => {
        setLoaded(false)
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1 
            setSelectedImage(images[nextIndex])
            setSelectedIndex(nextIndex)
        }, 500)
    }

    const handlePrevtSlide = () => {
        selectNewImage(selectedIndex, props.images, false)
    }

    const handleNextSlide = () => {
        selectNewImage(selectedIndex, props.images)
    }
    return (
        <>
        <div className={style.carousel}>
            <div className={[style.item, loaded && style.loaded].join(" ")}>
                <Image 
                src={require(`../../../public/assets/general/${selectedImage}`).default}
                alt={''}
                priority
                width={'2048px'}
                height={'1152px'}
                onLoad={() => setLoaded(true)}
                />
            </div>
          <div>
            <button className={style.prev_button} onClick={handlePrevtSlide}>{'<'}</button>
            <button className={style.next_button} onClick={handleNextSlide}>{'>'}</button>
          </div>
        </div>
      </>
    )

}

export default Carousel
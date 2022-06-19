import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const Slider = () => {
  const [refCallback] = useKeenSlider()
  return (
    <div>
      <div
        ref={refCallback}
        className='keen-slider h-[40vh] object-cover object-[10%_30%]'
      >
        <div className='keen-slider__slide object-cover object-[0_90%]'>
          <img src='/img/g1.jpg' alt='g1' />
        </div>
        <div className='keen-slider__slide'>
          <img src='/img/g2.jpg' alt='g1' />
        </div>
        <div className='keen-slider__slide'>
          <img src='/img/g1.jpg' alt='g1' />
        </div>
      </div>
    </div>
  )
}

export default Slider

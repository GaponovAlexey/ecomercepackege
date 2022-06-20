import { useTheme } from 'next-themes'
import Marquee from 'react-fast-marquee'
import useMeasure from 'react-use-measure'
const MainPageTwo = () => {
  const { theme, setTheme } = useTheme()
  const [ref, bounds] = useMeasure()
  return (
    <div>
      <Marquee direction={'right'} gradient={false} loop={1}>
        <div>
          <img src='/img/g1.jpg' alt='da' width='300px' />
        </div>
        <div>
          <img src='/img/g2.jpg' alt='da' width='300px' />
        </div>
        <div>
          <img src='/img/g1.jpg' alt='da' width='300px' />
        </div>
        <div>
          <img src='/img/g2.jpg' alt='da' width='300px' />
        </div>
      </Marquee>
      <div>
        <div className='h-[50px]  flex flex-wrap' ref={ref}>
          left:{bounds.left}
          <br />
          right:{bounds.right}
        </div>
      </div>
    </div>
  )
}

export default MainPageTwo

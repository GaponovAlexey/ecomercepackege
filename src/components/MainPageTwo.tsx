import { useTheme } from 'next-themes'
import Marquee from 'react-fast-marquee'
import useMeasure from 'react-use-measure'
import HoverEfect from './CssCard/HoverEfect'
import PhotoGaleray from './CssCard/PhotoGaleray'
import { Example } from './Hooks'
const MainPageTwo = () => {
  const { theme, setTheme } = useTheme()
  const [ref, bounds] = useMeasure()
  return (
    <div>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <br />
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
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
      {/* image button */}
      <div>
        <button className='oneButton'>send</button>
      </div>
      <div>
        <HoverEfect />
      </div>
      &#128576; &#128030;
      <div>
        <Example />
      </div>
    </div>
  )
}

export default MainPageTwo

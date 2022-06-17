import { useRef, useState } from 'react'
import { useSpring, a } from 'react-spring'

const MainSpring = () => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  // style
  const c =
    'absolute  max-w-auto max-h-[500px] w-4/5 h-[40vh] pointer will-change-transform-opacity'
  const back = 'bg-back bg-cover bg-center'
  const front = 'bg-front bg-cover bg-center'

  return (
    <div>
      <div onClick={() => set(!flipped)}>
        <a.div
          className={`${c} ${back}`}
          style={{ opacity: opacity.to((o) => 1 - o), transform }}
        />
        <a.div
          className={`${c} ${front}`}
          style={{
            opacity,
            transform,
            rotateX: '180deg',
          }}
        />
      </div>
    </div>
  )
}

export default MainSpring

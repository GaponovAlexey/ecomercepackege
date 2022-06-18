import * as Accordion from '@radix-ui/react-accordion'
import AccordionDemo from './radix/Acordion'
import DropdownMenuItemComponent from './radix/drop-down'
import MainSpring from './Spring/MainSpring'
import Water from './Spring/WaterAnimate'
import * as EmailValidator from 'email-validator';
 

const Mein = () => {
  const validator = EmailValidator.validate("test@email.com");
  console.log(validator)
  
  return (
    <div className='relative'>
      {/* water */}
      <div
        className='grid grid-cols-2 text-center
      content-center place-self-center place-items-center
      origin-center object-center justify-center bg-center snap-center items-center '
      >
        <Water />
        <Water />
      </div>
      <section className='mt-4'>
        {/* // radix-ui */}
        <div className='left absolute right-0 top-0 '>
          <DropdownMenuItemComponent />
        </div>
        <div>
          <AccordionDemo />
        </div>
        {/* // spring */}
        <div>
          <h2 className='text-2xl text-center mt-2'>Spring</h2>
          <div className='grid mb-[350px] grid-cols-3 justify-center '>
            <div className='relative 00'>
              <MainSpring />
            </div>
            <div className='relative'>
              <MainSpring />
            </div>
            <div className='relative'>
              <MainSpring />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mein

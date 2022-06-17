import * as Accordion from '@radix-ui/react-accordion'
import AccordionDemo from './radix/Acordion'
import DropdownMenuItemComponent from './radix/drop-down'
const Mein = () => {
  return (
    <div className='relative'>
      <div className='text-2xl text-center'>Main</div>
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
          <h2 className='text-2xl text-center mt-2'>spring</h2>
        </div>
      </section>
    </div>
  )
}

export default Mein

import * as Accordion from '@radix-ui/react-accordion'
import AccordionDemo from './Acordion'
import DropdownMenuItemComponent from './drop-down'
const Mein = () => {
  return (
    <div className='relative'>
      <div className='text-2xl text-center'>Main</div>
      <section className='mt-4' >
        <div className='left absolute right-0 top-0 '>
          <DropdownMenuItemComponent />
        </div>
        <div>
          <AccordionDemo />
        </div>
      </section>
    </div>
  )
}

export default Mein

import * as Accordion from '@radix-ui/react-accordion'
const Mein = () => {
  return (
    <div>
      <div className='text-2xl text-center'>Main</div>
      <section>
        <div>
          <Accordion.Root type='single' defaultValue='item-2'>
            <Accordion.Item value='item-1'>…</Accordion.Item>
            <Accordion.Item value='item-2'>…</Accordion.Item>
          </Accordion.Root>
        </div>
      </section>
    </div>
  )
}

export default Mein

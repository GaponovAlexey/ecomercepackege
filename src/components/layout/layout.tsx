import Link from 'next/link'

const Layout = ({ children }: any) => {
  return (
    <div>
      <header>
        <div className='grid grid-cols-2 px-2 bg-slate-400'>
          <h1>ICO</h1>
          <div className='flex justify-between  '>
            <button>
              <Link href='/'>test1</Link>
            </button>
            <button>
              <Link href='/swr'>test2</Link>
            </button>
            <button>test3</button>
          </div>
        </div>
      </header>
      <main className='min-h-screen m-[2%_5%] grid grid-cols-tem'>
        {children}
      </main>
      <footer className='p-2 text-center bg-slate-400'>footer</footer>
    </div>
  )
}

export default Layout

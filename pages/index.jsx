import Hero from '@/components/main/hero section/Hero'
import Nav from '@/components/navbar/Nav'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>shehub</title>
        <meta name="description" content="portfolio of shehab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sh.ico" />
      </Head>

     


      <nav className='bg-[#E1E8EA]'>
<Nav/>
      </nav>

      <main className='bg-[#E1E8EA]'>
        <Hero/>
      </main>

      <footer></footer>
    
    </>
  )
}

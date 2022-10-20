import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LMTD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="banner">
        <h3>A New Way to Sell Verifiable</h3>
        <h1>Limited Edition Luxury Goods</h1>
        <p>Finally a next-generation E-Commerce platform built exclusively for creators who demand the very best for their work. If you want to sell coffee cups and T-Shirts, LMTD is not for you.</p>
        <div className="button-row">
          {/* <button className="filled">LEARN MORE</button> */}
          <form name="contact" method="POST" data-netlify="true">
            <input type="text" placeholder='YOUR EMAIL ADDRESS' className='input' />
          </form>
          <button className='outline'>APPLY FOR ACCESS</button>
        </div>
        <div className='coa'>
          <img className="resp-image" src="/COA.png" />
        </div>
      </div>
      {/* <div className='form-container'>
        <h3>Apply for Early Access</h3>
        <h1>Join our Pre-Launch List</h1>
        <form className='form-box'>
          <h4>APPLY FOR ACCESS</h4>
          <div className='form'>
            <input className='text' type='text' placeholder="name" />
          </div>
          <button>APPLY</button>
        </form>
      </div> */}

      {/* <Footer /> */}
    </div>
  )
}

import { Shield, Cpu, Network, Database, Zap, Globe } from 'lucide-react'

function Hero() {
  return (
    <section className="hero">
      <div className="container1">
        <div className='container4'>
            <div className='container2'>
                <img src="src\assets\Group 26.png" className="img1"></img>
                <div className='content'>
                  <div className='upper'>
                    Indonesia's First <strong>BlockChain-Based</strong> Digital <strong>Arisan</strong>
                  </div>
                  <div className='lower'>
                    <div className='join'><a href="#">JOIN</a></div>
                    <div className='create'><a href="#">CREATE</a></div>
                  </div>
                </div>
            </div>
            <img src="src\assets\Group 27.png" className='img3'></img>
        </div>
      </div>
      <div>
        <img src="src\assets\Group 28.png" className='img4'></img>
      </div>
    </section>
  )
}

export default Hero
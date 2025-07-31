import { Eye, Shield, Zap } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: <Eye size={40} />,
      title: "Transparent Process",
      description: "All transactions and verification are recorded on the blockchain, providing full transparency and auditability for every identity verification process."
    },
    {
      icon: <Shield size={40} />,
      title: "Secure by Design",
      description: "Built with enterprise-grade security, utilizing advanced cryptography and decentralized architecture to protect user data and prevent unauthorized access."
    },
    {
      icon: <Zap size={40} />,
      title: "Fast and Automated",
      description: "Streamlined identity verification process using smart contracts and automation, reducing verification time from days to minutes while maintaining accuracy."
    }
  ]

  return (
    <section className="features" id="features">
      <div className='feature1'>
        <h2>ABOUT ARISCHAIN</h2>
        <div className='h2-line'>
            <img src="src\assets\Vector 9.png" alt="" />
        </div>
      </div>
      <img src="src\assets\Group 30.png" alt="" className='line'/>
      <div className='move-feature'>
        <div className='feature2'>
        <div className='side1'>
            <img src="src\assets\260aff6c2776ab2a24f9a2871488b230 1.png" alt="" className='content-img' id='upper' />
            <div className='side1-content'>
                <h3>Secure By Design</h3>
                <p>Funds are locked in smart contracts, eliminating the risk of fraud or misuse by individuals.</p>
            </div>
            <img src="src\assets\e355e01e5a56c75cfc1d15b816f45a10 1.png" alt="" className='content-img' id='lower'/>
        </div>
        <div className='side2'>
            <img src="src\assets\Group 29.png" alt="" />
        </div>
        <div className='side3'>
            <div className='side3-content-upper'>
                <h3>Transparent Process</h3>
                <p>All transactions and schedules are recorded on the blockchain, ensuring full visibility for every participant.</p>
            </div>
            <img src="src\assets\2e4acca6b73bdd8734a158764e433b1e 1.png" alt="" className='content-img'/>
            <div className='side3-content-lower'>
                <h3>Fair and Automated</h3>
                <p>Drawings and payouts run automatically based on predefined rules, ensuring fairness without manual intervention.</p>
            </div>
        </div>
      </div>
      </div>
      <div className='feature3'>
        <img src="src\assets\Vector 13.png" alt="" />
      </div>
    </section>
  )
}

export default Features
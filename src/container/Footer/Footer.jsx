import React from 'react'
import './Footer.scss'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className="container ">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="footer__links text-center">
                        <a href="mailto:rudra.010402@gmail.com"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/rudra-140207" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.instagram.com/rowdy_rudra07/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/rudra-pratap-singh-261bb1242/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-center">
                    <p className="footer__copy">Copyright &copy; {year} Rudra Pratap Singh</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

import './App.css';
import ContactForm from './ContactForm';

function App() {
  const handleScrollToTop = () => {
    window.location.href = '#top';
  };

  return (
    <>
      <nav className="social">


        <ul>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/bradleyyang">GitHub <i className="fa fa-github"></i></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bradley-yang/">LinkedIn <i
            className="fa fa-linkedin"></i></a></li>
          <li><a className="link-to-mail" href="#about">Email <i className="fa fa-envelope"></i></a></li>
        </ul>
      </nav>

      <div className="stars-page">
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>




        <header id="top" className="header">



          <div className="header-main">











            <div className="fade-in-text">
              <h1 id="style-1">
                Hi, I'm Bradley
              </h1>


              <div className="typewriter" id="style-2">
                <div className="typing-demo">
                  I'm a Mathematics Student @ UWaterloo
                </div>
              </div>


              <p id="style-3">
                Explore around to find more about my projects & experiences
              </p>




















            </div>
            <div id="style-4"></div>
            <div className="center-con">
              <a href="#about">
                <div className="round">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </a>
            </div>
          </div>


        </header>
      </div>









      <nav id="navbar" className="sticky navbar">
        <div className="brand  display__logo">
          <a href="#top" className="nav__link"><img className="logo" src="/images/logo.png" alt="logo"/></a>
        </div>

        <input type="checkbox" id="nav" className="hidden" />
        <label for="nav" className="nav__open"><i></i><i></i><i></i></label>

        <div className="nav">
          <ul className="nav__items">
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#experience" className="nav__link">Experience</a></li>
            <li className="nav__item"><a href="#portfolio" className="nav__link">Portfolio</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>




        <section className="about">
          <div id="about">
            <h1>About</h1>
          </div>





          <div className="about-card">
            <div className="card2">
              <p id="style-5">
                &#128075; Hi, I'm Bradley Yang, a second year mathematics student at the <a rel="noreferrer" target="_blank"
                  href="https://uwaterloo.ca/">University of Waterloo</a><br /> <br />
                &#x1F525; I'm passionate about building coding projects and hackathons
                <br /> <br />
                &#x1F4BC; Currently I'm working at <a target="_blank" rel="noreferrer" href="https://www.haneco.ca/">Haneco Lighting Canada
                  Inc</a> as an Energy Specialist
                <br /><br />
                <i className="fa fa-envelope" aria-hidden="true"></i> Business Email: <a id="mail-link"
                  href="mailto:b33yang@uwaterloo.ca">b33yang@uwaterloo.ca</a>
              </p>

            </div>
          </div>























        </section>



        <section className="experience">
          <div id="experience">
            <h1>Experience</h1>
          </div>



          <section className="design-section">
            <div className="timeline">
              <div className="timeline-empty">
              </div>

              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="card1 timeline-component">
                <div className="job-descr">
                  <h1>Kumon</h1>
                  <p>Feb. 2023 - May 2023</p>
                  <p>Math Tutor</p>
                </div>
              </div>
              <div className="card1 timeline-component">
                <div className="job-descr">
                  <h1>Haneco Lighting Canada Inc</h1>
                  <p>May 2024 - Aug 2024</p>
                  <p>Energy Specialist</p>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>







            </div>

          </section>
























        </section>


        <section className="portfolio">

          <div id="portfolio">
            <h1>
              Portfolio
            </h1>
          </div>

          <div className="projects-container">
            <div className="card">
              <img src="/images/memo-logo.jpeg" alt="Memo"/>

              <div className="card__content">

                <p className="card__title">
                  <span><a target="_blank" rel="noreferrer" href="https://github.com/bradleyyang">Memo</a> </span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="#ffffff"
                      d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                  </svg>
                </p>

                <p className="card__description">Memo offers effortless expense tracking. Capture receipts with your webcam, and
                  Memo instantly provides insights into your spending habits, including time, location, price, and store
                  details. With its intuitive interface, managing finances has never been easier.</p>
              </div>
            </div>

          </div>










        </section>




        <section className="contact">
          <div id="contact">
            <h1>
              Contact
            </h1>
          </div>
          <ContactForm />
          












        </section>
      </main>

      <footer className="footer">

        <div className="social-links">

          <div>
            <ul>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/bradleyyang">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fa fa-github"></span>
                </a>
              </li>

              <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bradley-yang/">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fa fa-linkedin"></span>
                </a>
              </li>

              <li>
                <a className="link-to-mail" href="#about">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fa fa-envelope"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="back-to-top">
          <button onClick={handleScrollToTop} className="button">
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z">
              </path>
            </svg>
          </button>

        </div>







      </footer>
    </>
  );
}

export default App;

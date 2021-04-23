import covidPic from './assests/covidLogo.jpeg'
import './style.css'
const Portfolio = () => {
  return (
    <>
      <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-light">
        <div id='id' className="container-fluid">
          <a className="navbar-brand" href="/">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="../Portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div div className='container'>
        <div className='row'>
          <div className="col-sm-6">
            <section className="bgCard" className="card" style={{ width: '22rem' }}>
              <img
                src={covidPic}
                className="card-img-top" alt="covidLogo" />
              <div className="card-body">
                <h5 className="titleCard" className="card-title">Covid Resource</h5>
                <p className="card-text">For this project my team and I decided to make an application to find the 10 nearest Covid Testing sites within a given city in the US. All the user has to do is type in a city and state and the output will be 10 testing locations along with their addresses. Click the link
                below to check it out.
            </p>
                <a href="https://caroltn.github.io/covid-resource/" className="btn btn-primary">Covid Resource Webpage</a>
              </div>
            </section>
            <div className='col-sm-6'>
              <section className="bgCard" className="card" style={{ width: '22rem' }}>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cactus_Jack_Records_-_Logo.svg/1200px-Cactus_Jack_Records_-_Logo.svg.png'
                  className="card-img-top" alt="covidLogo" />
                <div className="card-body">
                  <h5 className="titleCard" className="card-title">Cactus Jack</h5>
                  <p className="card-text">Welcome to the wonderful world of Cactus Jack. A blogging website where fans of Travis Scott and come together from around the world express their love for Travis Scott and anyting Travis Scott related.
                </p>
                  <a href="https://cactus-jack.herokuapp.com/" className="btn btn-primary">Cactus Jack Blog</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Portfolio
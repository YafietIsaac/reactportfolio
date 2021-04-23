import './style.css'
import profilePic from './images/profilepic3.jpg'

const Home = () => {
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
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className="card" style={{ width: "52rem" }}>
              <img src={profilePic} className="card-img-top" alt='me' />
              <div className="card-body">
                <h3 className="card-title">About Me</h3>
                <p className="card-text">My name is Yafiet Isaac and I am a full-stack developer. I have taken computer sciences courses in Cal State Long Beach, Orange Coast College and have attended and completed a bootcamp at University of California, Irvine Division of Continuing Education. I plan to use my new found education to take a leap into the world of software development and become a web develop/software engineer</p>
              </div>
            </div>

          </div>
          <div id='rightSide' className='col-sm-6'>

            <h2>Fun facts about me</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">I love to travel for the purpose of trying new foods</li>
              <li class="list-group-item">A goal of mine in life is to witness the northern lights</li>
              <li class="list-group-item">I used to collect random polaroids that I would find on the floor.</li>
            </ul>

          </div>
        </div>
      </div>


    </>
  )
}

export default Home
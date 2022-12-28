import logo from '../assets/stufflogo.png'
import '../styles/app.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div id='homepage'>
      <h1 id='greeting'>We sell stuff.</h1>
      <Link to='/shop' class="nav-link"><img src={logo}></img></Link>
      <p id='subgreeting'>Come check us out!</p>
    </div>
  );
}

export default Home;

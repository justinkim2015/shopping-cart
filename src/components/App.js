import logo from '../assets/stufflogo.png'
import '../styles/app.css'
import MyLink from './MyLink'

function Home() {
  return (
    <div id='homepage'>
      <h1 id='greeting'>We sell stuff.</h1>
      <MyLink text={<img src={logo}></img>} location='/shop'/>
      <p id='subgreeting'>Come check us out!</p>
    </div>
  );
}

export default Home;

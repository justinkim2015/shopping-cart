import { Link } from 'react-router-dom'

const MyLink = (props) => {
  return(
    <Link to={props.location} className='link'>{props.text}</Link>
  )
}

export default MyLink  
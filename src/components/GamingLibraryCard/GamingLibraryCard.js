import "./GamingLibraryCard.css"
import { Secondarybutton } from "../../components/index"


const GamingLibraryCard = (props) => {
  return (
    <div className="gaming-Library-card">
        <ul>
            <li><img src={props.image} alt=""/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date Added</h4><span>{props.date_added}</span></li>
            <li><h4>Hours played</h4><span>{props.hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.Download}</span></li>

            <Secondarybutton>Download</Secondarybutton>
          
        </ul>

    </div>
  )
}

export default GamingLibraryCard
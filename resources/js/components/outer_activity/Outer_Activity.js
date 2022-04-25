import './Outer_Activity.css'
import trip from './trip2.jpg'
import birthday from './birthday4.jpg'
import {Link} from 'react-router-dom'

function Outer_Activity() {
    return (
        <>
        <h2 className="activity_title"><i><span className="our">Our</span> Activities</i>  </h2>
            <div className='outer_activity' id="activity">
                <div className='trips'>
                    <div className='trip_img'>
                        <img src={trip} />
                    </div>
                    <div className='trip_info'>
                        <p>One of the special photos from the kindergarten's outdoor activities</p>
                    </div>
                </div>
                <div className='trips'>
                    <div className='trip_img'>
                        <img src={birthday} />
                    </div>
                    <div className='trip_info'>
                        <p>One of the special photos from the kindergarten's outdoor activities</p>
                    </div>
                </div>
            </div>
            <div className="photo"><p>To see all activity photos click </p> <Link className="ser_link" to="/Gallery"><span>Here</span></Link> </div>
        </>
    )
}

export default Outer_Activity;
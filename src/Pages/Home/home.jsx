import HeaderImg from "../../images/julian-yu-_WuPjE-MPHo-unsplash.jpg"
import Custom from "../../images/pexels-andiravsanjani-974266.jpg"
import "./home.css";
const Home = () => {
     return (
        <>
            <div className="header">
                <div>
                    <div className="img">
                        <img src={HeaderImg} alt="" />
                    </div>
                    <div className="Overlay"></div>
                    <div className="Content">
                        <h6>What are you waiting for?</h6>
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>
            <div className="custom-container">
                <div className="row">
                    <div className="col-sm-4">
                        <div>
                            <h6>Happy Journey</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> 
                            Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <img src={Custom} className="imgFluid" alt="" />
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <h6>Happy Journey</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> 
                            Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
}
export default Home;
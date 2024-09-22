import AboutHeader from "../../images/luca-bravo-O453M2Liufs-unsplash.jpg";
import AboutCustom from "../../images/29381.jpg";
import "./about.css";
const About = () => {
    return (
        <>
           <div className="about">
            <div>
            <div className="img">
                <img src={AboutHeader} alt="" />
            </div>
            <div className="Overlay">
              
            </div>
            </div>
           </div>
           <div className="about_main container">
            <div className="content">
                <h6>About Us</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
                <div className="col-sm-5">
                  <img src={AboutCustom} alt="" />
                   <div className="col-sm-7">
                    <h6>
                        <span>T</span>ravel Hardcore
                    </h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at. Pharetra diam sit amet nisl. Non consectetur a erat nam at lectus urna. Commodo elit at imperdiet dui accumsan sit amet nulla. Neque volutpat ac tincidunt vitae semper. Nunc vel risus commodo viverra. Ultrices gravida dictum fusce ut. Scelerisque fermentum dui faucibus in ornare. In ante metus dictum at tempor commodo. Nunc faucibus a pellentesque sit. Adipiscing bibendum est ultricies integer quis auctor. Quisque id diam vel quam elementum. Ornare lectus sit amet est placerat in egestas. Purus sit amet luctus venenatis lectus magna fringilla urna. Id aliquet risus feugiat in ante metus. Ac tortor dignissim convallis aenean et tortor at risus. Quam quisque id diam vel quam elementum. Lacus viverra vitae congue eu consequat ac felis donec.
                    </p>
                   </div>
                </div>
            </div>
           </div>
        </>
    );
};
export default About;
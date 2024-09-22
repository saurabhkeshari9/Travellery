import GalleryHeader from "../../images/pexels-suju-22475982.jpg";
import Img1 from "../../images/pexels-andiravsanjani-974266.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";
import Img4 from "../../images/img4.jpg";
import Img5 from "../../images/img5.jpg";
import Img6 from "../../images/img6.jpg";
import "./gallery.css";
const Gallery = () => {
      return (
         <>
            <div className="about">
             <div>
              <div className="img">
                <img src={GalleryHeader} alt="" />
            </div>
                 <div className="gallery_main container">
                    <div className="row">
                     <div className="col-sm-4">
                            <div className="box">
                                <img src={Img1} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box">
                                <img src={Img2} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box">
                                <img src={Img3} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box">
                                <img src={Img4} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box">
                                <img src={Img5} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box">
                                <img src={Img6} className="img-fluid" alt="" />
                            </div>
                        </div>
                        
                    </div>

                 </div>
                </div>
            </div>
         </>
      )
}
export default Gallery;
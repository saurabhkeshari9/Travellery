import ContactHeader from '../../images/dino-reichmuth-A5rCN8626Ck-unsplash.jpg'
import "./contact.css";
const Contact = () => {
     return (
      <>
        <div className="contact">
            <div className="i">
                <div>
                    <img src={ContactHeader} alt="" />
                </div>
                <div className="Overlays"></div>
            </div>
            <div className="Contact_Content">
                <form action="">
                    <h6>CONTACT US</h6>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Your Number" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="6" className="form-control" placeholder="How We Can Help You?" required />
                    </div>
                    <button className="btns">Submit Now</button>
                </form>
            </div>
        </div>
      </>
     );
};
export default Contact;
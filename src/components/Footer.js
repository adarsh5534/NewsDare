import React from "react";
import "./Footer.css";

function Footer() {
  return (
  <>
 
  <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <h3>Explore News Dare</h3>

          <div className="col">
            <h5 className="list-unstyled">
              <li>Home</li>
              <li>Worklife</li>
              <li>TV</li>
            </h5>
          </div>
          <div className="col">
            <h5 className="list-unstyled">
              <li>News</li>
              <li>Culture</li>
              <li>Sport</li>
            </h5>
          </div>
          <div className="col">
            <h5 className="list-unstyled">
              <li>Weather</li>
              <li>Future</li>
              <li>Travel</li>
            </h5>
          </div>
         
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} NEWS DARE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    
  
  
  </>
  )
}

export default Footer;
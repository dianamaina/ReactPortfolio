import headShot from "../../images/HeadShot.jpg";
import "./About.css"

const About = () => {
  return (
    <main>
      {/* Contact Card */}
      <div className="container">
        <div className="card col-md-8 mt-5 bg-light">
          <div className="card-body">
              
            {/* Header - About Me */}
            <div className="row" id="row1">
              <div className="col-sm-12" id="Header">
                <h2 className="card-title font-weight-bold font">About Me</h2>
                <hr />
              </div>
            </div>

            {/* Picture and Paragraph */}
            <div className="row" id="row2">
              <div className="col-sm-12" id="Picture">
                <img
                  className="img img-thumbnail"
                  src={headShot}
                  alt="Head Shot of Diana Maina"
                  id="aboutMeImg"
                />
                <p>As an aspiring software developer I look forward to where this road will take me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
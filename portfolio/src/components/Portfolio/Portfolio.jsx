import "./Portfolio.css";
import Gifted from "../../images/Gifted.png";
import Card from "./Card";
import GitHub from "../Icon-Components/GitHub";
import Link from "../Icon-Components/Link";

const Portfolio = () => {
  return (
    <main>
      {/* Contact Card */}
      <div className="container">
        <div className="row row-cols-2 mt-5 p-2 bg-light">
          <div className="col-sm-12" id="Header">
            <h2 className="card-title font-weight-bold font">Portfolio</h2>
            <hr />
          </div>

          {/* Card 1 */}
          <Card
            title="Gifted"
            text="This is an app that tracks all of your gifts in one
                      organized place. There is a table that organizes all of
                      the gifts you receive from others and a table that
                      organizes all of the gifts that you send to others. You
                      can add new gifts, or edit/delete current gifts."
            image={Gifted}
            alt="Gifted Project"
          >
            {/* Link to Website */}
            <Link href="http://gifted-project2.herokuapp.com/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/dianamaina/gifted" />
          </Card>

        </div>
      </div>
    </main>
  );
};

export default Portfolio;
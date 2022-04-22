import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section id="main" className="main bottom">
        <div className="main-section  justify-content-spacebetween flex">
          <div className="main-heading justify-content-center flex ">
            <div className="head-text">
              {" "}
              It's Not Just A Coffee,
              <br />
              It's <span className="head-starbucks bold-text">Starbucks</span>
            </div>
            <p className="pad">
              Discover our Starbucks® coffee made truly yours at home.
              <br /> Enjoy a fresh cup of 100% Arabica coffee or an inspired
              café classic,
              <br /> whenever and however you like it.
            </p>
            <button className="btn-ex bold-text">Explore</button>
          </div>

          <img src="/images/allf.png" alt="all" className="all-img" />
        </div>
      </section>
      {/* ----------------------------- */}
      <section className="bottom" id="menu">
        <div className="section bottom bold-text">
          Our New <span className="color">Frappuccino</span>
        </div>

        <div className="flex  justify-content-spacearound ">
          <Cards
            heading="Black Forest Frappuccino"
            description="milk and ice all come together for a mocha flavor that'll leave
                you wanting more."
            xtraClass="black-img"
            src="/images/black.png"
            clr="bg-red"
          />

          <Cards
            heading="Caramel Frappuccino"
            description="caramel, milk and ice all come together for a mocha flavor
                that'll leave you wanting more."
            xtraClass="brown-img"
            src="/images/brown.png"
            clr="bg-yellow"
          />

          <Cards
            heading="Matcha Frappuccino"
            description=" milk and ice all come together for a mocha flavor that'll leave
                you wanting more."
            xtraClass="black-img"
            src="/images/green.png"
            clr="bg-green"
          />
        </div>
      </section>
      {/* ------------------------------------------------------------------- */}

      <section id="delivery" className="bottom">
        <div className="uber">
          <div className="justify-content-spacearound flex padding">
            <div className="sm-img">
              <img src="/images/uberr.jpg" alt="black" className="uber-img" />
            </div>

            <div>
              <div className="section pad-2 bold-text">
                Now Available on <span className="color">Uber Eats</span>
              </div>
              <div className="padding-t  justify-content-center align-item-center ">
                <i>
                  {" "}
                  “We are driven to create new and unique digital experiences
                  that are meaningful, valuable and convenient for our
                  customers,” Starbucks Group President and COO Roz Brewer said
                  in a statement. “Partnering with Uber Eats helps us take
                  another step towards bringing Starbucks to customers wherever
                  they are.”
                </i>{" "}
                <div>
                  <button className="  justify-content-center btn-order">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------- */}
      <section id="reward">
        <div className="uber">
          <div className="justify-content-spacearound flex padding">
            <div className="sm-img">
              <img src="/images/pay.jpg" alt="black" className="uber-img" />
            </div>

            <div>
              <div className="section pad-2 bold-text">
                Earning <span className="color">4,500 Bonus</span> Stars is
                Super Starifying
              </div>
              <div className="padding-t justify-content-center align-item-center ">
                Earn more Stars and even more Rewards with a $0 intro annual fee
                for your first year with the Starbucks® Rewards Visa® Card. Plus
                your Stars won’t expire – an exclusive Starbucks benefit for
                cardmembers. Now that’s Super Starifying.
                <div>
                  <button className="  justify-content-center btn-order">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;

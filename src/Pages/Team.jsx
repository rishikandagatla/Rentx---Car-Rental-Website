import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";

function Team() {
  const teamPpl = [
    {
      img: Person1,
      name: "Rishi Kandagatla",
      job: "Visionary Designer & Mastermind",
    },
  ];

  const quotes = [
    "The driving force behind every pixel, every curve, and every detail you see. Rishi doesn’t just design—he creates experiences, turning imagination into digital reality.",
    "A perfectionist, a creator, and a trailblazer—this entire platform is the vision of one mind, one soul, one legend.",
    "“Design is not just what it looks like and feels like. Design is how it speaks to you.” — Rishi Kandagatla",
  ];

  return (
    <>
      <section className="team-page">
        <HeroPages name="Meet the Mastermind" />
        <div className="container">
          <div
            className="team-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              minHeight: "70vh",
            }}
          >
            {teamPpl.map((ppl, id) => (
              <div
                key={id}
                className="team-container__box"
                style={{
                  maxWidth: "500px",
                  margin: "0 auto",
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  className="team-container__box__img-div"
                  style={{ marginBottom: "15px" }}
                >
                  <img
                    src={ppl.img}
                    alt="team_img"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="team-container__box__descr">
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
                    {ppl.name}
                  </h3>
                  <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                    {ppl.job}
                  </p>

                  {quotes.map((quote, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#f9f9f9",
                        padding: "15px",
                        marginBottom: "15px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                        fontStyle: "italic",
                      }}
                    >
                      {quote}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}




export default Team;

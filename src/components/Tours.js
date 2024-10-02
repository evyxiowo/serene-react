import { tours } from "../data.js";
import Title from "./Title.js"
const Tours = () => {
  return (
    <div><section className="section" id="tours">
    <div className="section-title">
      <h2>
        featured <span>tours</span>
      </h2>
    </div>

    <div className="section-center featured-center">
      {tours.map((tour) => {
        const { id, title, info,img,price, date,duration,location} = tour
        return (
          <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt={title} />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{info}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {location}
                </p>
                <p>{duration} days</p>
                <p>from ${price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </section>
</div>
  )
}
export default Tours
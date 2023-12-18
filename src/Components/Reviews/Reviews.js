import "./Reviews.css";
import client1 from "../../client1.jpg";
import client2 from "../../client2.jpg";
import client4 from "../../client4.jpg";

function ClientReview(props) {
  return (
    <div className="review-div col-md-12">
      <div className="review-div-sub">
        <img className="client-review-img" src={props.img} alt="client-image" />
        <div className="review-div-sub-1">
          <p className="client-name">{props.name}</p>
          <p className="client-info">{props.info}</p>
        </div>
      </div>
      <div className="review-stars">
        <span class="fa fa-star checked fa-lg"></span>
        <span class="fa fa-star checked fa-lg"></span>
        <span class="fa fa-star checked fa-lg"></span>
        <span class="fa fa-star checked fa-lg"></span>
        <span class="fa fa-star checked fa-lg"></span>
      </div>

      <p className="client-details">{props.detail}</p>
    </div>
  );
}

function Reviews() {
  return (
    <div className="reviews-components">
      <h1 className="reviews-heading">Don't take our words for it</h1>

      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="container r">
              <ClientReview
                name="Mara Nikolic"
                info="Founder, Mara99"
                img={client1}
                detail="TxLabz provides great design and has a great sense of user experience and aesthetics. They deliver on time and is an overall great communicator. I highly recommend working with them."
              />
            </div>
          </div>
          <div class="carousel-item">
            <div className="container r">
              <ClientReview
                name="Mark Zuckerberg"
                info="Founder, Facebook"
                img={client2}
                detail="TxLabz provides great design and has a great sense of user experience and aesthetics. They deliver on time and is an overall great communicator. I highly recommend working with them."
              />
            </div>
          </div>
          <div class="carousel-item">
            <div className="container r">
              <ClientReview
                name="Elon Musk"
                info="CEO, Tesla"
                img={client4}
                detail="TxLabz provides great design and has a great sense of user experience and aesthetics. They deliver on time and is an overall great communicator. I highly recommend working with them."
              />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Reviews;

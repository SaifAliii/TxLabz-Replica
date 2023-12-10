import "./Reviews.css";
import reviewArray from "./data.js";
import client1 from "../../client1.jpg";
import client2 from "../../client2.jpg";
import client3 from "../../client3.jpg";
import client4 from "../../client4.jpg";
import client5 from "../../client5.jpg";
import client6 from "../../client6.jpg";
import client7 from "../../client7.jpg";
import client8 from "../../client8.jpg";

function ClientReview(props) {
  return (
    <div className="review-div col-md-6 ">
      <div className="review-stars">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>

      <p className="client-details">{props.detail}</p>
      <div className="review-div-sub">
        <img className="client-review-img" src={props.img} alt="client-image" />
        <div className="review-div-sub-1">
          <p className="client-name">{props.name}</p>
          <p className="client-info">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="reviews-components">
      <h1 className="reviews-heading">Don't take our words for it</h1>

      <div className="container r">
        {Array.isArray(reviewArray) &&
          reviewArray.map(
            (review, index) =>
              index + 1 < reviewArray.length &&
              index % 2 === 0 && (
                <div className="row" key={`group-${Math.floor(index / 2)}`}>
                  <ClientReview
                    name={review.name}
                    info={review.info}
                    img={review.img}
                    detail={review.detail}
                  />
                  {index + 1 < reviewArray.length && (
                    <ClientReview
                      name={reviewArray[index + 1].name}
                      info={reviewArray[index + 1].info}
                      img={reviewArray[index + 1].img}
                      detail={reviewArray[index].detail}
                    />
                  )}
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default Reviews;

import "./Reviews.css";
import client1 from "../../client1.jpg";
import client2 from "../../client2.jpg";
import client3 from "../../client3.jpg";
import client4 from "../../client4.jpg";
import client5 from "../../client5.jpg";
import client6 from "../../client6.jpg";
import client7 from "../../client7.jpg";
import client8 from "../../client8.jpg";

function ClientReview(props) {
  alert("Hi");
  return (
    <div className="review-div col-md-6 ">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>

      <p className="client-details">{props.detail}</p>

      <img className="client-review" src={client1} alt="client-image" />
      <p className="client-name">{props.name}</p>
      <p className="client-info">{props.info}</p>
    </div>
  );
}

function Reviews() {
  return (
    <div className="reviews-components">
      <h1 className="reviews-heading">Don't take our words for it</h1>

      <div className="container r">
        <div className="row ">
          <ClientReview
            name="Mara Nikolic"
            info="Founder, Mara99"
            detail="TxLabz provides great design and has a great sense of user experience and
      aesthetics. They deliver on time and is an overall great communicator. I
      highly recommend working with them."
          />
          {/* div2 */}
          <div className="review-div col-md-6 ">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>

            <p className="client-details">
              Amazing developers with an eye for aesthetics. We had pretty
              vigorous requests and they hit every single one. They were patient
              and highly skilled and ambitious.
            </p>

            <img className="client2" src={client2} alt="client2" />
            <br />
            <p className="client-name">John D Saunders</p>
            <p className="client-info">Co-founder, 5fourdigital</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

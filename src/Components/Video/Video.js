
import "./Video.css";

function Video(){

    return(

       <div className="video-component">
         
          <h1 className="heading-video">In our client's words</h1> <br /> <br />

            <iframe className="video" width="1300" height="550" src="https://www.youtube.com/embed/zk_R_WUeoNQ" frameborder="0" allowfullscreen></iframe>

       </div>


    );


}
export default Video;
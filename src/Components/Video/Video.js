import "./Video.css";

function Video(props) {
  return (
    <div className="video-component">
      <iframe
        className="video"
        width={props.width}
        height={props.height}
        src="https://www.youtube.com/embed/zk_R_WUeoNQ"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default Video;

import "./Video.css";

function Video(props) {
  return (
    <div className="video-component">
      <iframe
        className="video"
        width={props.width}
        height={props.height}
        src={props.video}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default Video;

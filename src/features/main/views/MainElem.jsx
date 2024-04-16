import { Link } from "react-router-dom";

const MainElem = (props) => {
  const { thumbnailSrc, channelImgSrc, title, channelName, views, uploadDate } = props.data;
  return (
    <>
      <section className="section">
        <img className="thumbnail" src={thumbnailSrc} />
        <article className="video_info">
          <Link to={channelName}>
            <img className="channel_img" src={channelImgSrc} />
          </Link>
          <div className="video_info_detail">
            <p className="video_title">{title}</p>
            <p className="channel_name">{channelName}</p>
            <div className="upload_info">
              <span className="views">{views}</span>
              <img className="dot_icon" src="/images/dot.png" />
              <span className="upload_date">{uploadDate}</span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default MainElem;

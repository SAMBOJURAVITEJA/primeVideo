import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {each} = props
  const {thumbnailUrl, videoUrl} = each
  return (
    <div className="MovieItemContainer">
      <Popup
        className="popup-content"
        modal
        trigger={
          <div className="MovieItemImageContainer">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnailImage"
            />
          </div>
        }
      >
        {close => (
          <div className="MovieItemVideoContainer">
            <div className="closeButton">
              <button
                type="button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose size={30} />
              </button>
            </div>
            <div className="videoPlayerContainer">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

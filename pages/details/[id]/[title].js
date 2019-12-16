import apiHelper from "../../../helpers/api";
import {
  getPosterImageUrl,
  getFallbackValue
} from "../../../helpers/dataHelper";
import "../../../static/css/details.css";

const Details = props => {
  const { details } = props;
  return (
    <div className="container">
      {details.Response === "True" ? (
        <>
          <div className="main-details">
            <div className="poster-image">
              <img src={getPosterImageUrl(details)} />
            </div>
            <div className="content-right">
              <h1 className="title">{details.Title}</h1>
              <div className="plot sm-block">
                <label>Plot</label>
                <span>{details.Plot}</span>
              </div>

              <div className="overall-block">
                <div className="genre sm-block">
                  <label>Genre</label>
                  <span>{details.Genre}</span>
                </div>
                <div className="ratings sm-block">
                  <label>IMDB Rating</label>
                  <span>
                    {getFallbackValue(details.imdbRating) != "-"
                      ? `${getFallbackValue(details.imdbRating)} (
                      ${getFallbackValue(details.imdbVotes)} votes)`
                      : "-"}
                  </span>
                </div>
                <div className="release-date sm-block">
                  <label>Release Date</label>
                  <span>{details.Released}</span>
                </div>
                <div className="runtime sm-block">
                  <label>Runtime</label>
                  <span>{details.Runtime}</span>
                </div>
                <div className="country sm-block">
                  <label>Country</label>
                  <span>{details.Country}</span>
                </div>
                <div className="language sm-block">
                  <label>Language</label>
                  <span>{details.Language}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cast-details">
            <div className="sm-block">
              <label>Type</label>
              <span>{details.Type}</span>
            </div>
            <div className="sm-block">
              <label>Cast</label>
              <span>{details.Director}</span>
            </div>
            <div className="sm-block">
              <label>Directed By</label>
              <span>{details.Director}</span>
            </div>
            <div className="sm-block">
              <label>Written By</label>
              <span>{details.Writer}</span>
            </div>
            <div className="sm-block">
              <label>Awards</label>
              <span>{details.Awards}</span>
            </div>
          </div>

          {details.Ratings && details.Ratings.length ? (
            <div className="sm-block">
              <label className="block-label">Ratings</label>
              {details.Ratings.map((ratingItem, index) => {
                return (
                  <span key={index}>
                    <b>{ratingItem.Value}</b> by {ratingItem.Source}
                  </span>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div className="no-results-msg">No result found for this.</div>
      )}
    </div>
  );
};

Details.getInitialProps = ({ query }) => {
  const params = {
    i: query.id
  };

  return apiHelper.getData(params).then(response => {
    return { details: response, query: query };
  });
};

export default Details;

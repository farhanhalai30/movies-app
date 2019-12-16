import { getPosterImageUrl, getDetailPageUrl } from "../helpers/dataHelper";

const SearchCard = props => {
  return (
    <a href={getDetailPageUrl(props.details)} className="search-card">
      <div
        className="poster-img"
        style={{ backgroundImage: `url(${getPosterImageUrl(props.details)})` }}
      ></div>
      <h3 className="title single-line">{props.details.Title}</h3>
      <div className="type">{props.details.Type}</div>
      <div className="year">Release Year: {props.details.Year}</div>
    </a>
  );
};

export default SearchCard;

import Pagination from "react-js-pagination";
import apiHelper from "../helpers/api";
import SearchCard from "../components/SearchCard";
import "../static/css/search.css";

const Search = props => {
  const { query, response, keyword } = props;
  const changePage = page => {
    if (page != query.page)
      window.location.href = "/search?q=" + query.q + "&page=" + page;
  };

  return (
    <div className="container">
      {response.Response === "True" ? (
        <>
          <h4 className="query-results">
            {response.totalResults} results found for your search "{keyword}"
          </h4>

          <div className="search-list">
            {response.Search.map(searchItem => {
              return (
                <SearchCard details={searchItem} key={searchItem.imdbID} />
              );
            })}
          </div>

          {response.totalResults > props.numberOfResults ? (
            <Pagination
              activePage={Number(query.page) || 1}
              itemsCountPerPage={props.numberOfResults}
              totalItemsCount={response.totalResults}
              pageRangeDisplayed={4}
              onChange={changePage}
              prevPageText={"Prev"}
              nextPageText={"Next"}
              hideFirstLastPages={true}
              itemClassPrev={"prev-page"}
              itemClassNext={"next-page"}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <h4 className="query-results">
          No results found for your search "{keyword}". Try searching something
          else.
        </h4>
      )}
    </div>
  );
};

Search.getInitialProps = ({ query }) => {
  const keyword = query.q ? query.q.replace(/-/g, " ") : "";
  console.log(keyword);
  const params = {
    s: keyword,
    page: query.page || undefined
  };
  const numberOfResults = 10;

  return apiHelper.getData(params).then(response => {
    return { response, query: query, numberOfResults, keyword };
  });
};

export default Search;

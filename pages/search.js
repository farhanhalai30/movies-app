import Pagination from "react-js-pagination";
import Layout from "../components/Layout";
import apiHelper from "../helpers/api";
import SearchCard from "../components/SearchCard";
import "../static/css/search.css";

const Search = props => {
  const { query, response } = props;
  const changePage = page => {
    if (page != query.page)
      window.location.href = "/search?q=" + query.q + "&page=" + page;
  };

  return (
    <Layout query={query}>
      <div className="container">
        {response.Response === "True" ? (
          <>
            <h4 className="query-results">
              {response.totalResults} results found for your search "{query.q}"
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
            No results found for your search "{query.q}". Try searching
            something else.
          </h4>
        )}
      </div>
    </Layout>
  );
};

Search.getInitialProps = ({ query }) => {
  const params = {
    s: query.q,
    page: query.page || undefined
  };
  const numberOfResults = 10;

  return apiHelper.getData(params).then(response => {
    return { response, query: query, numberOfResults };
  });
};

export default Search;

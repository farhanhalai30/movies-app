const Header = props => {
  const submitSearch = e => {
    e.preventDefault();
    const searchKw = document.getElementById("search-kw").value.trim();

    if (searchKw != "")
      window.location.href = "/search?q=" + searchKw.replace(/\s/g, "-");
  };

  return (
    <div className="header">
      <div className="container">
        <h2 className="logo-text">
          <a href="/">Movies App</a>
        </h2>
        <form className="search-form" onSubmit={submitSearch}>
          <input
            type="text"
            id="search-kw"
            className="input-box"
            placeholder="Search for your favourite Movies, TV Shows, etc."
            defaultValue={
              props.query && props.query.q
                ? props.query.q.replace(/-/g, " ")
                : ""
            }
          />
          <input
            type="submit"
            className="submit-btn"
            value=""
            style={{ backgroundImage: "url(/static/images/search.svg)" }}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;

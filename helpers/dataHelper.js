const getPosterImageUrl = details => {
  return details.Poster !== "N/A"
    ? details.Poster
    : "/static/images/poster-fallback.png";
};

const getDetailPageUrl = details => {
  return (
    "/details/" +
    details.imdbID +
    "/" +
    details.Title.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, "-")
  );
};

const getFallbackValue = value => {
  return value !== "N/A" ? value : "-";
};

export { getPosterImageUrl, getDetailPageUrl, getFallbackValue };

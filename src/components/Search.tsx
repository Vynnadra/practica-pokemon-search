function Search() {
  const style = {
    width: "350px",
  };
  return (
    <div className="input-group" style={style}>
      <SearchBody />
    </div>
  );
}
function SearchBody() {
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Nombre del Pokemon"
        aria-label="Buscador de Pokemon"
      />
      <button className="btn btn-outline-secondary" type="button">
        Normal
      </button>
      <button className="btn btn-outline-secondary" type="button">
        Shiny
      </button>
    </>
  );
}

export default Search;

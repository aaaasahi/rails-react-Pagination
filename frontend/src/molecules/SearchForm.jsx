export const SearchForm = (props) => {
  const { searchTitle, onChangeSearchForm, search } = props;
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchTitle}
        onChange={onChangeSearchForm}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={search}
        >
          Search
        </button>
      </div>
    </div>
  );
};

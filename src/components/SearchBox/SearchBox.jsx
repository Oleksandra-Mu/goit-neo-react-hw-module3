import css from "./SearchBox.module.css";
const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;

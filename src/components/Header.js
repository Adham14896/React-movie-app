function Header({ handleSearchInput, isLoading, value, onChange }) {
  return (
    <header>
      <input
        type="text"
        placeholder="Search For A Move..."
        value={value}
        onChange={onChange}
      />
      <button className="btn" onClick={handleSearchInput}>
        Search
      </button>
    </header>
  );
}

export default Header;

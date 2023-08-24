import './search-panel.css'

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-input" // search-input не работает? это из bootstrap
      placeholder="Найти сотрудника"
    />
  );
};
export default SearchPanel;

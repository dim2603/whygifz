import { Button, Input } from "antd";

function SearchBar() {
  return (
    <div className="searchbar">
      <Input style={{ width: "20%" }} size="large" placeholder="search..." />
      <Button
        size="large"
        style={{ marginLeft: "10px" }}
        onClick={() => setCount((count) => count + 1)}
      >
        Try
      </Button>
    </div>
  );
}

export default SearchBar;

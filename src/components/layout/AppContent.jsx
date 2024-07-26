import { Layout } from "antd";
import SearchBar from "../SearchBar";
import GifCard from "../GifCard";

const contentStyle = {
  minHeight: "calc(100vh - 100px)",
  color: "#fff",
  padding: "3rem",
  background: "none",
  margin: "0 auto",
  padding: "0 15px",
  width: "1200px",
  maxWidth: "1200px",
};

export default function AppContent() {
  return (
    <Layout.Content style={contentStyle}>
      <SearchBar />
      <div className="gifcontainer">
        <GifCard />
      </div>
    </Layout.Content>
  );
}

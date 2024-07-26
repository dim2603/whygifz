import { Layout } from "antd";
import logo from "./../../img/logo.png";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 100,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  background: "none",
  // backgroundColor: "rgba(0, 0, 0, 0.1)",
};

export default function AppHeader() {
  return (
    <Layout.Header style={headerStyle}>
      <img
        style={{ width: "100px", marginLeft: "25px" }}
        src={logo}
        alt="Logo"
      />
    </Layout.Header>
  );
}

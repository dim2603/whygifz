import { Layout } from "antd";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

export default function AppLayout() {
  return (
    <Layout style={{ background: "none" }}>
      <AppHeader />
      <AppContent />
    </Layout>
  );
}

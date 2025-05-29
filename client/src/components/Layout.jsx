// components/Layout.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/styles.css"; // CSS file for layout styles

function Layout({ title, children }) {
  return (
    <div className="layout-container">
        <Sidebar />
      <div className="main-container">
        <Header title={title} />
        <main className="page-content">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
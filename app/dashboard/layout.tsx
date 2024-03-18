import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container p-5">
      <div className="menu">
        <Sidebar />
      </div>
      <div className="content p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default Layout;
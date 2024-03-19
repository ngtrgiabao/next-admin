import Navbar from "../ui/dashboard/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="p-5 flex dark">
      <div className="flex-1">
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
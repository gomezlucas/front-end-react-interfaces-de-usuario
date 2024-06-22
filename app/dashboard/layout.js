import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
const metadata = {
  title: "Next.js Dashboard",
  description: "Description metadataaa",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <section className="font-poppins">
        <Sidebar />
        <Header />
        <main className=" pt-28  w-4/5 lg:w-10/12 ml-auto	">{children}</main>
      </section>
    </>
  );
}

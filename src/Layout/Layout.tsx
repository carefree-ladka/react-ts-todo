import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <main>
      <Navbar />
      <div className="main">{props.children}</div>
      <Footer />
    </main>
  );
}

import Header from "../layouts/home-header";
import Footer from "../layouts/home-footer";
import Featured from "../layouts/home-featured";
import background3 from "../assets/photos/bg5.png";

function Home() {
  return (
    <>
      <div className="relative z-20">
        <Header />
      </div>

      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background3})` }}
      ></div>

      <Featured />
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
}
export default Home;

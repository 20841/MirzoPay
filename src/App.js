import { Biling, Business, CTA, Clients, Contract, Footer, Home, Navbar, Statistics, Testimonials } from "./components";
import { styles } from "./util/style";

const App = () => {
  return (
  <div className="bg-primary w-full overflow-hidden">

    {/*Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
          </div> 
    </div>

    {/*Home */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.container}`}>
         <Home />
      </div>
    </div>
   
   {/* */}
   <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Biling />
          <Business />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
          </div> 
    </div>

  </div>
  );
};

export default App

import { Hero,  Footer} from "./sections";
import Nav from "./Components/Nav";

const App = () => (
  <main className="relative ">
    <section className=" px-7 p-3">
      <Nav/>  
    </section>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>  
     </section>
    <section className=" padding -x padding-t pb-8 ">
      <Footer />
    </section>
  </main>
); 

export default App; 
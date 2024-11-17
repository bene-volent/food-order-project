
import Shop from "@/components/Shop";
import Cart from "@/components/Cart";
import { Log } from "./utils/Log";

function App() {

  // const [cart, setCart] = useState({ items: [beefData, beefData, beefData, beefData] })

  return (
    <main>
      <div className="container">
        <Shop />
        <Cart />
      </div>
    </main>
  );
}

export default App;

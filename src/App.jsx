import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/Help";

function App() {
	const location = useLocation();
	return (
		<>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<MainPage />}>
					<Route path="product" element={<Product />} />
					<Route path="customers" element={<Customers />} />
					<Route path="income" element={<Income />} />
					<Route path="promote" element={<Promote />} />
					<Route path="help" element={<Help />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;

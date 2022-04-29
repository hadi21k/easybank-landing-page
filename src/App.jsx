import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Carrers from "./pages/Carrers";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<div className="public-sans">
			<Navbar />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<About />} path="/about" />
				<Route element={<Contacts />} path="/contacts" />
				<Route element={<Blog />} path="/blog" />
				<Route element={<Carrers />} path="/carrers" />
				<Route element={<div>No Page here</div>} path="*" />
			</Routes>
		</div>
	);
}

export default App;

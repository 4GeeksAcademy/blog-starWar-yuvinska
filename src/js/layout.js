import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home.js";
import { PersonajeDetalle } from "./views/personajeDetalle.js";
import { NaveDetalle } from "./views/naveDetalle.js";
import { PlanetaDetalle } from "./views/planetaDetalle.js";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/PersonajeDetalle/:personaje" element={<PersonajeDetalle />} />
						<Route path="/NaveDetalle/:nave" element={<NaveDetalle />} />
						<Route path="/PlanetaDetalle/:planeta" element={<PlanetaDetalle />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
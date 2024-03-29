import './App.css';
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./pages/About";
import Works from "./pages/Works"
import Techs from './pages/Techs';
import Experiences from './pages/Experiences';
import Loader from './components/Loader';
import Error from "./pages/Error";
import Lenis from '@studio-freight/lenis'

const router = createBrowserRouter([
	{
		path: "/",
		element: <About />
	},
	{
		path: "/works",
		element: <Works />
	},
	{
		path: "/techs",
		element: <Techs />
	},
	{
		path: "/experiences",
		element: <Experiences />
	},
	{
		path: "*",
		element: <Error />
	},
]);


function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect (() =>{
		const lenis = new Lenis()
	
		function raf(time) {
		  lenis.raf(time)
		  requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	  },[])

	useEffect(() => {
		setTimeout(() => {
		  setIsLoading(false);
		}, 2000); // Délai de chargement de 2 secondes
	  }, []);

	  return (
		<div>
		  {isLoading ? <Loader /> : (
			// Affiche le contenu de l'application une fois que les données sont chargées
		<>
		<RouterProvider router={router}/>
		</>
		  )}
		</div>
	  );
	}
	
	export default App;


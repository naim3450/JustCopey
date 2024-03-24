import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RoutLayouts from "./layout/RoutLayouts"
import Home from "./layout/Page/Home"
import SearchResult from "./layout/Page/SearchResult";
import Special from "./layout/Page/Special";


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RoutLayouts />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Search" element={<SearchResult/>}/>
          <Route path="/special" element={<Special/>}/>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

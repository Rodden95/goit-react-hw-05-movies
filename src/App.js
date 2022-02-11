import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';

// const Reviews = lazy(() => import('./Components/Reviews/Reviews.jsx'))
// const Cast = lazy(() => import('./Components/Cast/Cast.jsx'))
const SearchPage = lazy(() => import("./Pages/SearchPage.jsx"));
const FilmCard = lazy(() => import("./Pages/FilmCard.jsx"));
const Layout = lazy(() => import("./Pages/Layout.jsx"));
const Home = lazy(() => import("./Pages/Home.jsx"));

function App() {
  
  return (
    <Suspense fallback={<div>Загружаем...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<SearchPage />} />
          <Route path="/movies/:id/*" element={<FilmCard />}>
           
              {/* <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} /> */}
        
          </Route>

        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;

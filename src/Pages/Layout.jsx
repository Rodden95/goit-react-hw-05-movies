import { Link, Outlet } from "react-router-dom";
import style from './pages.module.css'
export default function Layout() {
  
  return (
    <div className={style.container}>
      <div className={style.linkContainer}>
        <Link to="/" className={style.link}>Home</Link>
      <Link to="/movies" className={style.link}>Movies</Link>
      </div>
      <Outlet />
    </div>
  )
}
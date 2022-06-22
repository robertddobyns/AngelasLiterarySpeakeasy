import {useLocation, Navigate, Outlet} from "react-router-dom";

const RequireAuth = ({ allowedRoles}) => {
  const user = localStorage.getItem('username')
  const roles = JSON.parse(localStorage.getItem('authorities'))
  const location = useLocation()

  return (
      user && allowedRoles.includes(roles)
          ? <Outlet/>
          : <Navigate to={'/'} state={{from: location}} replace />
        )
}

export default RequireAuth
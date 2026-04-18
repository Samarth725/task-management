import { Outlet } from "react-router-dom";

type PrivateRoutesProps = {
  allowedRoles: string[];
};

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ allowedRoles }) => {
  // your auth logic here

  return <Outlet />;
};

export default PrivateRoutes;
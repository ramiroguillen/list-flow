// hooks
import useAuth from "../../hooks/useAuth";

const Profile = () => {

  const { logout, user } = useAuth();

  return (
    <div className="d-flex me-3 align-items-center justify-content-end">
      <button className="btn btn-info" onClick={logout} style={{ width: "6rem" }}>Sign Out</button>
    </div>
  );
};

export default Profile;
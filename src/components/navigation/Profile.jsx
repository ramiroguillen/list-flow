// hooks
import useAuth from "../../hooks/useAuth";

const Profile = () => {

  const { logout, user } = useAuth();

  return (
    <div className="d-flex me-3 align-items-center">
      <img
        src={user.photoUrl}
        alt={user.displayName}
        className='border border-success border-2 rounded-circle me-3'
        style={{ height: "2rem", width: "2rem" }}
      />
      <button className="btn btn-danger" onClick={logout} style={{ width: "6rem" }}>Sign Out</button>
    </div>
  );
};

export default Profile;
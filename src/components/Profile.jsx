import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div className="d-flex me-3 align-items-center">
        <img src={user.picture} alt={user.name} className='border border-success border-2 rounded-circle' style={{ height: "2rem", width:"2rem" }} />
      </div>
    )
  );
};

export default Profile;
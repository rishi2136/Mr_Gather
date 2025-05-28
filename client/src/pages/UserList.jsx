import React from "react";
import useUserManagement from "../hooks/useUserManagement";
import UserCard from "../components/UserCard";
// import users from "../db";

const UserList = () => {
  // let [allUser, setAllUser] = useState(null);
  let {
    users,
    handleViewMore,
    handleEditUser,
    handleDeleteUser,
    handleSummary,
  } = useUserManagement();

  // useEffect(() => {
  //   setAllUser(users);
  // }, [users]);

  console.log("user_list", users);

  return (
    <div className="bg-[#F3F4F6] ">
      {users &&
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
            handleSummary={handleSummary}
            handleViewMore={handleViewMore}
          />
        ))}
    </div>
  );
};

export default UserList;

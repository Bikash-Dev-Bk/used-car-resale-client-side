import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${user.name}`
    );

    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`${user.userType} deleted successfully.`);
            const remainingUsers = users.filter((usr) => usr._id !== user._id);
            setUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-3xl mb-5">All Seller</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Verify</th>
            </tr>
          </thead>

          {users.map((user) => (
            <tbody key={user._id}>
              {user.userType === "seller" && (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-xs btn-success">Verify</button>
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllSellers;

import React from "react";
import { useLoaderData } from "react-router-dom";

const AllBuyers = () => {
  const users = useLoaderData();

  return (
    <div>
      <h3 className="text-3xl mb-5">All Buyers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>

          {users.map((user, i) => (
            <tbody key={user._id}>
              {
                user.userType === 'buyer' &&
                <tr>
                  
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>
              }
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;

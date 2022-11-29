import React from "react";
import { useQuery } from '@tanstack/react-query';

const AllBuyers = () => {
const {data: users = [], } = useQuery({
    queryKey: ['users'],
    queryFn: async() =>{
        const res = await fetch('http://localhost:5000/users');
        const data = await res.json();
        return data;
    }
});

  return (
    <div>
      <h3 className="text-3xl mb-5">All Buyers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>

          {users.map((user) => (
            <tbody key={user._id}>
              {
                user.userType === 'buyer' &&
                <tr>
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

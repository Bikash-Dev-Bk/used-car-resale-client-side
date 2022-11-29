import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllSellers = () => {
    const {data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    console.log("inside allSellers",users);
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
                  {
                    user.userType === 'seller' &&
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="btn btn-xs btn-error">Delete</button>
                      </td>
                      <td>
                        <button className="btn btn-xs btn-success">Verify</button>
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


export default AllSellers;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../../store/userSlice";
import { TotalUsersPageImages } from "../../../assets/images/user/totalUsersPage/totalUsersPageImages";
import DeleteConfirmationMessage from "./components/deleteConfirmation";
import MidScreenFloatingDivLayout from "../../../components/midScreenFloatingDivLayout";
import { SidebarImages } from "../../../assets/images/sidebarImages/sidebarImages";
import { useNavigate } from "react-router-dom";
import BackButtonWithCustomPath from "../../../components/backButtonWithCustomPath";

const AllUsers = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [index, setIndex] = useState();
  const navigate = useNavigate();
  // console.log(users);

  const dispatch = useDispatch();
  const fetchUsers = () => {
    dispatch(getAllUsers());
  };

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  function handleDeleteConfirmationVisible(signal) {
    if (signal == true) {
      console.log("Index to be deleted =============>", index);
      handleDelete(index);
      setShowDeleteConfirmation(false);
      setIndex(null);
      // window.location.reload();
    } else {
      setShowDeleteConfirmation(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <BackButtonWithCustomPath path={"/"} />
      <div className=" flex justify-center items-center gap-3 mb-4">
        <img src={TotalUsersPageImages.records} className=" w-7 md:w-10" />
        <h1 className="text-xl md:text-4xl font-semibold text-center">Users log</h1>
      </div>

      {users ? (
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full table-auto border-collapse rounded-t-lg text-xs md:text-md">
            <thead className="bg-[#13192F] text-white rounded-t-lg ">
              <tr className="text-center rounded-t-lg">
                <th className="px-4 py-1 md:py-2">Sr.</th>
                <th className="px-4 py-1 md:py-2">First Name</th>
                <th className="px-4 py-1 md:py-2">Last Name</th>
                <th className="px-4 py-1 md:py-2">Address</th>
                <th className="px-4 py-1 md:py-2">Company</th>
                <th className="px-4 py-1 md:py-2">Telephone Number</th>
                <th className="px-4 py-1 md:py-2">Operations</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {users?.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{user.firstName}</td>
                  <td className="px-4 py-2">{user.lastName}</td>
                  <td className="px-4 py-2">{user.adderess}</td>
                  <td className="px-4 py-2">{user.company}</td>
                  <td className="px-4 py-2">{user.telephoneNumber}</td>
                  <td className="px-4 py-2 flex items-center justify-center">
                    <button
                       onClick={() => {
                        setIndex(index);
                        setShowDeleteConfirmation(true);
                      }}
                      className="bg-red-700 hover:bg-red-800 p-2 rounded-full md:px-4 md:py-2 md:rounded-md text-white flex gap-1 items-center justify-center"
                    >
                      <img src={TotalUsersPageImages.delete} className=" w-5 md:w-6" />
                      <p className="hidden md:block">Delete</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center font-semibold text-xl mt-8 flex justify-center items-center">No Data to display</h1>
      )}

      {showDeleteConfirmation && (
        <MidScreenFloatingDivLayout child={
          <DeleteConfirmationMessage
              functionPassed={handleDeleteConfirmationVisible}
              message={
                "Are you sure you want to delete the selected record?, User data will be lost."
              }
              heading={"Delete"}
            />
        }/>
      )}
    </div>
  );
};

export default AllUsers;

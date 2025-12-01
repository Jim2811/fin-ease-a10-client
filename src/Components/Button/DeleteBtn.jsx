import React from "react";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const DeleteBtn = ({ myTransaction, handleDltSuccess }) => {
  const axiosInstance = useAxios();
  const handleDlt = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/transactions/${myTransaction._id}`).then(() => {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your transaction data has been deleted.",
                  icon: "success",
                });
                handleDltSuccess(myTransaction._id);
        });
      }
    });
  };
  return (
    <>
      <button
        className="btn btn-primary bg-red-600 hover:bg-red-700"
        onClick={handleDlt}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteBtn;

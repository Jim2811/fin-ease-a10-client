import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const DeleteBtn = ({ myTransaction, handleDltSuccess }) => {
  const axiosSecure = useAxiosSecure();
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
      axiosSecure
        .delete(`/transactions/${myTransaction._id}`)
        .then(() => {
          Swal.fire(
            "Deleted!",
            "Your transaction data has been deleted.",
            "success"
          );
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

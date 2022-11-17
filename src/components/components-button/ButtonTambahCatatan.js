import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ButtonTambahCatatan = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/notes/new");
  };

  return (
    <div className="btn-tambah" onClick={onNavigate}>
      <AiFillPlusCircle size={50} />
    </div>
  );
};
export default ButtonTambahCatatan;

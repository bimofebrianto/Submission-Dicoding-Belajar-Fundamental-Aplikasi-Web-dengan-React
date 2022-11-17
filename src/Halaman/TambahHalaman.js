import React from "react";
import { AddNote } from "../components/components-catatan";
import { Jarak } from "../components/components-button";

const TambahHalaman = () => {
  return (
    <>
      <Jarak height={100} />
      <div className="container-add">
        <AddNote />
      </div>
    </>
  );
};
export default TambahHalaman;

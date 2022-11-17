import React, { useContext } from "react";
import {ItemNote} from "./index";
import PropType from 'prop-types';
import LocaleContext from "../../contexts/LocaleContext";

const ArsipCatatan = ({ archiveds}) => {

  const { locale } = useContext(LocaleContext);

  return (
    <div className="container">
      <div className="wrapper">
        {archiveds.length === 0 ? (
          locale === "id" ? <p>Tidak ada catatan</p> : <p>No notes</p>
        ) : (
          archiveds.map((note) => (
            <ItemNote
              key={note.id}
              {...note}
              id={note.id}
              label={"Pindahkan"}
            />
          ))
        )}
      </div>
    </div>
  );
};

ArsipCatatan.protoType = {
  archiveds: PropType.func.isRequired,
}

export default ArsipCatatan;

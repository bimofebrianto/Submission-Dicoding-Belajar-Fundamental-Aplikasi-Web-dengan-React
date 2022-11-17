import React, { useContext} from "react";
import PropType from 'prop-types';
import CatatanItem from "./CatatanItem";
import LocaleContext from "../../contexts/LocaleContext";

const ListCatatan = ({notes}) => {

  const { locale } = useContext(LocaleContext);

  return (
    <div className="container">
        <div className="wrapper">
          {notes.length === 0 ? (
            locale === "id" ? <p>Tidak ada catatan</p> : <p>No notes</p>
          ) : (
            notes.map((note) =>
              note.archived === false ? (
                <CatatanItem
                  key={note.id}
                  {...note}
                  id={note.id}
                  label={"Arsipkan"}
                />
              ) : null
            )
          )}
        </div>
      </div>
  );
};

ListCatatan.propType = {
  notes: PropType.arrayOf(PropType.object).isRequired
}

export default ListCatatan;

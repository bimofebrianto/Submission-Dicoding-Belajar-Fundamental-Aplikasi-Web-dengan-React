import React from "react";
import { showFormattedDate } from "../../utils/local-data";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import PropType from 'prop-types';
import { Jarak } from "../components-button";

const DetailCatatan = ({note, unArchive, onArchive, onDelete}) => {

  return (
    <div className="container-notepage">
      <h1>{note.title}</h1>
      <span>{showFormattedDate(note.createdAt)}</span>
      <Jarak height={50}/>
      <p className="body-notepage">{parser(note.body)}</p>
      <div className="container-btn-notepage">
        {note.archived === true ? (
          <Link
            className="btn-notepage"
            onClick={() =>  unArchive(note.id)}
          >
            <BiArchiveOut size={40} />
          </Link>
        ) : (
          <Link
            className="btn-notepage"
            onClick={() => onArchive(note.id)}
          >
            <BiArchiveIn size={40} />
          </Link>
        )}
        <Link className="btn-notepage"  to="/" onClick={() => onDelete(note.id)}>
          <AiOutlineDelete size={40} />
        </Link>
      </div>
    </div>
  );
};



DetailCatatan.protoType={
  note: PropType.object.isRequired,
  onArchive: PropType.func.isRequired,
  onDelete: PropType.func.isRequired,
  archive: PropType.func.isRequired,
}

export default DetailCatatan;

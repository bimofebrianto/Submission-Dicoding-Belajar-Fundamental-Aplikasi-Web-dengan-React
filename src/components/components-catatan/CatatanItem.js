import React from "react";
import { showFormattedDate } from "../../utils/local-data";
import parser from "html-react-parser";
import { Link } from "react-router-dom";
import PropType from 'prop-types';

function CatatanItem({ id ,title, createdAt, body }) {
  const tanggal = showFormattedDate(createdAt);

  return (
    <div className="card">
      <div className="card-list">
        <Link to={`/notes/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p className="tgl">{tanggal}</p>
        <p>{parser(body)}</p>
      </div>
    </div>
  );
}

CatatanItem.propType ={
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  createdAt: PropType.string.isRequired,
  body: PropType.string.isRequired
}

export default CatatanItem;

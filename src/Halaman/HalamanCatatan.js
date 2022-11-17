import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { DetailCatatan } from "../components/components-catatan";
import { Loading } from "../components/components-button";
import LocaleContext from "../contexts/LocaleContext";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";

function HalamanCatatan() {
  const [note, setNote] = useState();
  const [loading, isLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getNote(id).then((data) => {
      setNote(data.data);
      isLoading(false);
    });
  }, [id]);

  const onArchive = (id) => {
    Swal.fire({
      title: locale === "id" ? "Apakah Anda ingin mengarsipkan catatan?" : "Do you want to archived the note?",
      showCancelButton: true,
      confirmButtonText: locale === "id" ? "Arsipkan" : "Archive",
      denyButtonText: locale === "id" ? "Jangan asrip" : `Don't archive`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Catatan telah di arsipkan!",
          "",
          "success",
          archiveNote(id).then((res) => {
            navigate("/");
          })
        );
      }
    });
  };

  const unArchive = (id) => {
    Swal.fire({
      title: locale === "id" ? "Apakah Anda ingin membatalkan pengarsipan catatan?" : "Do you want to unarchived the note?",
      showCancelButton: true,
      confirmButtonText: locale === "id" ? "Membatalkan arsip" : "unarchive",
      denyButtonText: locale === "id" ? "Jangan membatalkan asrip" : `Don't unarchive`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Arsipan telah di batalkan!",
          "",
          "success",
          unarchiveNote(id).then((res) => {
            navigate("/archives");
          })
        );
      }
    });
  };

  const onDelete = (id) => {
    deleteNote(id);
  };

  return <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>{loading === true ? <Loading /> : <DetailCatatan note={note} onArchive={onArchive} unArchive={unArchive} onDelete={onDelete} />}</div>;
}
export default HalamanCatatan;

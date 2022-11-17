import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Button, Input, Jarak } from "../components-button";
import { addNote } from "../../utils/network-data";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../../contexts/LocaleContext";

const TambahCatatan = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    if (!title || !body) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      const userData = {
        title,
        body,
      };
      addNote(userData).then((res) => {
        navigate("/");
      });
    }
  };

  return (
    <form className="addNote" onSubmit={onSubmitEventHandler}>
      <Jarak height={15} />
      {locale === "id" ? <p>Tulis catatanmu</p> : <p>Write your notes</p>}
      <Jarak height={15} />
      <Input width={"maxContent"} padding={"20px"} maxLength={50} placeholder={locale === "id" ? "Judul..." : "title..."} value={title} onChange={(e) => setTitle(e.target.value)} required />
      <div data-placeholder={locale === "id" ? "Sebenarnya saya adalah ...." : "Actually i am is..."} contentEditable rows="10" cols="50" onInput={(e) => setBody(e.target.innerHTML)} required className="input-body"></div>
      <Button
        label={locale === "id" ? "Tambah Catatan" : "Add Note"}
        type={"submit"}
        style={{
          backgroundColor: "#0ca597",
          color: "#333",
          padding: "15px",
          border: "2px solid #f2f2f2",
          cursor: "pointer",
          fontWeight: 800,
        }}
      />
    </form>
  );
};

export default TambahCatatan;

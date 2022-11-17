import React, { useContext, useEffect, useState } from "react";
import { ListCatatan, SearchCatatan } from "../components/components-catatan";
import { ButtonTambahCatatan, Jarak, Loading } from "../components/components-button";
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";

function HalamanUtamaCatatan() {
  const [notes, setNotes] = useState([]);
  const [loading, isLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then((data) => {
      setNotes(data.data);
      isLoading(false);
    });
  }, []);

  const [SearchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return SearchParams.get("keyword") || "";
  });

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Jarak height={100} />
      {locale === "id" ? <h1>Catatanmu</h1> : <h1>Your note</h1>}
      <Jarak height={20} />
      <SearchCatatan keyword={keyword} searchHandler={onKeywordChangeHandler} />
      {loading === true ? <Loading /> : <ListCatatan notes={filteredNotes} />}
      <ButtonTambahCatatan />
    </div>
  );
}

export default HalamanUtamaCatatan;

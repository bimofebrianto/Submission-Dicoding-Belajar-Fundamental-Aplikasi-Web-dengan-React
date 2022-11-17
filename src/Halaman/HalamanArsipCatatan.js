import React, { useContext, useEffect, useState } from "react";
import { ArsipCatatan, SearchCatatan } from "../components/components-catatan";
import { Jarak, Loading } from "../components/components-button";
import { getArchivedNotes } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import { useSearchParams } from "react-router-dom";

const HalamanArsipCatatan = () => {
  const [archived, setArchived] = useState([]);
  const [loading, isLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getArchivedNotes().then((data) => {
      setArchived(data.data);
      isLoading(false);
    });
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = archived.filter((note) => {
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
      {locale === "id" ? <h1>Catatan yang diarsipkan</h1> : <h1>Archived Note</h1>}
      <Jarak height={20} />
      <SearchCatatan keyword={keyword} searchHandler={onKeywordChangeHandler} />
      {loading === true ? <Loading /> : <ArsipCatatan archiveds={filteredNotes} />}
    </div>
  );
};

export default HalamanArsipCatatan;

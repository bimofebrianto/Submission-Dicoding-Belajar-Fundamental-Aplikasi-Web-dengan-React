import React, { useContext} from "react";
import LocaleContext from "../../contexts/LocaleContext";
import { Input } from "../components-button";
import PropType from 'prop-types';

const SearchCatatan = ({keyword, searchHandler}) => {

  const { locale } = useContext(LocaleContext);


  return (
    <>
      <Input
        width={"50%"}
        padding={"15px"}
        placeholder={locale === "id" ? "Cari judul..." : "Search by title..."}
        value={keyword}
        onChange={(e) => searchHandler(e.target.value)}
      />
    </>
  );
};


SearchCatatan.protoType = {
  keyword: PropType.string,
  searchHandler: PropType.func,
}

export default SearchCatatan;

import React, { useState } from "react";
import "./SearchBar.css";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

const SearchBar = ({ sendFunction }) => {
  const [value, setValue] = useState("");

  const handleLocalKeypress = e => {
    if (e.key === "Enter") {
      return send();
    }
  };

  const send = () => sendFunction(value);

  const edit = e => setValue(e.target.value);

  return (
    <div className="wrapper">
      <Paper className="wrapSearch" elevation={1}>
        <InputBase
          className="searchField"
          placeholder="Search men's clothes..."
          onKeyPress={handleLocalKeypress}
          onChange={edit}
        />
        <IconButton className="searchIcon" onClick={send}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;

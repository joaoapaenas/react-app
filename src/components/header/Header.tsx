import React, { useEffect, useState } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import "./Header.css";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const onSubmit = function(event: any) {
    event.preventDefault();
    alert("submit");
  };

  return (
    <header className="header">
      <span className="header__logo">Fmail</span>
      <form className="header__search-form" onSubmit={onSubmit}>
        <Input fullWidth className="header__search-field" />
        <Button type="submit" variant="contained" color="primary">
          <SearchIcon />
        </Button>
      </form>
    </header>
  );
}

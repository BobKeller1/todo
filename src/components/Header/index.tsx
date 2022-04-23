import React from "react";
import {SvgIcon} from "../Icons";
import {InputSearch, InputSearchWrapper, LogoTitle, Wrapper} from "./styled";


const Header = () => {
  return (
    <div>
      <Wrapper>
        <LogoTitle>
          <SvgIcon id={"watch"} />
          <span style={{color: "white"}}>TODO IT</span>
        </LogoTitle>
        <InputSearchWrapper>
          <InputSearch placeholder={"Введите название"}/>
          <SvgIcon id={"icons-search"} style={{position: "absolute"}}/>
        </InputSearchWrapper>
      </Wrapper>
    </div>
  );
};

export default Header;

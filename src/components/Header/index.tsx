import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1b4572;
`;

const Header = () => {
  return (
    <div>
      <Wrapper>
        <p>Крутое название</p>
      </Wrapper>
    </div>
  );
};

export default Header;

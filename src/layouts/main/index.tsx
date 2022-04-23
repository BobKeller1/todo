import React, {FC} from 'react';
import styled from "styled-components";


interface IMainLayout {
  children: React.ReactElement
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const MainLayout: FC<IMainLayout> = ({children}) => {
  return (
    <Container>
      <main style={{padding: "10px"}}>
        {children}
      </main>
    </Container>
  );
};

export default MainLayout;

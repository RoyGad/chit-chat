import { styled } from "styled-components";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
    return (
      <Container>
        <Header>
            <Avatar/>
        </Header>
      </Container>
    )
  }

  export default Sidebar;

  const Container = styled.div``;
  const Header = styled.div``;
  
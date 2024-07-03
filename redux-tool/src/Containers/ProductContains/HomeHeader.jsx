import {Container, Navbar} from "react-bootstrap";

const HomeHeader = ()  => {
    return(
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Shopping App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
export default HomeHeader;
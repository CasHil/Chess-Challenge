import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import ChallengeChessBoard from "./components/ChallengeChessBoard/ChallengeChessBoard";
import ChallengeSelector from "./components/ChallengeSelector/ChallengeSelector";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container fluid>
          <Row>
            <Col className="col-3">
              <ChallengeSelector />
            </Col>
            <Col className="col-6" style={{ marginTop: "1rem" }}>
              <ChallengeChessBoard />
            </Col>
            <Col className="col-3" />
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;

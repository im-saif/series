import "./style.css"
import { Route } from "react-router-dom";
import AllMeetups from "./components/AllMeetups";
import Navbar from "./components/Navbar";
import Episodes from "./components/Episodes";
import WatchPage from "./components/WatchPage";

function App() {

  return (
    <div>
      <Navbar />
      <Route path="/" exact component={AllMeetups}/>
      <Route path="/:name" exact component={Episodes} />
      <Route path="/:name/:num" component={WatchPage} />
    </div>
  );
}

export default App;

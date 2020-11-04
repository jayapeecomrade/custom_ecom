import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}



const TopicsList = (props) => {
  return (
    <div>
      <h1>Topic List Page</h1>
    </div>
  )
}

const TopicDetail = (props) => {
  return (
    <div>
      <h1>Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route exact path='/topics/:topicId' component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;

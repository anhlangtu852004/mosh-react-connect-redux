import './App.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import BugsList from './components/BugList';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  )
};

export default App;

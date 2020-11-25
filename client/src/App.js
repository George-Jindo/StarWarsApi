import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './components/Intro';

function App() {
    return (
        <Router>
            <div className='App'>
                <Route path='/' exact>
                    <Intro />
                </Route>

                <Route path='/starwars-api' exact>
                    <Navbar />
                    <div className='main'>
                        <Main />
                    </div>
                </Route>
            </div>
        </Router>
    );
}

export default App;

import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <div className='main'>
                <Main />
            </div>
        </div>
    );
}

export default App;

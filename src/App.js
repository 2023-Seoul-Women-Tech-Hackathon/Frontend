import { Map } from './components/Map';
import './App.css';
import { MobilePreview } from './components/MobilePreview';

function App() {
    return (
        <div className="App">
            <MobilePreview>
                <Map />
            </MobilePreview>
        </div>
    );
}

export default App;

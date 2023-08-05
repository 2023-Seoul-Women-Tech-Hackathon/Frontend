import './App.css';
import { MobilePreview } from './components/MobilePreview';
import { SearchShelter } from './pages/SearchShelter';

function App() {
    return (
        <div className="App">
            <MobilePreview>
                <SearchShelter />
            </MobilePreview>
        </div>
    );
}

export default App;

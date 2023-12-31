import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Create } from './pages/Create';
import { Read } from './pages/Read';
import { Update } from './pages/Update';
import { Delete } from './pages/Delete';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
        </Routes>
    );
}

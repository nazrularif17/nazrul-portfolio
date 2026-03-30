import './App.css'
import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'
import Home from './pages/home.tsx'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

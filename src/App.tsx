import './App.css'
import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'

import Home from './pages/home.tsx'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import Services from './components/Services';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-900 px-4 text-gray-50 md:px-8 lg:px-16">
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;

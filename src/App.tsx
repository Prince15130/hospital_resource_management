import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}

export default App;

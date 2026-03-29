import { Link } from 'react-router-dom'; // 1. Link import karo

function Home() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-2xl rounded-xl m-4">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        Student Management System 🎓
      </h1>
      <p className="text-xl mb-8 opacity-90">
        Manage students easily with modern UI
      </p>
      
      {/* 2. '<a>' ki jagah 'Link' aur 'href' ki jagah 'to' use karo */}
      <Link 
        to="/students" 
        className="bg-orange-400 px-8 py-4 rounded-full text-black font-bold text-lg shadow-md hover:bg-orange-500 hover:scale-105 transition-all duration-300"
      >
        Get Started &rarr;
      </Link>
    </div>
  );
}

export default Home;
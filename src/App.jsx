import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import './App.css';

function App() {
    return (
        <div className="text-4xl flex space-x-4 justify-center items-center min-h-screen">
            <h2 className="text-2xl">Mehedi Hasan Sarkar</h2>
            <a
                className="hover:text-red-700 transition-all"
                target="_blank"
                href="https://www.facebook.com/MehediSarkar2k"
                rel="noreferrer"
            >
                <MdFacebook />
            </a>
            <a
                className="hover:text-red-700 transition-all"
                target="_blank"
                href="https://github.com/mehedisarkar2k"
                rel="noreferrer"
            >
                <BsGithub />
            </a>
            <a
                className="hover:text-red-700 transition-all"
                target="_blank"
                href="https://www.linkedin.com/in/mehedisarkar2k/"
                rel="noreferrer"
            >
                <FaLinkedinIn />
            </a>
        </div>
    );
}

export default App;

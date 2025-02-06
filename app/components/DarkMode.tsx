// import { useState, useEffect } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// const DarkMode: React.FC = () => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//   // Comprobamos el tema en localStorage o la preferencia del sistema operativo
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
//     if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//       setIsDarkMode(true);
//       document.documentElement.classList.add('dark');
//     } else {
//       setIsDarkMode(false);
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   // Cambiar entre modos claro y oscuro
//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       if (newMode) {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem('theme', 'light');
//       }
//       return newMode;
//     });
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300'
//     >
//       {isDarkMode ? (
//         <FaMoon size={20} className='text-gray-100' />
//       ) : (
//         <FaSun size={20} className='text-gray-100' />
//       )}
//     </button>
//   );
// };

// export default DarkMode;

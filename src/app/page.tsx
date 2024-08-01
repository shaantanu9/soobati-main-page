// // import Head from "next/head";
// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //       <Head>
// //         <title>Coming Soon - Hyperlocal Social Media App</title>
// //         <meta
// //           name="description"
// //           content="Stay tuned for the launch of our hyperlocal social media app!"
// //         />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
// //         <h1 className="text-6xl font-bold rounded-2xl p-3 bg-[#0163EC]">
// //           Coming Soon
// //         </h1>

// //         <p className="mt-3 text-2xl text-black ">
// //           Our hyperlocal social media app is launching soon. Stay tuned!
// //         </p>

// //         <p className="mt-3 text-lg text-gray-600">
// //           Connect with your community like never before.
// //         </p>

// //         <form className="mt-6 flex flex-col items-center">
// //           <input
// //             type="email"
// //             placeholder="Enter your email to stay updated"
// //             className="px-4 py-2 text-lg border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           <button
// //             type="submit"
// //             className="mt-4 px-6 py-3 bg-[#0163EC] text-white text-lg font-medium rounded-md hover:bg-blue-600"
// //           >
// //             Notify Me
// //           </button>
// //         </form>
// //       </main>

// //       <footer className="flex items-center justify-center w-full h-24 border-t">
// //         <p className="text-gray-500">
// //           &copy; {new Date().getFullYear()} Hyperlocal Social Media App. All
// //           rights reserved.
// //         </p>
// //       </footer>
// //     </div>
// //   );
// // }

// pages/index.tsx

import React from "react";
import Head from "next/head";
import Image from "next/image";
import NotifyMeForm from "./NotifyMeForm";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Coming Soon - Hyperlocal Social Media App</title>
        <meta
          name="description"
          content="Stay tuned for the launch of our hyperlocal social media app!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div
          className="text-2xl font-bold
        text-black 
        "
        >
          Soobati
        </div>
        <nav className="space-x-6">
          {/* <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">Blog</a>
          <a href="#" className="text-gray-700 hover:text-black">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact</a>
          <a href="#" className="text-gray-700 hover:text-black">FAQ</a> */}
        </nav>
        <a
          href="#"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          App Coming Soon
        </a>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 text-center py-20">
        <h1 className="text-5xl font-bold mb-6 text-black max-w-4xl">
          Let us help you connect with your neighbours like never before.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Soobati is a hyperlocal social media app that helps you connect with
          your neighbours, share information, and build a strong community.
        </p>
      
      <NotifyMeForm />
        <div className="mt-10">
          {/* Add an image or illustration here */}
          <Image
            width={1020}
            height={1080}
            src="/soobati-main-img.avif"
            alt="Illustration"
            //  className="w-full max-w-md mx-auto"
          />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Hyperlocal Social Media App. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

// // pages/index.tsx

// import React from 'react';
// import Head from 'next/head';

// const Home: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Coming Soon - Hyperlocal Social Media App</title>
//         <meta name="description" content="Stay tuned for the launch of our hyperlocal social media app!" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header className="flex justify-between items-center p-6 bg-white shadow-md">
//         <div className="text-2xl font-bold">MyApp</div>
//         <nav className="space-x-6">
//           <a href="#" className="text-gray-700 hover:text-black">Home</a>
//           <a href="#" className="text-gray-700 hover:text-black">About</a>
//           <a href="#" className="text-gray-700 hover:text-black">Elements</a>
//           <div className="relative">
//             <a href="#" className="text-gray-700 hover:text-black">Pages</a>
//             <div className="absolute right-0 hidden mt-2 w-48 bg-white border border-gray-200 shadow-lg">
//               <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Subpage 1</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Subpage 2</a>
//             </div>
//           </div>
//         </nav>
//         <a href="#" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">Get Started</a>
//       </header>

//       <main className="flex flex-col items-center justify-center flex-1 text-center py-20">
//         <h1 className="text-5xl font-bold mb-6">
//           The Ultimate Starter Template You Need To Start Your Next Project
//         </h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Our app is a free starter template built with Next and TailwindCSS, providing everything you need to jumpstart your project and save valuable time.
//         </p>
//         <a href="#" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
//           Get Started For Free
//         </a>
//       </main>

//       <div className="flex justify-center mt-10">
//         {/* Add your image here */}
//         <img src="https://nextplate.netlify.app/_next/image?url=%2Fimages%2Fbanner.png&w=1920&q=75" alt="Illustration" className="w-full max-w-xl mx-auto" />
//       </div>

//       <footer className="flex items-center justify-center w-full h-24 border-t mt-10">
//         <p className="text-gray-500">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import Link from 'next/link';


const getEvents = async () => {
  const res = await fetch('https://sgfp.ca/api/v1/events.json?timed_in_the=future&access_token=7e9300df35e28b01c8633f0bcccfcb20');

  if (!res.ok) {
    throw new Error('no planets');
  }

  return res.json();

};

const PlanetsList = async () => {

  const planets = await getEvents();


  return (
    <ul className="bg-midnight text-tahiti">
      {planets.map((planet, index) => (
        <li key={index}>          
          <h2 className="text-4xl 600 red font-bold underline">{planet.name}</h2>
          <a href={planet.url}>MORE
            {planet.image_url}
            <br />
            <img src={planet.image_url} />
          </a>
          <br />
          <br />
          <br />
        </li>

      ))}
    </ul>
  )

};

export default PlanetsList;








// const getPlanets = async () => {
//   const res = await fetch('https://swapi.dev/api/planets');

//   if (!res.ok) {
//     throw new Error('no planets');
//   }

//   return res.json();

// };

// const PlanetsList = async () => {

//   const planets = await getPlanets();

//   return (
//     <ul>
//       {planets.results.map((planet, index) => (
//         <li key={index}>{planet.name}</li>
//       ))}
//     </ul>
//   )

// };

// export default PlanetsList;







// import Image from 'next/image'
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }

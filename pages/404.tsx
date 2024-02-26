// // pages/404.tsx
// import React from 'react';

// const NotFoundPage: React.FC = () => {
//   return (
//     <div>
//       <h1>Page Not Found</h1>
//       <p>Sorry, the page you are looking for does not exist.</p>
//     </div>
//   );
// };

// export default NotFoundPage;


// pages/404.tsx
import React, { useEffect, useState } from 'react';

const NotFoundPage: React.FC = () => {
  const [randomMeme, setRandomMeme] = useState<string>('');

  useEffect(() => {
    fetchRandomMeme();
  }, []);

  const fetchRandomMeme = async () => {
    try {
      const response = await fetch('https://api.memegen.link/images/buzz', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await response.json();
      setRandomMeme(data.url);
    } catch (error) {
      console.error('Error fetching random meme:', error);
    }
  };

  return (
    <div>
      <h1>Page Not Found - Random Memes Space</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      {randomMeme && <img src={randomMeme} alt="Random Meme" />}
    </div>
  );
};

export default NotFoundPage;

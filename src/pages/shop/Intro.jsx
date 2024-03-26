import React from 'react'
import background from '../../asset/intro.jpg';
import { Link } from 'react-router-dom';

export const Intro = () => {
    const styles = {
      container: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      content: {
        position: 'relative', // Ensures content is positioned relative to the container
        zIndex: 1, // Set a higher z-index to ensure content appears on top of the overlay
        padding: '20px', // Adjust padding as needed
        textAlign: 'center',
      },
    };
  return (
    <div style={styles.container}>
      <div className='main'>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <h2>Hi, Welcome!</h2>
          <Link to='/'>Get Started</Link>
          <Link to='signin'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

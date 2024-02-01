import React, { ReactNode } from 'react';
import styles from './styles.module.css'

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <>    
      <nav>About NavBar</nav>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default AboutLayout
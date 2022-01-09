import React from 'react';
// Here we are importing a CSS file as a dependency
import './styles/Header.css';
import GitHubCat from './assets/GitHubCat.png'
import LinkedInLogo from './assets/LinkedIn_logo_initials.png'

function Footer() {
  return (
    <footer className="footer">
      <h1>Github Link for future use</h1>
      <a href="https://www.github.com/umnovjp"><img src={GitHubCat} alt="GitHub Logo" width="38.5" height="38.5" /></a>
      <a href="https://www.linkedin.com/in/alexanderumnov/"><img src={LinkedInLogo} alt="GitHub Logo" width="38.5" height="38.5" /></a>
    </footer>
  );
}

export default Footer;

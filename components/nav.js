import React from 'react'
import Link from 'next/link'


const Nav = () => (
  <nav>
    <ul>
      <li className="navLogo">
        <Link href="#">
        <img src="/logo.png"></img>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/agenda">
          <a>Agenda</a>
        </Link>
      </li>
      <li>
        <Link href="/attend">
          <a>Why Attend?</a>
        </Link>
      </li>
      <li>
        <Link href="/testimonials">
          <a>Testimonials</a>
        </Link>
      </li>
      <li>
        <Link href="/location">
          <a>Locations</a>
        </Link>
      </li>
    </ul>


    <style jsx>{`
      nav {
        text-align: center;
        border-bottom: 2px solid #e00034;
      }

      .navLogo {
        width: 10%;
        height: auto;
      }

      .navLogo img {
        width: 100%;
      }

      color: #000000;

      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #000000;
        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
        border-bottom: 2px solid #ffffff;
      }

      a:hover {
        border-bottom: 2px solid #e00034;
      }
    `}</style>
  </nav>
)

export default Nav

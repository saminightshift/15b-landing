import React from 'react'
import Link from 'next/link'


const Nav = () => (
  <nav>
    
      <div className="navLinks">
      <ul>
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
      </ul>
    </div>


    <style jsx>{`
      nav {
        width: 100%;
        height: 50px;
        border-bottom: 2px solid #e00034;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: rgba(255,255,255,0.9);
      }

      ul {
        margin: auto 0;
        text-align: center;
        display: flex;
        padding-top: 10px;
        justify-content: space-between;
      }

      .navLinks {
        width: 80%;
        margin: 0 auto;
        padding-right: 15px;
        font-size: 16px;

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

      .regLi {
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        color: #ffffff;
        display: block;
        position: relative;
        margin-top: -1px;
        font-size: 10px;
      }

      .closeBtn {
        font-weight: bold;
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 0%;
        padding: 12px 16px;
        transform: translate(0%, -50%);
      }

      .closeBtn:hover {background: #AD0028;}

    `}</style>
  </nav>
)

export default Nav

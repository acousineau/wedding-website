import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 1;
  background: white;
  width: 100%;

  .desktop-nav {
    display: flex;
    justify-content: space-between;
  }

  & > .desktop-nav {
    padding: 4px 16px;
  }

  .mobile-nav {
    overflow: hidden;
    transition: all 0.3s ease-in-out 0s;

    li {
      padding: 6px 16px;
    }
  }

  @media only screen and (max-width: 768px) {
    .desktop-nav li {
      display: none;
    }
  }

  li {
    display: flex;
    padding: 6px 8px;
  }

  a {
    text-decoration: none;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #666;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`

const NavHamburger = styled.button`
  display: none;
  background: transparent;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;

  &:hover {
    background: transparent;
  }

  &[data-is-open='true'] {
    div {
      transform: rotate(135deg);

      &:before,
      &:after {
        top: 0;
        transform: rotate(90deg);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }

  div {
    position: relative;
    background-color: #666;
    display: flex;
    height: 4px;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: all 0.25s;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: -10px;
      width: 100%;
      height: 4px;
      background: inherit;
    }

    &:after {
      top: 10px;
    }
  }
`

const Navigation = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = React.useState(false)

  return (
    <Nav>
      <ul className="desktop-nav">
        <NavHamburger
          data-is-open={isMobileMenuOpen}
          onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
        >
          <div />
        </NavHamburger>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/wedding-details">
            <a>Wedding Details</a>
          </Link>
        </li>
        <li>
          <Link href="/travel-lodging">
            <a>Travel &amp; Lodging</a>
          </Link>
        </li>
        <li>
          <Link href="/island">
            <a>The Island</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
        <li>
          <Link href="/registry">
            <a>Registry</a>
          </Link>
        </li>
        {/* <li>
        <Link href="/rsvp">
          <a>RSVP</a>
        </Link>
      </li> */}
      </ul>
      <ul className="mobile-nav" style={{ maxHeight: `${isMobileMenuOpen ? '100vh' : '0'}` }}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/wedding-details">
            <a>Wedding Details</a>
          </Link>
        </li>
        <li>
          <Link href="/travel-lodging">
            <a>Travel &amp; Lodging</a>
          </Link>
        </li>
        <li>
          <Link href="/island">
            <a>The Island</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
        <li>
          <Link href="/registry">
            <a>Registry</a>
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation

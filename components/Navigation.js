import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  /* :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
  } */
  text-align: center;

  ul {
    display: flex;
    justify-content: space-between;
  }
  & > ul {
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
`

const Navigation = () => (
  <Nav>
    <ul>
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
      <li>
        <Link href="/rsvp">
          <a>RSVP</a>
        </Link>
      </li>
    </ul>
  </Nav>
)

export default Navigation

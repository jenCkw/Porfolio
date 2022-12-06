import React from 'react'
import Navbar from './Navbar'
import Portoliojenny from "../images/Portoliojenny.png";
import {Link} from 'react-router-dom'
import styled from 'styled-components';


function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <img src={Portoliojenny} />
        <div>
          <h1>Jenny Chikwanine</h1>
          <p className='sub-title'>Fullstack web developer</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
            odit? Ullam, veritatis distinctio quisquam vel aliquam beatae est ex
            ut, suscipit mollitia, asperiores delectus consectetur sunt itaque
            fugiat temporibus deleniti!
          </p>
          <section>
            <Link className='link-btn'>
              Réalisations
            </Link>
            <Link className='link-second-btn'>
              Contacts
            </Link>
          </section>
        </div>
      </Container>
    </>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 7rem;
  align-items: center;

  div {
    width: 50%;
  }

  h1 {
    color: #f8379b;
    font-size: 40px;
    font-family: Roboto;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
    font-family: Roboto;
  }

  .sub-title {
    color: #dcaa00;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 100px;
    margin-bottom: 1rem;
  }

  section {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    .link-btn {
      background: #f8379b;
      padding: 10px;
      color: #fff;
      text-align: center;
      border-radius: 50px;
      width: 100px;
    }

    .link-second-btn {
      background: #dcaa00;
      color: #fff;
      text-align: center;
      border-radius: 50px;
      width: 100px;
    }
  }
`;

export default Home
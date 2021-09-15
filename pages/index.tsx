import type { NextPage } from 'next'
import { FiPlus } from "react-icons/fi";
import Head from 'next/head'
import { HomeContainer } from '../styles/Home';
import Card from './Card';
import ScrollContainer from 'react-indiana-drag-scroll';

const Home: NextPage = () => {

  function create(){
    // localStorage.getItem();
  }


  return (
    <HomeContainer>
      <Head>
        <title>Kanban</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    
      <ScrollContainer ignoreElements="span">
        <main>
          <Card cardId="teste"/>
          <Card cardId="teste1"/>
          <div className="question">?</div>
          <div className="new"><FiPlus /></div>
        </main>
      </ScrollContainer>
    </HomeContainer>
  )
}

export default Home

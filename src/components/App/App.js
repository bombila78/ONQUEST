import React from 'react';
import Header from '../header/header';
import QuestOptions from '../quest-options/quest-options';
import Quests from '../quests/quests';
import Circles from '../circles/circles';
import Bonuses from '../bonuses/bonuses';
import Footer from '../footer/footer'
import './style.scss'
import About from '../about/about';

const App = () => {

  return(
    <div className="app">
      <Header />
      <QuestOptions />
      <Quests />
      <Circles />
      <Bonuses />
      <About />
      <Footer />
    </div>
  )
}

export default App;
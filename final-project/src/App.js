import React, {useEffect, useState} from 'react';

import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(()=>{

    if(modalOpen){
      document.body.classList.add('app_backdrop-helper')
    }else{
      document.body.classList.remove('app_backdrop-helper')
    }

  },[modalOpen])

  return (
    <div className="app">
      <Header/>
      <Content modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <Footer />
    </div>
  );
}

export default App;

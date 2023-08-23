import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { DataManager } from './data_manager';
import Zapper from '../../components/my_note/Zapper';

const Indicator: NextPage = () => {
  const [content, setContent] = useState('');
  const dataManager = new DataManager();
  
  useEffect(() => {
  }, []);

  function zap(e, uri, id='') {
    if (id !== '') {
      const elem = document.getElementById(id);
      (elem.style.height === '0px') ? elem.style.height = 'auto' : elem.style.height = '0px';
    }
    setContent(uri);
  };
  
  return (
    <div>
      <div style={{height: '450px', border: '1px solid black', display: 'flex'}}>
        <div style={{width: '250px', height: '450px', overflow: 'scroll'}}>
          <Zapper width={'200px'} zap={ zap } contents={ dataManager.giveItself() } />
        </div>
        <div>
          <iframe src={content} width='900' height='450'></iframe>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
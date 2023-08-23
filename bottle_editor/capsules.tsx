import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [content, setContent] = useState('');
  const [aggregate, setAggregate] = useState([]);

  useEffect(() => {
      (async() => {
          const response = await axios.get(`https://razor-edge.net/gold/capsules/doListByJson`,
              {
                  headers: {
                  }
              }
          );
console.log(response);        
          const memento = response.data;
          setAggregate(memento);
      })();
  }, []);
  
  const zap = (e, uri) => {
    setContent(uri);
  };
  
  return (
    <div>
      <div style={{height: '450px', border: '1px solid black', display: 'flex'}}>
        <div style={{width: '250px', height: '450px', overflow: 'scroll'}}>
        {
          aggregate.map((v) => { return (<div>{ ('name' in v) ? v.name : v.ingredient }</div>) })
        }
        </div>
        <div>
          <iframe src={content} width='900' height='450'></iframe>
        </div>
      </div>
      <div>Copyright(C) RazorEdge. All Rights Reserved.</div>
    </div>
  );
};
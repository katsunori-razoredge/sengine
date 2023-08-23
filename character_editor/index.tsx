import React, { useState } from 'react';

export default () => {
  const [auxiliary, setAuxiliary] = useState(`
    &emsp;naiveなヒトに対する態度や「学校を卒業しても学習しているか否か」世間体を気にするか否か, チャップリンについての評価, トレランスに対する態度<br />
    友人は多いのか．友人をどう定義しているか<br />
    ボツrigをボツにできるか<br />
    energy生産量に恵まれているか<br />
    一言居士についてどう評価する?, 鶏割きに牛刀をどう評価する?
  `);
  
  return (
    <div>
      <div className='container-for-character-designer'>
        <div className='key-region'>
          egogram
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
        
        <div className='key-region'>
          沸点
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>

        <div className='key-region'>
          根に持つタイプ
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
        
        <div className='key-region'>
          拾えない捨て犬
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
        
        <div className='key-region'>
          特技
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>

        <div className='key-region'>
          得手
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>

        <div className='key-region'>
          不得手
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
        
        <div className='key-region'>
          Guest roleや被害者 roleにassignされたら
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
      </div>

      <br />
      docoml(default):
      <div className='container-for-character-designer'>
        <div className='key-region'>
          ありがた迷惑
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
      </div>

      <div className='container-for-character-designer'>
        <div className='key-region'>
          売り言葉/* ゼビウス */
        </div>
        
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
        
        <div className='key-region'>
          煽て|尻馬
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
        
        <div className='key-region'>
          ボケable
        </div>
        
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
        
        <div className='key-region'>
          ツッコミable
        </div>
        <div className='value-region'>
          <input style={{ width: '100%'}} type='text' />
        </div>
      </div>
      <div style={{ height: '1vh' }}></div>
      <div>
        <div dangerouslySetInnerHTML = {{ __html: auxiliary  }} />
      </div>
    </div>
  );
};
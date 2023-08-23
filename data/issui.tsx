import React, { useState } from 'react';

export default () => {
  const [name, setName] = useState('Issui');
  
  return (
    <div>
      <div>{name}</div>
      <div style={{ display: 'flex' }}>  
        <div style={{ width: '1rem' }}></div>
        <div>
          <div>
            <div>methods:</div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '1rem' }}></div>
              <div style={{ color: 'lime', background: 'black', width: '90vw' }}>
                <div>explode = () =&gt; &#123;</div>
                <div>
                  &emsp;// thisは<b>徐々に</b>消滅する<br />
                  }<br />
                </div>
              </div>
            </div>{/* the end of a method */}
            <div style={{ height: '1vh' }}></div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '1rem' }}></div>
              <div style={{ color: 'lime', background: 'black', width: '90vw' }}>
                <div>charge = (value) =&gt; &#123;</div>
                <div>
                  &emsp;this.pe += value;<br />
                  }<br />
                </div>
              </div>
            </div>{/* the end of a method */}
          </div>
          <div>
            <div>consumable(s):</div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '1rem' }}></div>
              <div>
                <span className='Variable'>姫</span>: Issuiが爆ぜるのとその効果<br />
                <span className='Variable'>妃</span>: Issuiが生成される過程<br />
              </div>
            </div>
          </div>{/* the end of consumable */}
          <div>
            <div>examples:</div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '1rem' }}></div>
              <div>
                <span className='Variable'>砲</span>: ベートーヴェン英雄<br />
              </div>
            </div>
          </div>{/* the end of consumable */}
        </div>
      </div>
      <div style={{ height: '1rem' }}></div>
      <div>
        &emsp;砂ではないものと見紛う材の土壌のうえには楼閣を建てることができます．<br />
        &emsp;exlodeの効果を表すstreamerとして楼閣がしばしば用いられます．<br />
      </div>
    </div>
  );
};
import React, { useEffect, useState, useRef } from 'react';
import Tank from '../../../components/disc_system/Tank';

export default () => {
  // orthodx|standard
  //   1.dcomlに[漲, 濺]をsetする viz. {m, l: bloom}
  //   2.bloomの模様を描き写す
  
  // higher order
  //   [漲, 濺]のemergingがbloomであることもある．この場合，dcoml['and']は，blankではなかったことがdiscloseされる when gets [漲, 濺].
  //     for examples:
  //       巴投げによる形勢逆転 for agt
  //         agtよりも先にrivalがdcomalが一向牌の状態だと気づく

  const tank = useRef();
  const [discs, setDiscs] = useState([
    {
      type: 'Sail',
      identifier: 'id-00001000',
      contentsForFrontInner: 'dcoml',
      left: 500,
      top: 0,
    },
    {
      type: 'Disc',
      identifier: 'id-00001020',
      contentsForFrontInner: '',
      left: 500,
      top: 0,
    },
    {
      type: 'Disc',
      identifier: 'id-00001010',
      contentsForFrontInner: '[漲, 濺]',
      left: 500,
      top: 100,
    }
  ]);
  
  useEffect(() => {
    tank.current.setAllDiscs({ value: JSON.stringify(discs) });
    tank.current.drawText({ text: '濺は，漲の影', x: 0, y: 10 });
/*    
    tank.current.quadraticCurveTo({ beginVector: { x: 0, y: 100, z: 0 },  imaginaryVectorFirst: { x: 130, y: 0, z: 0 },  endVector: { x: 200, y: 100, z: 0 } });
    tank.current.drawFilledTriangle({ top: { x: 200, y: 100 }, left: { x: 200, y: 80 }, right: { x: 180, y: 90 } });
*/    
  }, []);
  
  return (
    <div>
      <div>
        orthodx|standard<br />
        &emsp;『<br />
        &emsp;&emsp;dcomlに[漲, 濺]をsetする viz. &#123; m, l: bloom &#125;,<br />
        &emsp;&emsp;bloomの模様を描き写す<br />
        &emsp;』<br />
        <br />
        higher order<br />
        &emsp;[漲, 濺]のemergingがbloomであることもある．この場合，dcoml['and']は，blankではなかったことがdiscloseされる when gets [漲, 濺].<br />
        &emsp;&emsp;for examples:<br />
        &emsp;&emsp;&emsp;巴投げによる形勢逆転 for agt<br />
        &emsp;&emsp;&emsp;&emsp;agtよりも先にrivalがdcomalが一向牌の状態だと気づく<br />
    </div>
      <div style={{ margin: '0 100px' }}>
        <Tank ref={tank} />
      </div>
    </div>
  );
};
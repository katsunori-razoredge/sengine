import React, {useState} from 'react';

const Article = () => {
  const [caption, setCaption] = useState('{ フリ, オチ }');
  const [body, setBody] = useState(`
    &emsp;フリとは，rectify for hoiling bloomです．<br />
    <br />
    &emsp;他人に向かって石を投げるという行為を成すと，石を投げられた場合に「報復された」という役がつくことがdcomlに登録されます.<br />
    <br />
    &emsp;fixes OR fixes that failは，識別できません．<br />
    <div>
    </div>
  `);
//  const [caption, setCaption] = useState(`&#123; フリ, オチ &#125;`);
  return (
    <div>
      <div>
        <div><b>{caption}</b></div>
        {/* <div dangerouslySetInnerHTML={{ __html: caption }}></div> */}
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <Article />
  );
};
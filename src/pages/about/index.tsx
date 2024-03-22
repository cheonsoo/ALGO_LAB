import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MarkdownContainer from '@/components/markdownContainer';
import NoPost from '@/components/markdownContainer/noPost';

import Test1 from '@/components/common/test/Test1';

const StyledPostContainer = styled.div`
  height: 100%;
  padding: 40px 20px 20px 20px;
`;

const About = () => {
  const [content, setContent] = useState('');

  try {
    throw new Error('### Manually Produced Error ###');
  } catch (e) {
    console.debug(e.message);
  }

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    try {
      functionDoesntExists();
    } catch (e) {
      console.debug(e.message);
    }

    const url = `http://static.devnology.co.kr/files/posts/about/index.md`;
    axios({
      url,
      method: 'GET'
    })
      .then((res: any) => res.data)
      .then((data: any) => setContent(data));
  };

  const fnTest = () => {
    try {
      fnTestNoExists();
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="aboutContainer">
      <Test1 />
      <StyledPostContainer>{content ? <MarkdownContainer content={content} /> : <NoPost />}</StyledPostContainer>
      <div onClick={fnTest}>.</div>
    </div>
  );
};

export default About;

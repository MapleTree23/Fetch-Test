import Head from "next/head";
import styles from "styles/Home.module.css";
import React,{useRef,} from 'react'
import { Container, Input, Stack, Link, } from '@chakra-ui/react';
import DynamicText from "components/DynamicText";

const Home = () => {

  const textRef = useRef(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(textRef.current){
      textRef.current.changeValue(e.target.value)
    }
  };

  return (
    <>
      <Head>
        <title>Coding Test1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>   
        <Stack className={styles.main}>

          <DynamicText ref={textRef} />
          <Input onChange={onChange} />
        </Stack>
      </Container>
    </>
  );
};

export default Home;

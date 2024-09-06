'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import styles from './page.module.css';
import { Metadata } from 'next';
import Htag from '@/components/Htag/Htag';
import Button from '@/components/Button/Button';
import P from '../components/P/P';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';
import Layout, { withLayout } from '@/layout/Layout';

function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={'primary'} arrow="right">
        Кнопка
      </Button>
      <Button appearance={'ghost'} arrow="right">
        Кнопка
      </Button>
      <P size={'s'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, tempora.
      </P>
      <P size={'m'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, tempora.
      </P>
      <P size={'l'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, tempora.
      </P>
      <Tag size="s">Gohst</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

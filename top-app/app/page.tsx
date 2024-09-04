import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import Htag from '@/components/Htag/Htag';
import Button from '@/components/Button/Button';
import P from '../components/P/P'

export const metadata: Metadata = {
  title: 'Измененные данные',
  description: 'Какой то текст',
};

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={'primary'} arrow='right'>Кнопка</Button>
      <Button appearance={'ghost'} arrow='right'>Кнопка</Button>
      <P size={'s'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, tempora.</P>
      <P size={'m'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, tempora.</P>
      <P size={'l'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, tempora.</P>
    </div>
  );
}

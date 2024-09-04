import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import Htag from '@/components/Htag/Htag';

export const metadata: Metadata = {
  title: 'Измененные данные',
  description: 'Какой то текст',
};

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
    </div>
  );
}

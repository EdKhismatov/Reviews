import styles from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';
import { format } from 'date-fns';

export default function Footer({
  className,
  ...props
}: FooterProps): JSX.Element {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
    </footer>
  );
}

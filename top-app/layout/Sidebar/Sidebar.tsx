import styles from './Sidebar.module.css';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';

export default function Sidebar({ ...props }: SidebarProps): JSX.Element {
  return <div {...props}>Sidebar</div>;
}

import { Title } from '@mantine/core';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6; 
  children: string;
  className?: string

}

const Heading = ({ level = 1, children, className }: HeadingProps) => {
  return <Title className={className} order={level}>{children}</Title>;
}

export default Heading
import { Text } from '@mantine/core';
import { ReactNode } from 'react';

interface TypographyProps {
  variant?: 'body' | 'small' | 'muted' | 'highlight';
  children: ReactNode;
  className?: string
}

const Typography = ({ variant = 'body', children, className }: TypographyProps) => {
  let size: 'sm' | 'md' | 'lg' = 'md';
  let color = 'black';

  if (variant === 'small') size = 'sm';
  if (variant === 'muted') color = 'gray';
  if (variant === 'highlight') color = 'red';

  return <Text className={className} size={size} color={color}>{children}</Text>;
}

export default Typography

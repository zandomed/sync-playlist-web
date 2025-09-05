import { PropsWithChildren } from 'react';

import { Button } from '../ui/button';

type SSOButtonProps = PropsWithChildren & {
  onLinked: () => void;
  onUnlinked: () => void;
  isLinked: boolean;
  hasSession?: boolean;
  onLogin?: () => void;
};

export default function SSOButton({
  onLinked,
  onUnlinked,
  isLinked,
  hasSession,
  onLogin,
  children,
}: SSOButtonProps) {
  const handleClick = async () => {
    if (isLinked) {
      onUnlinked();
    } else {
      onLinked();
    }
  };

  return (
    <Button onClick={handleClick} disabled={isLinked}>
      {children}
    </Button>
  );
}

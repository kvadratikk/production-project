import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const Portal = ({ children, container = document.getElementById('root') }: PortalProps) =>
  createPortal(children, container);

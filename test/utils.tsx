import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { SWRConfig } from 'swr';

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return (
    <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
      {children}
    </SWRConfig>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

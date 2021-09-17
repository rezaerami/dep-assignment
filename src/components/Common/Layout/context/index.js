import { createContext } from 'react';

const LayoutContext = createContext({});
const { Provider: LayoutProvider, Consumer: LayoutConsumer } = LayoutContext;

export { LayoutContext, LayoutProvider, LayoutConsumer };

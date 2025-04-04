// Create, Provide, Use
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CounterProviderProps {
    children: ReactNode;
}

const CounterContext = createContext<any>(null);

export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(c => c+1);
    const decrement = () => setCount(c => c-1);
    return(
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => useContext(CounterContext);
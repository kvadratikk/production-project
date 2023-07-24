import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface UseModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const useModuleLoader = ({ reducers, removeAfterUnmount }: UseModuleLoaderProps) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  const [areReducersLoaded, setAreReducersLoaded] = useState(false);

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    setAreReducersLoaded(true);

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });

        setAreReducersLoaded(false);
      }
    };
    // eslint-disable-next-line
  }, []);

  return areReducersLoaded;
};

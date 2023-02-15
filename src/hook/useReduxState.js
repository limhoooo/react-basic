import { useContext, useEffect, useState } from "react";
import ReduxContext from "../components/context/ReduxContext";

export default function useReduxState() {
  const store = useContext(ReduxContext);

  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
      console.log(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
}

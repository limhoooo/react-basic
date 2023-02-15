import { useContext } from "react";
import ReduxContext from "../components/context/ReduxContext";

export default function useReduxDispatch() {
  const store = useContext(ReduxContext);
  return store.dispatch;
}

import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../application/store/actions/ui";
import { getLoadingState } from "../application/store/selectors/ui";
import './App.css';
import Router from "./pages/Router";

const App = () => {
  const isLoading = useSelector(getLoadingState);

  const dispatch = useDispatch();


  return (
    <Router />
  );
}

export default App;

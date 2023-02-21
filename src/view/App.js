import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../application/store/actions/ui";
import { getLoadingState } from "../application/store/selectors/ui";

import './App.css';

const App = () => {

 const isLoading = useSelector(getLoadingState);

 const dispatch = useDispatch();


  return (
    <div className="App">
      <h1 className="text-red-700 font-bold">FEDERAL GOVERNMENT NIGERIA ENROLLMENT PORTAL</h1>

      <div>{isLoading ? "Loading" : "Not loading"}</div>


      <button onClick={()=>{dispatch(setLoading(!isLoading))}}>Change Loading</button>
    </div>
  );
}

export default App;

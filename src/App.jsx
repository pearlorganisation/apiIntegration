import "./App.css";
import axios from 'axios';
import Form from "./components/Form";


function App() {

  // async function fetchData() {
  //    try {
  //   const response = await axios.get('https://opend.data.go.th/govspending/egpwinner?api-key=ffSlZXkHL6pxgZbJ6QmmsOepYerhY8eA&winner=Italian-Thai&offset=0&limit=20');
  //   console.log(response.data);
  // } catch (error) {
  //   console.error('Error fetching data:', error);
  // }
  // }
  // fetchData();

  return (
    <>
    <Form/>
    </>
  );
}

export default App;

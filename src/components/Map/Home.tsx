import axios from 'axios';

function GetData() {
  function getAPI() {
    axios.post('http://localhost:3000/api/function').then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      <button onClick={() => getAPI()}>Get points!</button>
    </div>
  );
}

export default GetData;

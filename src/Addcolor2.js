import { useState } from 'react';

export function Addcolor2() {
  const [color, setColor] = useState("");
  // const colorList = ["red","blue","yellow"]
  const [colorList, setColorlist] = useState([]);
  const styles = {
    fontSize: "24px",
    backgroundColor: color
  };
  return (
    <div>
      <div className='ad-clr'>
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles} type="text" />
        <button onClick={() => setColorlist([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => (
        <Colorbox color={clr} />
      ))}

    </div>
  );
}
function Colorbox({ color }) {
  const styles = {
    height: "30px",
    width: "300px",
    backgroundColor: color,
    marginTop: "10px",
    border: "1px solid black"
  };
  return (
    <div style={styles}></div>
  );
}

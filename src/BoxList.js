import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import {useState} from "react";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(newBox) {
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(({id, width, height, backgroundColor}) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList

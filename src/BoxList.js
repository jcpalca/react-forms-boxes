import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    let newBox = {...box, id: uuid()}
    setBoxes(boxes => [...boxes, newBox]);
  }

  function removeBox(id) {
   setBoxes(boxes=> boxes.filter(box => box.id !== id ))
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
          removeBox={removeBox}
        />
      ))}
    </div>
  );
}

export default BoxList

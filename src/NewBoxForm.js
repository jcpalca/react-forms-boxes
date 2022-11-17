import {useState} from "react";

function NewBoxForm({addBox}) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData({ height: "", width: "", backgroundColor: ""});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="box-height">Height:</label>
          <input
            id="box-height"
            onChange={handleChange}
            name="height"
            value={formData.height}>
          </input>
        </div>
        <div>
          <label htmlFor="box-width">Width:</label>
          <input
            id="box-width"
            onChange={handleChange}
            name="width"
            value={formData.width}>
          </input>
        </div>
        <div>
          <label htmlFor="box-bg-color">Background Color:</label>
          <input
            id="box-bg-color"
            onChange={handleChange}
            name="backgroundColor"
            value={formData.backgroundColor}>
          </input>
        </div>
        <button>Add a box</button>
      </form>
    </div>
  )
}

export default NewBoxForm

import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

function App(props) {
  const { categories } = props

  const animatedComponents = makeAnimated();

  const handleChange = (e) => {
    props.onCategorySelect(e)
  }

  return <div className="p-5"><Select
    isMulti
    components={animatedComponents}
    className="rounded-3xl bg-gray-300"
    classNamePrefix="rounded-3xl bg-gray-300"
    onChange={handleChange}
    options={categories}
  /></div>
}

export default App
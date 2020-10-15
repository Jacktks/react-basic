import React from "react";

const ByType = (props) => {
  const {
    types,
    valueIdTitle,
    valueByType,
    handleByType,
    countProducts,
  } = props;

  console.log(types);

  const onChange = (type) => {
    const newChecked = [...valueByType];

    const currentType = newChecked.indexOf(type);

    if (currentType === -1) {
      newChecked.push(type);
    } else {
      newChecked.splice(currentType, 1);
    }
    handleByType(newChecked);
  };
  return (
    <div className="refine-by-type">
      <ul>
        {types
          .filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.info.map((e) => (
              <li key={e.id}>
                <input
                  type="checkbox"
                  id={e.id}
                  checked={valueByType.includes(e.type) ? true : false}
                  onChange={() => onChange(e.type)}
                />
                <label htmlFor={e.id}>
                  {e.type}(
                  {
                    countProducts.filter((product) => product.type === e.type)
                      .length
                  }
                  )
                </label>
              </li>
            ))
          )}
      </ul>
    </div>
  );
};

export default ByType;

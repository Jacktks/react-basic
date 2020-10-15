import React from "react";

const ShowSidebar = (props) => {
  const {
    types,
    handleIdTitle,
    handleIdType,
    handleTitle,
    handleType,
    valueTitle,
    valueType,
  } = props;

  const toggleTitle = (id, title, info) => {
    let index = types.findIndex((e) => e.id === id);

    if (index !== -1) {
      handleIdTitle(id);
      handleTitle(title);
      handleType((info = ""));
    }
  };

  const toggleInfo = (id, type, typeMain) => {
    let index = typeMain.info.findIndex((e) => e.id === id);

    if (index !== -1) {
      handleIdType(id);
      handleType(type);
    }
  };
  return (
    <div className="show-result-for">
      <ul>
        {types.map((type) => (
          <li key={type.id}>
            <span
              className={valueTitle.includes(type.title) ? "active" : ""}
              onClick={() => {
                toggleTitle(type.id, type.title, type.info);
              }}
            >
              <i className="fa fa-angle-right"></i> {type.title}
            </span>

            <ul
              style={{
                display: valueTitle.includes(type.title) ? "block" : "none",
              }}
            >
              {type.info.map((sub) => (
                <li key={sub.id}>
                  <span
                    className={valueType.includes(sub.type) ? "active" : ""}
                    onClick={() => {
                      toggleInfo(sub.id, sub.type, type);
                    }}
                  >
                    <i className="fa fa-angle-right"></i> {sub.type}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowSidebar;

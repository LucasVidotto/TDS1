import React from "react";
let renderCount = 0;

 function HeaderForm() {
  renderCount++;

  return (
    <div style={{ marginBottom: 10 }}>
      <span className="counter">Render Count: {renderCount}</span>
      <h1 className="h1">
        
        React Hook Form
      </h1>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        Performant, flexible and extensible forms with easy-to-use validation.
      </p>
     
    </div>
  );
};

export default HeaderForm;

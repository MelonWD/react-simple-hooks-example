// Import react dependencies
import * as React from "react";

/** Renders colours list */
function ColoursListComponent(props: any) {
  // Render colours list component
  return (
    <ul>
      {/* Loop through props.colours */}
      {props.colours.map(function(colour, index) {
        return (
          <li key={index}>
            {colour.name} {colour.color}
          </li>
        );
      })}
    </ul>
  );
}

export default ColoursListComponent;

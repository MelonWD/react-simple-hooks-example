// Import  react dependencies
import * as React from "react";
// Import app dependencies
import ColoursContext from "./shared/colours.context";
import ColoursListComponent from "./colours-list/colours-list.component";

/** Renders colours page */
function ColoursPage() {
  // Create isntance of colours context
  const coloursContext = ColoursContext();
  // Create store for colours on component state
  const [colours, setColours] = React.useState([]);

  // When page has mounted
  React.useEffect(() => {
    // Get colours from context
    coloursContext.getColours().then(response => {
      // Set colours in compoonent state
      setColours(response);
    });
  }, []);

  // Render coloursPage component
  return (
    <div>
      <h1>Colours page</h1>
      {/* Output colours list component with colours prop */}
      <ColoursListComponent colours={colours} />
    </div>
  );
}

export default ColoursPage;

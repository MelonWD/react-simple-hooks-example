# Simple hooks example

## Overview

Following this example, you can see how to handle API requests for data which is used in a single place. We cover sharing data from parent (`ColoursPage`) to child (`ColoursListComponent`) component through [input props](https://reactjs.org/docs/components-and-props.html) and requesting data from an external function.

## Sample code

Code for this example can be found here:

* [Simple hooks code sandbox](https://codesandbox.io/s/github/melonwd/react-simple-hooks-example/tree/master/)
* [Git repo](https://github.com/MelonWD/react-simple-hooks-example)

## Files

This example contains a page component (which is included in the main app component), a context and a list component.

### colours.context.ts `ColoursContext`

This provides context (data/state/functions) to components (or pages) within the colours module.

Here is a quick breakdown of this file:

Creating the `ColoursContext` function and returning an object.

```javascript
function ColoursContext() {
  return {
    ...
  };
}
```

Creating the `getColours` method, which calls an API endpoint and returns a parsed response.

```javascript
getColours: () => {
  return axios.get("https://reqres.in/api/colours").then(res => {
    return res.data.data;
  });
}
```

### colours.page.tsx `ColoursPage`

This is the outer template, which is included in the main app component.

Here is a quick breakdown of this file:

Creating the `ColoursPage` function component.

```javascript
function ColoursPage() {
  ...
}
```

Calling ColoursContext, so we can call it's inner functions later.

```javascript
 const coloursContext = ColoursContext();
```

Using React hooks to create a colours state on the page.

```javascript
 const [colours, setColours] = React.useState([]);
```

Code inside `React.useEffect` runs first when the component has mounted. The empty array after the function closes tells React to only run this once. You can use this array to specify values for React to watch, then when these values change, it will re-run the code in `useEffect`. See the [React docs](https://reactjs.org/docs/hooks-effect.html) for more.

```javascript
 React.useEffect(() => {
 }, []);
```

We call `getColours` from our instance of `ColoursContext` and wait for the response. We then update our colours hook, using `setColours` to the response value.

```javascript
 coloursContext.getColours().then(response => {
   setColours(response);
 });
```

Finally we render the component. We set a `colours` prop value on `ColoursListComponent` to the value of colours in our `ColoursPage` state.

```javascript
 // Render coloursPage component
 return (
   <div>
     <h1>Colours page</h1>
     <ColoursListComponent colours={colours} />
   </div>
 );
```

### colours.list.component.tsx `ColoursListComponent`

Creating the `ColoursListComponent` function component, defining that it accepts input props and returning JSX to be rendered.

```javascript
function ColoursListComponent(props: any) {
  return (
    <ul>
      ...
    </ul>
  );
}
```

Looping through the colours array and output each colour as a list item.

```javascript
{props.colours.map(function(colour, index) {
  return (
    <li key={index}>
      {colour.name} {colour.color}
    </li>
  );
})}
```

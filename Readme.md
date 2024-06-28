# Two types of Export 

- Default Export
    export default Component;
    import Component from "path";
- Named Export 
    export const/let Component;
    import {Component} from "path" ;

# React Hooks
    (Normal js utility function)
    - useState() - Superpowerful State variables in react
    - useEffect()


# React works on Reconciliation Algorithm(React Fiber) in React16
     
- react re-render by comparing Two js Objects without messing with HTML(real DOM) it compares Js Objects(Virtual DOM- React components)

- Virtual DOM is the representation of a actual DOM => normal javascript Object like "<Body />

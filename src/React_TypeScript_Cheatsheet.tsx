// import React from "react" // this is required to render JSX, even if you don't refer to it
// const component = <div></div> // without importing React, this won't work

// // inferred typing
// // less verbose, but possibly leads to errors. usually fine to use!
// const boolean = true;
// const number = 9;
// const string = "string";

// // explicit typing
// const booleanExplicit: boolean = true;
// // this will have an error, because "string" is not a boolean
// const booleanExplicitIncorrect: boolean = "string";

// // more interesting types in TS (everything is an object)
// const list = [] // technically an object, but behaves like an array in c/c++

// // this works, because a list is really an object, but don't do this
// list['key'] = 'value'

// // you want lists to have a defined / consistent type
// // these all have the same type, 3 ways to type a list
// const typedList: string[] = []
// const typedListAlt = [] as string[]
// const typedListInferred = ['string']

// const emptyObject = {}
// const keyAsVariable = "key"

// // TS infers that the type is empty object {}, so we cannot set keys like this
// emptyObject.key = "any value"

// type eptyObjectType = {key: number, key2: number}

// // TS does NOT allow this either
// emptyObject["key"] = "any value"

// emptyObject["anyKey"] = "some other value "
// emptyObject['anyKey'] = 9


// const object = {
//   key: 'value',
//   key2: 'value2',
// }
// // the type of the above object
// type objectType = { key: string, key2: string } // values are strings!

// // value typing is enforced, too
// object.key = 9

// // can we have an object with arbitrary keys? Yes!
// const flexibleObject: { [index: string]: string } = {} 
// flexibleObject['any key'] = 'some string' // in this case, it's okay
// flexibleObject['another key'] = 0 // this is not allowed, because 0 is a number

// // values can be strings or numbers
// const moreFlexibleObject: { [index: string]: (string | number) } = {} 
// moreFlexibleObject['any key'] = 'some string' // in this case, it's okay
// moreFlexibleObject['another key'] = 0 // this is not allowed, because 0 is a number

// // values can be ANYTHING! (generally lazy, not a good idea)
// const mostFlexibleObject: { [index: string]: any } = {} 
// mostFlexibleObject['any key'] = 'some string' // in this case, it's okay
// mostFlexibleObject['another key'] = 0 // this is not allowed, because 0 is a number
// mostFlexibleObject['literally anything'] = [{ key: 'value' }] // this is a list of 1 value, an object, with key "key" and value "value", but it counts as "any"



// // functions take a list of typed arguments and return a value of a type 
// // here's the type of a function (like in a .h file in c/c++)
// type FunctionType = (arg1: string, arg2: number) => number
// const validFunction: FunctionType = (arg1, arg2) => arg2
// const invalidReturn: FunctionType = (arg1, arg2) => arg1 // arg1 is a string, not a number, must return a number
// const invalidArugment: FunctionType = (arg1: number, arg2) => arg1 // arg1 is a string, can't define to be a number

// /* Function typing and union / intersection */
// interface Animal {
//   isAnimal: true,
// }
// interface NamedAnimal extends Animal { // extends is keyword to add that objects values to whatever it extends to 
//   name: string,
// }
// interface Dog extends NamedAnimal { 
//   canBark: true,
// }
// interface Cat extends NamedAnimal {
//   canMeow: true
// }
// type CatDogUnextended = Cat & Dog
// interface CatDog extends Dog, Cat { 
//   isACatDog: true
// }

// const cat: Cat = { isAnimal: true, canMeow: true, name: "Garfield" }
// const dog: Dog = { isAnimal: true, canBark: true, name: "Toto" }
// const catDog: CatDog = { isAnimal: true, canMeow: true, isACatDog: true, canBark: true, name: "blueberry" }
// // this is a function, which takes 1 argument (a Cat object or a Dog object) and returns true (because Dog and Cat always have true for isAnimal)
// const isAnimal = (animal: Cat | Dog) => animal.isAnimal
// isAnimal(cat) // this is okay. A Cat is a Cat or a Dog
// isAnimal(dog) // this is okay. A Dog is a Cat or a Dog

// // this is the same function, but we say that the return type might be false (not really useful, but is valid because boolean = true | false)
// const isAnimalLessSpecific = (animal: Cat | Dog): boolean => animal.isAnimal

// const animalIntersection = (animal: Cat & Dog) => animal.isAnimal
// const animalIntersectionCat = (animal: Cat & Dog) => animal.canMeow
// const animalIntersectionDog = (animal: Cat & Dog) => animal.canBark
// animalIntersection(cat) // error a Cat is not a Dog (it does not have canBark)
// animalIntersection(dog) // error a Dog is not a Cat (it does not have canMeow)
// animalIntersection(catDog) // valid because catDog has all properties of Cat and dog




// /*************************************************************************************************/
// /* React / JSX */
// // A Function Component, is a function that takes 1 argument, an obje1ct, and returns a React.ReactNode (JSX | null)

// // this is the type FunctionComponent that takes no props (an empty object)
// type SimpleFunctionComponentType = (props: {}) => JSX.Element | null

// type AnotherSimpleFunctionComponentType = (props: { name: string }) => JSX.Element | null

// // the actual type for an arbitrary functional component (using TypeScript Generics)
// type GenericFunctionComponentType <T extends object> = (props: T) => JSX.Element | null
// // inference figures this out for you, don't worry too much about

// // this is the same type as SimpleFunctionComponentType
// type SimpleFunctionComponentTypeType = GenericFunctionComponentType<{}>


// // type note (interface vs. type)
// // interface lets you extend to other interfaces, is more specific, an interface must be an object 
// // this is interchangable with the Dog interface
// type DogType = NamedAnimal & { canBark: true }

// // real components must start with a capital letter
// //must return either null or a JSX.Element for the function to be valid 
// //ex const DogComponent = (props: dog) JSX.Element | null =>
// const DogComponent = (props: Dog) => { // valid Function Component
//   if (props.name === 'fido') return null
  
//   return <div>This dog is not named fido!</div>
// }

// // reuse of interfaces, this is useful!
// const AnimalNameComponent = (props: NamedAnimal) => <span>{props.name}</span>
// const IsAnimalComponent = (props: NamedAnimal) => <span>{props.isAnimal}</span>

// const exampleJSX = (
//   <div>
//     <DogComponent 
//       canBark={true}    
//       isAnimal={true}
//       name={'fido'} // could also be name="fido", any non-string value must use the bracket
//     />
//   </div>
// )

// /*Note*/
// // => doesnt need type after if what you are returning is a single line, but if there is more than one
// // you need to specify what the return type is 

// const ComponentWithComprehension = ({ canMeow, isAnimal, name }: Cat) => <span>{isAnimal}</span>
// const ComponentWithSomeComprehension = ({ canMeow, ...namedAnimalProps }: Cat) => ( // ...namedAnimalProps (conventionally just ...props) is an object with the rest of the props
//   <span>
//     This animal can meow? {canMeow}! 

//     <IsAnimalComponent isAnimal={namedAnimalProps.isAnimal} name={namedAnimalProps.name} />

//     {/* this is really nice, equivalent to the above, and generalizes even if I add fields to the named animal interface */}
//     <AnimalNameComponent {...namedAnimalProps} />
//   </span>
// )

// // this will be the most common form
// const ComponentWithSomeComprehensionWithReturn = ({ canMeow, ...namedAnimalProps }: Cat) => {
//   // I can use hooks and stuff here
//   // I can do logic, and compute values for re-use

//   return ( // ...namedAnimalProps (conventionally just ...props) is an object with the rest of the props
//     <span>
//       This animal can meow? {canMeow}! 

//       <IsAnimalComponent isAnimal={namedAnimalProps.isAnimal} name={namedAnimalProps.name} />

//       {/* this is really nice, equivalent to the above, and generalizes even if I add fields to the named animal interface */}
//       <AnimalNameComponent {...namedAnimalProps} />
//     </span>
//   )
// }

// // if you extract a lot of values, you can keep the width of the code short for readability
// const ComponentWithSomeComprehensionWrapped = ({ 
//   canMeow, 
//   ...namedAnimalProps 
// }: Cat) => ( // ...namedAnimalProps (conventionally just ...props) is an object with the rest of the props
//   <span>
//     This animal can meow? {canMeow}! 

//     <IsAnimalComponent isAnimal={namedAnimalProps.isAnimal} name={namedAnimalProps.name} />

//     {/* this is really nice, equivalent to the above, and generalizes even if I add fields to the named animal interface */}
//     <AnimalNameComponent {...namedAnimalProps} />
//   </span>
// )


// //STORYBOOK WORKFLOW  
// //define type or interface, what props component takes
// //implement function that returns JSX



// //this makes our ButtonProps  share the same props as the MuiButtonProps 
// // export interface ButtonProps extends MuiButtonProps {
// //     roundedness?: 'none' | 'square' | 'rounded' | 'circular' //  ? means prop is optional 
// //   }
// //ex.
// // propName?: value  means that that prop is optional to that interfacer/type 



// //***  Note: difference between == and ===  *********************************/
// /*
//  0 == "0"
// true
//  0 === "0"
// false

//    in other cases
// false
//  [] == []
// false
//  [] === []
// false
// */
// /*OTHER NOTE*/

// // todo: example where object has an object as its value as part of a component

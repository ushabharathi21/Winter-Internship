//rafce
import Students from './components/Students'
import {Button} from './components/ui/button'
import Count from './hooks/Count'
const App=()=> {
  let name = 'Usha';
  let age = 18;
  return(
    <>
       <Button variant="default">default</Button>
       <Button variant="destructive">Delete</Button>
       <Button variant="outline">Outline</Button>
       <Button variant="secondary">Secondary</Button>
       <Button variant="ghost">Ghost</Button>
       <Count/>
    <div className="bg-blue-500 text-white p-4">App</div>
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg blue-500 text-black p-4 rounded-lg shadow-md mb-4">Welcome to the React App!</div>
      <h1>This is {name}</h1>
      <p>Age: {age}</p>
      <Students name={name} age={age}/>
      <Button> Click Me </Button>
    </div>
  
    </>
  )
}
export default App
import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Button from './components/Button';
import StudentList from './components/StudentList';
import useInput from './hooks/useInput';


function App() {
  const [value, setValue] = useState('');
  // const [value2, setValue2] = useState('');
  const handleChange = event => {
    setValue(event.target.value);
  };
  // const handleChange2 = event => {
  //   setValue2(event.target.value);
  // };
  // const handleClick = useCallback(() => {
  //   alert('I am a named function')
  // }, []);
  // const data = useMemo(() => {
  //   return [
  //     {name: 'Joseph', age:32},
  //     {name: 'Philip', age:28},
  //     {name: 'Victoria', age:36},
  //     {name: 'sara', age:22},
  //   ]
  // }, []);
  
  // const [title, setTitle] = useState('');
  // const handleTitleChange = event => {
  //   setTitle(event.target.value);
  // };
  const [title, handleTitleChange] = useInput();
  // const [description, setDescription] = useState('');
  // const handleDescriptionChange = event => {
  //   setDescription(event.target.value);
  // };
  const [description, handleDescriptionChange] = useInput();
  const [job, handleJobChange] = useInput();
  const [hobbies, handleHobbiesChange] = useInput();

  return (
    // <div>
    //   <h1>This is My New App</h1>
    //   <input 
    //     value={value} 
    //     onChange={handleChange}
    //     placeholder='Value'
    //   />

    //   <StudentList students={data}/>

    //   {/* <input 
    //     value={value2} 
    //     onChange={handleChange2}
    //     placeholder='Value 2'
    //   /> */}
    //   {/* <Button 
    //     text={value2} 
    //     handleClick={handleClick}
    //   /> */}
    // </div>
    <div>
      <h1>My custom hook example</h1>
      <input 
        placeholder='Title Here'
        value={title} 
        onChange={handleTitleChange}
      />
      <input 
        placeholder='Description Here'
        value={description} 
        onChange={handleDescriptionChange}
      />
      <input 
        placeholder='Job'
        value={job} 
        onChange={handleJobChange}
      />
      <input 
        placeholder='Hobbies'
        value={hobbies} 
        onChange={handleHobbiesChange}
      />
      <button onClick={() => {
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Job:', job);
        console.log('Hobbies:', hobbies);
      }}>Show me the data</button>
    </div>
  );
}

export default App;

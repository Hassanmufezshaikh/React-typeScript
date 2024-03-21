import React from 'react';

// import  { useState } from 'react';
import {Greet} from './components/Greet'
import {Person} from './components/Person'
import {PersonList} from './components/PersonList'
import {Status} from './components/Status'
import {Heading} from './components/Heading'
import {Button} from './components/Button'
import { Oscar } from './components/Oscar';
import { Input } from './components/Input';
import { Test } from './components/polymorphic/Test';
import './App.css';
import { Container } from './components/Container';


function App() {
let i =1;

  const personName ={
    first: 'Hassan',
    last: 'Mufez Shaikh',
  }
  
  // const text = {document.getElementById('textToCopy').textContent}

  // const btn =  {document.getElementById('copyButton')}

  const text = document.getElementById('textToCopy')?.textContent || '';
  const btn = document.getElementById('copyButton') as HTMLButtonElement | null;

  if (btn) {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(text + ++i);
    });
  }

  const personListName =[
    {
    first: 'PersonList',
    last: '[PersonList Component]',
  },
  {
    first: 'martin',
    last: 'Musk [PersonList Component]',
  }

  ]

  return (
    <div className="App">
      <Greet name='Hassan'  isLoggedIn= {true} />
      <Person name={personName} />
      <PersonList names={personListName} />
      <Status  status='error' />
      <Heading>Heading component</Heading>
      <Oscar> 
        <Heading>ddddd</Heading>
      </Oscar>
      <Button handleClick={(event,id)=> {
         console.log('Handle Click',event,id)
      }}></Button>
      <Input  value=''  handleChange= { (event) => console.log(event)}  />
      
      <Container styles={{border: '1px solid black' , padding: '1rem' }} />
      <Test as='p' size='md' color= 'secondary'> Paragraph</Test>
      <Test as='h1' size='lg' color= 'primary'> Heading</Test>
      <Test as='label' htmlFor='someid' size='sm' color= 'secondary'> Label</Test>



    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Button, InputLabel, Input  } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'


function App() {
  const [input,setInput] = useState('')
  const [messages,setMessages] =useState([])
  const [username,setUsername] =useState('Zakaria')

  useEffect(() => {
        //setUsername(prompt('Enter your Name!!!!'))
    db
    .collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>(
      setMessages(snapshot.docs.map(doc => ({
        id:doc.id,
        message:doc.data()
      })))
    ))
  }, [])


  const sendMessage =(event)=>{
    event.preventDefault();
        db.collection('messages')
        .add({
            username:username,
            text:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
     setInput('')
  }

  return (
    <div className="app">
      <h1>Welcome {username}</h1>

      <div className="neo">
        
          <FlipMove className="app__messages">
            {
              messages.map(({id,message})=>(
                <div className="app__message">
                    <Message 
                      key={id}
                      username={username} 
                      message={message}
                    />           
                </div>
              
              ))
            }
          </FlipMove>
        
        <form className="app__formControl"> 
          <FormControl>
              <InputLabel >
                Enter a message..
              </InputLabel>
              <Input
                className="app__formInput" 
                type="text" 
                value={input} 
                onChange={e=>setInput(e.target.value)}
              />
              <Button 
                className="app__formButton"
                disabled={!input}
                variant='contained'
                color='primary'
                type='submit'
                onClick={sendMessage}>
                Send
              </Button>
          </FormControl>
        </form>
      </div>

    </div>
  );
}

export default App;

import { Button, FormControl, Input } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import "./App.css"
import Message from "./Message"
import db from "./firebase"
import firebase from "firebase"
import FlipMove from "react-flip-move"
import SendIcon from "@material-ui/icons/Send"
import { IconButton } from "@material-ui/core"

function App() {
  const [value, setValue] = useState("")
  const [user, setUser] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setUser(prompt("Enter the user name:"))
  }, [])

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      )
  }, [])

  const sendMessage = (event) => (
    event.preventDefault(),
    db.collection("messages").add({
      message: value,
      username: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }),
    setValue("")
  )

  return (
    <div className='App'>
      <h1>Hello {user}</h1>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input
            className='app__iconInput'
            placeholder='Enter a value...'
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <IconButton
            className='app__iconButton'
            disabled={!value}
            variant='contained'
            color='primary'
            type='Submit'
            onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} user={user} message={message} />
        ))}
      </FlipMove>
    </div>
  )
}

export default App
//new commit
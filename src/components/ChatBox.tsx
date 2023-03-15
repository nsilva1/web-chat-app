import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query, where, onSnapshot, orderBy, limit } from 'firebase/firestore'
import { db } from './firebase'

const ChatBox = () => {
  const newMessageRef = useRef<null | HTMLDivElement>(null)
  const [messages, setMessages] = useState<any[]>([])

  const scrollToLatestMessage = () => {
    newMessageRef.current!.scrollIntoView({behavior:'smooth'})
  }

  useEffect(scrollToLatestMessage, [messages])

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(50));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chatMessages: React.SetStateAction<any[]> = []
      querySnapshot.forEach((doc) => {
        chatMessages.push({...doc.data(), id: doc.id})
      });
      setMessages(chatMessages)
    })

    return unsubscribe;
  },[])

  return (
    <div className='pb-44 pt-20 containerWrap'>
        {
            messages.map((message) => (
                <Message key={message.id} message={message} />
            ))
        }
        <div ref={newMessageRef}></div>
    </div>
  )
}

export default ChatBox
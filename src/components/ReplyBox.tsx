import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FormEvent, useState } from 'react';
import { ContextProps, UserAuth } from '../context/AuthContext';
import { db } from './firebase';

const ReplyBox = () => {
  const { currentUser } = UserAuth() as ContextProps;
  
  const [message, setMessage] = useState('');

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if(message.trim() === ''){
      alert('Please enter a valid message!')
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, 'messages'), {
        content: message,
        sender: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })

      setMessage('');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>
      <div className='px-3 containerWrap flex justify-center'>
        <form onSubmit={sendMessage}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type='text'
            className='input focus:outline-none rounded-r-none'
          />
          <button
            type='submit'
            className='btn w-auto text-white rounded-l-none px-5 text-sm'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReplyBox;

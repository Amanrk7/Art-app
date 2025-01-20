// src/InviteLogin.js
import React, { useState } from 'react';
import { db, auth, doc, getDoc, signInAnonymously } from './components/firebase';

export const InviteLogin = ({ onLogin }) => {
  const [inviteCode, setInviteCode] = useState('');

  const handleLogin = async () => {
    // Check if the invite code exists in Firestore
    const inviteDoc = await getDoc(doc(db, "invites", inviteCode));
    if (inviteDoc.exists()) {
      signInAnonymously(auth)
        .then(() => {
          onLogin(true);
        })
        .catch((error) => {
          console.error('Error during sign-in:', error);
        });
    } else {
      alert('Invalid invite code. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login with Invite Code</h2>
      <input
        type="text"
        placeholder="Enter invite code"
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default InviteLogin;

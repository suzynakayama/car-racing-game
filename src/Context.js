import React from 'react';

export let initialUser = {
  id: "",
  name: "",
  points: "",
  color: ""
}

export const UserContext = React.createContext({
  user: initialUser,
  setUser: (user) => {
    return initialUser = user;
  }
});

export let initialGame = {
  users: []
}

export const GameContext = React.createContext({
  game: initialGame,
  addUserToGame: (user) => initialGame.users.push(user),
  deleteUserFromGame: (userId) => initialGame.filter(user => user.id !== userId)
});
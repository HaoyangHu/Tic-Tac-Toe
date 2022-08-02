/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      cognitoID
      username
      name
      email
      games {
        items {
          id
          createdAt
          gameID
          playerUsername
          owner
          updatedAt
          owners
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      cognitoID
      username
      name
      email
      games {
        items {
          id
          createdAt
          gameID
          playerUsername
          owner
          updatedAt
          owners
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      cognitoID
      username
      name
      email
      games {
        items {
          id
          createdAt
          gameID
          playerUsername
          owner
          updatedAt
          owners
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayerGame = /* GraphQL */ `
  subscription OnCreatePlayerGame($owners: String) {
    onCreatePlayerGame(owners: $owners) {
      id
      createdAt
      gameID
      playerUsername
      owner
      game {
        id
        status
        owners
        initiator
        turn
        state
        winner
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        cognitoID
        username
        name
        email
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      owners
    }
  }
`;
export const onUpdatePlayerGame = /* GraphQL */ `
  subscription OnUpdatePlayerGame($owners: String) {
    onUpdatePlayerGame(owners: $owners) {
      id
      createdAt
      gameID
      playerUsername
      owner
      game {
        id
        status
        owners
        initiator
        turn
        state
        winner
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        cognitoID
        username
        name
        email
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      owners
    }
  }
`;
export const onDeletePlayerGame = /* GraphQL */ `
  subscription OnDeletePlayerGame($owners: String) {
    onDeletePlayerGame(owners: $owners) {
      id
      createdAt
      gameID
      playerUsername
      owner
      game {
        id
        status
        owners
        initiator
        turn
        state
        winner
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        cognitoID
        username
        name
        email
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      owners
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      status
      owners
      initiator
      turn
      state
      winner
      players {
        items {
          id
          createdAt
          gameID
          playerUsername
          owner
          updatedAt
          owners
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      status
      owners
      initiator
      turn
      state
      winner
      players {
        items {
          id
          createdAt
          gameID
          playerUsername
          owner
          updatedAt
          owners
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      status
      owners
      initiator
      turn
      state
      winner
      players {
        items {
          id
          createdAt
          gameID
          playerUsername
          owner
          updatedAt
          owners
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

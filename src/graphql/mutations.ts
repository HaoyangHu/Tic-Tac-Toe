/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const startGame = /* GraphQL */ `
  mutation StartGame($invitee: String!) {
    startGame(invitee: $invitee) {
      id
      status
      turn
      state
      winner
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createPlayerGame = /* GraphQL */ `
  mutation CreatePlayerGame(
    $input: CreatePlayerGameInput!
    $condition: ModelPlayerGameConditionInput
  ) {
    createPlayerGame(input: $input, condition: $condition) {
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
export const updatePlayerGame = /* GraphQL */ `
  mutation UpdatePlayerGame(
    $input: UpdatePlayerGameInput!
    $condition: ModelPlayerGameConditionInput
  ) {
    updatePlayerGame(input: $input, condition: $condition) {
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
export const deletePlayerGame = /* GraphQL */ `
  mutation DeletePlayerGame(
    $input: DeletePlayerGameInput!
    $condition: ModelPlayerGameConditionInput
  ) {
    deletePlayerGame(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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

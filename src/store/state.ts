export interface IStateCounter {
  count: number;
}

export interface IState {
  [key: string]: IStateCounter;
  yes: IStateCounter;
  no: IStateCounter;
}

const state: IState = {
  yes: {
    count: 0
  },
  no: {
    count: 0
  }
}

export default state

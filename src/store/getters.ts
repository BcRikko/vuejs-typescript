import { GetterTree } from 'vuex'
import { IState } from './state'

const getters: GetterTree<IState, IState> = {
  getResult: state => {
    return `yes: ${state.yes.count} , no: ${state.no.count}`
  }
}

export default getters

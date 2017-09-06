import { ActionTree } from 'vuex'
import * as types from './mutation-types'
import { IState } from './state'

// S:state, R:rootState
const actions: ActionTree<IState, IState> = {
  [types.COUNTUP_YES] ({ commit }) {
    commit(types.COUNTUP_YES)
  },

  [types.COUNTUP_NO] ({ commit }) {
    commit(types.COUNTUP_NO)
  }
}

export default actions

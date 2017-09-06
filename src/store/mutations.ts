import { MutationTree } from 'vuex'
import * as types from './mutation-types'
import { IState } from './state'

const mutations: MutationTree<IState> = {
  [types.COUNTUP_YES] (state) {
    state.yes.count += 1
  },

  [types.COUNTUP_NO] (state) {
    state.no.count += 1
  }
}

export default mutations

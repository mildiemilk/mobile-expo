import axios from 'axios'
import Router from 'next/router'
import store from '../store'
import { getProfile as getProfileAction, getTable as getTableAction } from '../actions/profile'
import { getWallet } from './wallet'
import loadFirebase from '../database'

export const getProfile = async (userUid) => {
  let db = await loadFirebase('database')
  const user = await db.ref(`users/${userUid}`).once('value').then(response => response.val())
  await store.dispatch(getProfileAction(user))
}

export const getTable = async (transactionIds) => {
  let db = await loadFirebase('database')
  const item = await transactionIds? transactionIds.map(transactionId => db.ref(`transactions/${transactionId}`).once('value')
  .then(response => {
    return {
      ...response.val(),
      transactionId
    }
  })) :null
  Promise.all(item).then(res => store.dispatch(getTableAction(res)))
}
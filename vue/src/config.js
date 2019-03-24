import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/storage'
const {
  config
} = require('dotenv')

config()

export let API = ''

if (process.env.NODE_ENV === 'development') {
  API = 'http://localhost:8080/'
} else {
  API = 'https://backend.comflo.com/'
}

console.log(API)

export var blackAxios = axios.create({
  baseURL: API,
  validateStatus: function (status) {
    return status >= 200 && status < 510 // default
  },
  timeout: 10000
})

var firebaseconfig = {
  apiKey: 'AIzaSyAQp34HzZS_3xckuxcVcsUWgCu8_p7UzxA',
  authDomain: 'comflo-1518513183870.firebaseapp.com',
  databaseURL: 'https://comflo-1518513183870.firebaseio.com',
  projectId: 'comflo-1518513183870',
  messagingSenderId: '798445619042',
  storageBucket: 'comflo-1518513183870.appspot.com'
}

firebase.initializeApp(firebaseconfig)

export async function upload (file, filetype, commodity) {
  try {
    const name = commodity + '/' + filetype + '/' + (+new Date()) + '-' + file.name
    const metadata = {
      contentType: file.type
    }
    let ref = firebase.storage().ref()
    let task = ref.child(name).put(file, metadata)
    let snapshot = await task
    // console.log(snapshot.metadata)
    let fileUrl = 'https://firebasestorage.googleapis.com/v0/b/' + snapshot.metadata.bucket + '/o/' + encodeURIComponent(name) + '?alt=media'
    return fileUrl
  } catch (e) {
    // console.log(e)
    return false
  }
}

export async function deleteFile (file) {
  try {
    console.log('delete file')
    var res = file.replace('https://firebasestorage.googleapis.com/v0/b/comflo-1518513183870.appspot.com/o/', '')
    res = res.replace('?alt=media', '')
    let ref = firebase.storage().ref().child(decodeURIComponent(res))
    let snapshot = await ref.delete()
    // console.log(snapshot)
    return snapshot
  } catch (e) {
    // console.log(e)
    return false
  }
}

export function addCompare (seller, address) {
  if (String(seller).toLowerCase() === String(address).toLowerCase()) {
    return true
  } else {
    return false
  }
}

export function encode (id, reference, type) {
  return btoa(id + '&&' + reference + '&&' + type)
}

export function decode (text) {
  text = atob(text)
  let textarray = text.split('&&')
  return textarray[0]
}

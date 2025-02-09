import { addDoc, collection, query, getDocs } from 'firebase/firestore'
import { db } from '../main.ts'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { toast } from 'vue3-toastify'
import router from '../appRoutes/router'

export const saveCanvasToFirebase = async (canvas: HTMLCanvasElement) => {
  const auth = getAuth()
  const user = auth.currentUser
  if (!canvas) return

  const dataURL = canvas.toDataURL('image/png')

  try {
    await addDoc(collection(db, 'canvas_images'), {
      data: dataURL,
      timestamp: Date.now(),
      email: user?.email,
    })
    toast.success('Image saved successfully!', {
      autoClose: 3000,
      position: 'bottom-left',
      theme: 'colored',
    })
  } catch (error) {
    toast.error('Error saving image.')
  }
}

export const signInWithEmail = async (email: string, password: string) => {
  const auth = getAuth()
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    throw new Error('Incorrect email or password')
  }
}

export const registerUser = async (email: string, password: string) => {
  const auth = getAuth()
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    throw error
  }
}

export const signOutUser = () => {
  const auth = getAuth()
  return signOut(auth).then(() => {
    router.push('/mini-paint/login')
  })
}

export const onAuthStateChangedListener = (
  callback: (email: string) => void,
) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user && user.email) {
      callback(user.email)
    }
  })
}

export const fetchImagesAndUsers = async () => {
  const q = query(collection(db, 'canvas_images'))
  const querySnapshot = await getDocs(q)
  const emailSet = new Set<string>()

  const images = querySnapshot.docs
    .map((doc) => {
      const data = doc.data()
      if (data.email) {
        emailSet.add(data.email)
      }
      return { data: data.data, email: data.email, timestamp: data.timestamp }
    })
    .sort((a, b) => b.timestamp - a.timestamp)

  return {
    images,
    usersEmail: Array.from(emailSet),
  }
}

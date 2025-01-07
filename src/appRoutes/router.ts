import { createRouter, createWebHistory } from 'vue-router'

import Authorization from '../components/AuthorizationForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
import Editor from '../components/Editor.vue'
import HomePage from '../components/HomePage.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
    {
        path: '/mini-paint/',
        name: 'homePage',
        component: HomePage,
    },
    {
        path: '/mini-paint/login',
        name: 'login',
        component: Authorization,
    },
    {
        path: '/mini-paint/signup',
        name:'signup',
        component: RegistrationForm,
    },
    {
        path: '/mini-paint/editor',
        name:'editor',
        component: Editor,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to) => {
    const auth = getAuth()
    const isAuth = await new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve(!!user)
        })
    })
    let canAccess
    if (!to.path.includes('login') && !to.path.includes('signup')) {
        canAccess = isAuth
    } else if (to.path.includes('login') || to.path.includes('signup')) {
        canAccess = !isAuth
    } else {
        canAccess = true
    }
    if (!canAccess) {
        return isAuth ? '/mini-paint' : '/mini-paint/login'
    }
})

export default router

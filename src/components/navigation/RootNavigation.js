import React from 'react'
import AppNavigation from './AppNavigation'
import AuthScreen from '../../screen/Auth/AuthScreen'

import { useAuth } from '../../Hooks/UseAuth';

const RootNavigation = () => {
    const { user } = useAuth();
    return user ? <AppNavigation /> : <AuthScreen />
}

export default RootNavigation
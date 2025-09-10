'use client'

import React, { Children } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../../store/store';

export default function providers({children, session}) {
    return (
        <SessionProvider session={session}>
            <ReduxProvider store={store}>
                {children}
            </ReduxProvider>
        </SessionProvider>
    );
}

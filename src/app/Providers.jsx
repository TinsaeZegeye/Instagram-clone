'use client'

import React, { Children } from 'react'
import { SessionProvider } from 'next-auth/react'

export default function providers({children}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

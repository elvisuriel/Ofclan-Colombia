<<<<<<< HEAD
import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

interface Props {
    title: string;
}

export const AuthLayout: FC<Props> = ({ children, title  }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
        </Head>

        <main>
            <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">   
                { children }
            </Box>
        </main>
    
    </>
  )
}
=======
import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

interface Props {
    title: string;
}

export const AuthLayout: FC<Props> = ({ children, title  }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
        </Head>

        <main>
            <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">   
                { children }
            </Box>
        </main>
    
    </>
  )
}
>>>>>>> 1f6200a577589790a4dfb53472758544a7b282d1

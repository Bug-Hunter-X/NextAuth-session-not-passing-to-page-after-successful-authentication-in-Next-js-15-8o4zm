```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  
  // Check if user is authenticated. Added a console log to see what session is
  console.log('Session:', session);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function About({ session }) {
  // Check session before accessing session.user.email
  if(session){
    return (
      <div>
        <h1>About Page</h1>
        <p>You are logged in as {session.user.email}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>About Page</h1>
        <p>Please log in.</p>
      </div>
    );
  }
}
```
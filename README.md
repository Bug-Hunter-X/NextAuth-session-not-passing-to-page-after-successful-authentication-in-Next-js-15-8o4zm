# NextAuth Session Issue in Next.js 15

This repository demonstrates a bug encountered when using NextAuth.js for authentication in a Next.js 15 application.  After successful authentication, the session data is not correctly passed to a protected page, leading to a runtime error.

## Bug Description

The authentication process works as expected. The user is redirected to the protected page after logging in. However, the protected page does not receive the session object from `getServerSideProps`, resulting in an error because the code tries to access `session.user.email`, which is undefined. 

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/` and then attempt to go to `/about`.
5. Observe the error.

## Solution

The solution involves double checking the `getServerSideProps` function and verifying it is correctly fetching the session from `unstable_getServerSession` and handling the redirection when no session exists.

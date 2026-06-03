### I will be trying to explain the auth flow with better auth

- User sign up through better auth sign up function
- Then the session of user created with some values and we validate through those values from session
- We protect some authorized routes through proxy.ts or middleware.ts so for frontend part so that unauthorized user or the user who didnt signed up or signed in cant browse those routes.
- For backend route safety we use jwt we send the token through request headers to backend and we check them with jwks (Json web token key set) then verify

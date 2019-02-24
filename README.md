## Minimal Gatsby Apollo Prisma App

---

### JWT + localStorage Authentication Flow

1. 'Default' client state initializes

- Checks localStorage for JWT
- Sets @client isLoggedIn to Boolean

2. Layout componentWillMount,

- Queries @client isLogged Boolean
- Layout displays {data.isLoggedIn ? <Auth/> : props.children}

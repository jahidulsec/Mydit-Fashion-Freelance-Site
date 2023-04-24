# Mydit-Fashion-Freelance-Site

## Description
Meydit, is a double-sided online marketplace based in Sydney that brings together consumers looking for tailor-made clothes with thousands of independent tailors or makers, primarily those who do not have a shop.

Thousands of skilled tailors and designers in Sydney alone are willing to take on gig-based work.

Consumers (may also be called buyers or clients) can register for an account for free, create a “job” along with inspirations, publish the job (or may also be called “making”), get quotations, accept quotations, make payments upfront for the entire project, acknowledge receipt of goods, and provide feedback on the markers or the outcome of their makings.

The Markers can create an account for free, update their Ateliers, find and bid for jobs, update the accepted job status, and provide delivery details for shipped items.
## Tech
### Front-end
Reactjs

### Back-end
Nodejs, Expressjs, MongoDB

## Run the Project
To run this projects, install the following packages and dependencies,
- Front-end packages
```
yarn create vite
yarn add react-router-dom
yarn add infinite-react-carousel
yarn add axios
yarn add cors
yarn add @tanstack/react-query
```
- Back-end
```
npm init -y
yarn add express nodemon
yarn start
yarn add mongoose
yarn add bcrypt
yarn add jsonwebtoken cookie-parser
```
## API endpoints
| Endpoints | Role | Methods |
| --- | --- | --- |
| `/api/auth/register` | no role required | `POST` |
| `/api/auth/login` | no role required | `POST` |
| `/api/auth/logout` | no role required | `POST` |
| `/api/users/:id` | user | `DELETE` |
| `/api/users/:id` | no role required | `GET` |
| `/api/gigs/` | seller | `POST` |
| `/api/gigs/:id` | seller | `DELETE` |
| `/api/gigs/:id` | no role required | `GET` |
| `/api/gigs/` | no role required | `GET` |

### Site view
Website clips [Website Clips](https://github.com/jahidulsec/Mydit-Fashion-Freelance-Site/blob/main/Front-end/public/Website%20clip.webm)

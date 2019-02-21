### Minimal Gatsby Apollo Prisma App

---

In this social app, a user can authenticate with a JWT and then save events to their profile.

The events are pulled into the Gatsby GraphQL data layer at build time
and static event pages are rendered.

Static data could be pulled in from a headless CMS like contentful
or sanity. Build hooks are triggered whenever new content is added. But in this example the data is sourced right from the posts directory, and gatsby-transformer-remark transforms the markdown files into data
queryable via the GraphQL data layer.

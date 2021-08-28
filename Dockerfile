# Create React App Build
FROM node:lts-alpine As build

WORKDIR /client

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY ./public ./public
COPY ./src ./src

RUN yarn build

# Runtime
FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /client/package.json ./
COPY --from=build /client/yarn.lock ./
COPY --from=build /client/node_modules ./node_modules
COPY --from=build /client/build ./build
COPY ./app ./app

CMD yarn start:prod

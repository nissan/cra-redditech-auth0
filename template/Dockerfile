
# Sourced from https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f
# Stage 1 - the build process
FROM node:alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
# Stage 1.1 - the build process for Storybook site
RUN yarn build-storybook

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/.out /usr/share/nginx/html/sb
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
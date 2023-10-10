FROM node:16.14.0 as build
RUN apt-get update && apt-get -y install chromium
WORKDIR /source

#Set chrome for testing
ENV CHROME_BIN=/usr/bin/chromium

# Copy the package lock file into the container
COPY package*.json ./
# Run ci only for the production dependencies
RUN npm ci
# Copy the rest of the files into the container and build
COPY . .
RUN npm test
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /source/dist/abcjobs /usr/share/nginx/html
COPY --from=build /source/nginx.conf /etc/nginx/
EXPOSE 80

# Nodejs Docker and Docker Compose + Redis

## Docker Compose

- `docker-compose up` or `docker-compose up --build` (to rebuild the images)
- http://localhost:8080

## Just to run plain docker image

- Build the image: `docker build -t manju/node-web-app .`
- List `docker images`
- Run `docker run -p 8080:8080 -d manju/node-web-app`

## Docker commands

`docker ps -a` -> See all Containers

`docker stop $(docker ps -aq)` -> Stop all containers

`docker rm $(docker ps -aq)` -> Remove all containers

`docker rm $(docker ps -aq)` -> Remove all containers

`docker system prune` -> Remove all stopped containers


### Docker clean up

```
docker system prune

```

https://docs.docker.com/compose/overview/

https://medium.com/lucjuggery/docker-in-development-with-nodemon-d500366e74df

https://medium.com/@gauravtoshniwal/using-tunneled-db-connections-from-docker-containers-bdc032e4b122

http://anandmanisankar.com/posts/docker-container-nginx-node-redis-example/

http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/


[Docker & Node.js Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)


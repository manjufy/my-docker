# Nodejs Docker and Docker Compose

- Build the image: `docker build -t manju/node-web-app .`
- List `docker images`
- Run `docker run -p 8080:8080 -d manju/node-web-app`

## Docker commands

`docker ps -a` -> See all Containers

`docker rm $(docker ps -aq)` -> Remove all containers

`docker system prune` -> Remove all stopped containers


### Docker clean up

```
docker system prune

```

http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/


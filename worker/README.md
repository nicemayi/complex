docker build -t $(whoami)/worker -f Dockerfile.dev .
docker run $(whoami)/worker
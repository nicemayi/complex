docker build -t $(whoami)/api -f Dockerfile.dev .
docker run $(whoami)/api
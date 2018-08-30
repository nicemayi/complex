docker build -t $(whoami)/server -f Dockerfile.dev .
docker run $(whoami)/server
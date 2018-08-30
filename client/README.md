docker build -t $(whoami)/client -f Dockerfile.dev .
docker run $(whoami)/client
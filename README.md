[![Build][ci-img]][ci]

# Portfolio

Finally created it...

![social-share](https://github.com/lnkphm/portfolio/assets/44250072/4ebb8ca4-42d6-4e93-ae16-1c93ce707910)

## Installation

### Prerequisites

- [Docker](https://docs.docker.com/engine/)

### Development

```bash
# Create new network for development
docker network create lnkphm-portfolio-dev

# Build dev
docker compose -f docker-compose.dev.yml build

# Up dev
docker compose -f docker-compose.dev.yml up
```

### Production

```bash
# Create new network for production
docker network create lnkphm-portfolio

# Build dev
docker compose -f docker-compose.yml build

# Up dev
docker compose -f docker-compose.yml up
```

## Usage

Go to `localhost:3000`

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[ci]: https://github.com/lnkphm/portfolio/actions?query=branch%3Amain
[ci-img]: https://github.com/lnkphm/portfolio/actions/workflows/build.yml/badge.svg?branch=main

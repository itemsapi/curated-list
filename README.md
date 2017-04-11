# Curated list

Building nice curated list by editing yaml file

## Features

- faceted & full search
- no db dependencies (search engine written in js)
- website powered by editing simple yaml file
- simple template engine (similar to twig)

## Getting started

```bash
git clone git@github.com:itemsapi/curated-list.git
npm install
```

Edit `config/config.yaml`:

```yaml
collection:
  aggregations:
    tags: 
      size: 15
      title: Tags
    actors: 
      size: 10
      title: Actors
data:
  type: file
  path: './imdb.json' 
```

```bash
npm start
```

## Deployment

```bash
# install now
npm install now -g
# deploy app with now 
now
```

## Contributions

Any help from talented people with design or programming skills is very welcome.

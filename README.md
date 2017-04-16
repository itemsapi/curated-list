# Curated list

Static website generator for nice curated list

## Features

- faceted & full search
- no db dependencies (search engine written in js)
- website powered by editing simple yaml file
- simple template engine (similar to twig)

## Getting started

```bash
git clone https://github.com/itemsapi/curated-list.git
npm install
```

Edit `config.yaml`:

```yaml
search:
  aggregations:
    tags: 
      size: 15
      title: Tags
    actors: 
      size: 10
      title: Actors
data:
  type: url
  url: https://storage.googleapis.com/imdb-list/imdb.json
```

```bash
npm run build
npm start
```

Result:

![Curated list of movies](github/movies.jpg)

[See another examples](examples.md)

## Deployment

- https://www.netlify.com/ (incredibly easy and free hosting for open source)
- https://pages.github.com/ (free and intuitive hosting for static websites)

```bash
# install now
npm install now -g
# deploy app with now 
now
```


## Technologies

- [Express](https://github.com/expressjs/express) (minimalist web framework for Node.js)
- [ItemsJS](https://github.com/itemsapi/itemsjs) (full text, faceted search engine in javascript)

## Contributions

Any help from talented people with design or programming skills is very welcome.

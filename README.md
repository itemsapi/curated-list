# Curated list

Build nice client-side curated list by editing yaml file.
See demo for movies - https://imdb.netlify.com/.

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
website:
  title: List of movies
  layout: 
    name: table
    columns: 
      - image
      - name
      - tags
search:
  aggregations:
    tags: 
      size: 15
      title: Tags
    genres: 
      size: 15
      title: Genres
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

![](https://media.giphy.com/media/xUPGceuCLz8yFbu4Ew/giphy.gif)
[//]: # "![Curated list of movies](github/movies.jpg)"

[See another examples](examples.md)

## Short guide

After running `npm run build` all html, css and js files are generated in `docs` folder. 
You can use `docs` files for github pages or netlify deployment or maybe even AWS S3. 

## Deployment

- https://www.netlify.com/ (incredibly easy and free hosting for open source)
- https://pages.github.com/ (free and intuitive hosting for static websites)
- https://zeit.co/now (realtime deployments from cli)

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

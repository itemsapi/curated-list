# Curated list

Building nice curated list by editing yaml file

## Getting started

You can preview how it looks like although it's very early prototype.
At the moment it shows only list of movies.

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

## Contributions

Any help from talented people with design or programming skills is very welcome.

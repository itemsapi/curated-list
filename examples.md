# Examples

```bash
git clone git@github.com:itemsapi/curated-list.git
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
    actors: 
      size: 10
      title: Actors
data:
  type: url
  url: https://storage.googleapis.com/imdb-list/imdb.json
```

```bash
npm start
```

Result:

![Curated list of movies](github/movies-table.jpg)

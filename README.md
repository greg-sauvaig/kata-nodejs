# Node.js Kata - Part 1: Library

Code kata example of a library of books and magazines.

[A code kata is an exercise in programming which helps a programmer hone their skills through practice and repetition.](https://en.wikipedia.org/wiki/Kata_(programming))

* [Topic](#topic)
* [Tasks](#tasks)
* [walkthrought](#walkthrought)
* [License](#license)

## Topic

implementation of an abstracted and simple library system.

1. Given resources:

   > **Hint:** There is a reason why there are so many books and authors in german with [umlauts](https://en.wikipedia.org/wiki/Germanic_umlaut).

   * [`authors.csv`](data/authors.csv): Contains authors with its `email`, `firstName` and `lastName`.
   * [`books.csv`](data/books.csv): Contains books with its `title`, `description`, one or more `authors` and an `isbn`.
   * [`magazines.csv`](data/magazines.csv): Contains magazines with its `title`, one or more `authors`, a `publishedAt` and an `isbn`.

## Tasks

* [Main tasks](#main-tasks)
* [Optional tasks](#optional-tasks)

### Main tasks

1. :heavy_check_mark: Your software should read all data from the given CSV files in a meaningful structure. For the given dataset is for test development/test, we'll run it with a larger dataset.

2. Expose a Rest route to :
 * :heavy_check_mark: List all books
 * :heavy_check_mark: List all magazines
 * :heavy_check_mark: Find a book  by its `isbn`
 * :heavy_check_mark: Magazine by its `isbn`
 * :heavy_check_mark: List all `authors`
 * :heavy_check_mark: Find all book by their by their `authors`

### Optional tasks

> **Hint:** Optional means optional.

1. :white_check_mark:Write useful Unit tests.

2. :x:Add a route to add a book or a magazine to the data structure of your software

3. :heavy_check_mark:Add a route to export each resource to CSV

4. :x:Add a docker to run your server

## Walkthrought

1. when launching the application after installing the dependencies, the application will run migrations files to populate an SQLLite database and feed the newly created table with the content of the csv files in the directory /Data .

2. after the migration a webserver based on expressjs framework will be availlable at `http://localhost:3000`

3. the web server expose the ressources availlable in the database, by default it serves the ressources as json, if you add the `.csv` extension it will serve them as a valid csv file with `;` character as separator. see below:
   
  * `http://localhost:3000/` an hello world
  * `http://localhost:3000/books`  list all books
  * `http://localhost:3000/book/{isbn}`  a single book matching the `isbn` parameter
  * `http://localhost:3000/magazines`  list all magazines
  * `http://localhost:3000/magazine{isbn}`  a single magazine matching the `isbn` parameter
  * `http://localhost:3000/authors`  list all authors 
  * `http://localhost:3000/author/{email}/books`  list all books from the author matching the email 

##### How to run the application?

```bash
yarn install && run start
```

##### How to run your tests?

```bash
yarn run test
```

## License

See [LICENSE](LICENSE) file.

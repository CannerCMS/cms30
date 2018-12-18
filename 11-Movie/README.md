## Reference

https://www.google.com.tw/search?q=movie+database+schema&sa=X&biw=1470&bih=928&tbm=isch&source=iu&ictx=1&fir=zorUyd31YvakQM%253A%252CuHAiMqpgps6X7M%252C_&usg=AI4_-kTwol2-OqW3HGdz5Xt5pSqo_jt9WQ&ved=2ahUKEwiRg9X-n4jfAhVIabwKHS2SAc4Q9QEwAHoECAUQBA#imgrc=7aTtBFg90yGKvM:

## Data Type

```js
{
  movies: Array<{
    title: string,
    plot: Object,
    movieLength: number,
    poster: string,
    rating: number,
    releaseYear: number
  }>,
  actors: Array<{
    firstName: string,
    lastName: string,
    thumb: Image,
    nationality: string,
    intro: Object,
    birth: dateTime
  }>,
  genres: Array<{
    name: string,
  }>,
  directors: Array<{
    firstName: string,
    lastName: string,
    thumb: Image,
    nationality: string,
    intro: Object,
    birth: dateTime
  }>
}
```
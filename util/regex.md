# Regular expressions

This file contains regular expressions used in search and replace actions across the repository.

# Search and replace URLs to static web pages

In the search box insert this code and click on the _Use regular expression_ icon, in order to use the search option in _Visual Studio Code_.

## This works on `index.html` only inside the `/` __root folder__ on the `/colegio-montessori-ver` static website repo

```regex
(href="html\/)(.*)(\.html)
```

## This works on any file inside the `/html` folder on the `/colegio-montessori-ver` static website repo

```regex
(href=")(.*)(\.html)
```

## To replace use this on the replace box.

This works on both cases.

```regex
href="/$2
```
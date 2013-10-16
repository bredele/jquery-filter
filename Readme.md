
# jquery-filter

  CSS engine to filter your dom inspired by this [article](http://redotheweb.com/2013/05/15/client-side-full-text-search-in-css.html)

## Usage

First, include the jQuery and the filter plugin:

```html
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="jquery.filter.js"></script>
```

Then create your filter as following:


```html
<div class="filter">
	<div class="filter-item" data-filter="oliviercalgary">Olivier is in Calgary</div>
	<div class="filter-item" data-filter="brunoparis">Bruno is in Paris</div>
	<div class="filter-item" data-filter="amylethbridge">Amy is in Lethbridge</div>
</div> 
``` 
 > don't forget to add the class filter-item on any searchable element and to add the tags into a the data-filter attribute

and intialize your plugin:

```js
var filter = $('.filter').filter();
```

## API


### run(value [,className])

  Perform filtering. `className` is optional

```js
stack.run('olivier');
```

## Events

### filter

```js
$('.filter').trigger('filter', 'olivier');
```

## Options

### Namespace

Change the data attribute name (default is filter).

```js
var filter = $('.filter').filter({
	namespace:'obama'
});
```


## Todo

  - create tags
  - make it work on ie8

## Component

You can install a component version with [component(1)](http://component.io):

  $ component install bredele/stack

## License

  MIT
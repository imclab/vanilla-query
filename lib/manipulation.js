// append
vQuery.prototype.append = function( el ){
	_selected.appendChild( el );
};

// clone
vQuery.prototype.clone = function( callback ){
	return _selected.cloneNode(true);
};

// empty
vQuery.prototype.empty = function( callback ){
	while(_selected.firstChild){  _selected.removeChild(_selected.firstChild); }
};

// html
vQuery.prototype.html = function( callback ){
	return _selected.innerHTML;
};
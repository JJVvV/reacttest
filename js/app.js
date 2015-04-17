/**
 * Created by Administrator on 2015/4/16.
 */

var React = require('react');
var CommentBox = require('./components/CommentBox.react.js');
var data = require('./data.js');

React.render(<CommentBox url="data.json" pollInterval={3000} />, document.getElementById('example'));


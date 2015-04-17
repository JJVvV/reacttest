/**
 * Created by Administrator on 2015/4/16.
 */

var React = require('react');
var marked = require('marked');
var Comment = React.createClass({
    render: function(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
               <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
        );
    }
});

module.exports = Comment;
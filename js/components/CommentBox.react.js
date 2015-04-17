/**
 * Created by Administrator on 2015/4/16.
 */

var React = require('react');
var $ = require('jquery');
var CommentList = require('./CommentList.react.js');
var CommentForm = require('./CommentForm.react.js');
var CommentBox = React.createClass({
    loadCommentsFormServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data){
                this.setState({data: data});
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment){
        var comments = this.state.data;
        var newComments = comments.push([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data){
                this.setState({data: data});
            }.bind(this)
        });
    },
    getInitialState: function(){
        return {data: []}
    },
    componentDidMount: function(){
        this.loadCommentsFormServer();
        setInterval(this.loadCommentsFormServer, this.props.pollInterval);
    },
    render: function(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});
module.exports = CommentBox;
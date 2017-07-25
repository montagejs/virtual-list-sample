if (!window.LGI) {
    window.LGI = {};
}

window.LGI.ListItem = createReactClass({

    render: function () {
        return React.createElement(
            "div",
            { "className": "media" },
            React.createElement(
                "div",
                { "className": "media-left" },
                React.createElement(
                    "div",
                    { "className": "media-img" }
                )
            ),
            React.createElement(
                "div",
                { "className": "media-body" },
                React.createElement(
                    "h4",
                    { "className": "media-heading" },
                    "Media heading #" + this.props.index
                ),
                " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. "
            )
        );
    }

});;

document.registerReact('react-list-item', window.LGI.ListItem);

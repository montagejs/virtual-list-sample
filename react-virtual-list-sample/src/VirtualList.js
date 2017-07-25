import React, { PureComponent, PropTypes } from 'react';
import VirtualList from 'react-virtual-list';

const MyList = ({
    virtual
}) => (
        <ul className="media-list list-group" style={virtual.style}>
            {virtual.items.map((item) => (
                <li key={`item${item}`} className="list-group-item">
                    <div className="media-left">
                        <img className="media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4=" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">"Media heading #" {item}</h4>
                        <p>
                            " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. "
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );

export default class MyVirtualList extends PureComponent {
    constructor() {
        super();

        const state = {
            itemHeight: 100,
            itemCount: 0,
            items: [],
            itemBuffer: 0
        };

        this.state = state;
        this.virtualList = VirtualList()(MyList);
    }

    componentDidMount() {
        this.virtualList = VirtualList({
            container: this.refs.container
        })(MyList);

        const defaultItemCount = 100000;

        const items = [];

        for (let i = 0; i < defaultItemCount; i++) {
            items[i] = i;
        }

        const state = {
            itemHeight: 100,
            itemCount: defaultItemCount,
            items: items,
            contained: true,
            itemBuffer: 10,
        };

        this.setState(state);
    }

    render() {
        const VirtualListSample = this.virtualList;

        return (
            <div id="container" ref="container" style={this.state.contained ? { overflow: 'scroll', height: '500px' } : {}}>
                <VirtualListSample
                    items={this.state.items}
                    itemBuffer={this.state.itemBuffer}
                    itemHeight={this.state.itemHeight} />
            </div>
        );
    }
}
/**
 * @module ui/list.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class List
 * @extends Component
 */
exports.List = Component.specialize(/** @lends List# */ {
    constructor: {
        value: function List() {
            this.super();
            this.generateRow(100000);
        }
    },

    captureResize: {
        value: function () {
            this.needsDraw = true;
        }
    },

    generateRow: {
        value: function (numberRows) {
            var content = [];

            for (var i = 0; i < numberRows; i++) {
                content.push(i);
            }

            this.content = content;
        }
    }
});

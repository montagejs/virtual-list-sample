/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize({

    draw: {
        value: function () {
            if (!this.timeStats) {
                this.frameStats = new Stats();
                this.timeStats = new Stats();
                this.frameStats.showPanel(0);
                this.timeStats.showPanel(1);
                this.statsElement.appendChild(this.frameStats.dom);
                this.statsElement.appendChild(this.timeStats.dom);
            }

            this.frameStats.begin();
            this.timeStats.begin();

            this.frameStats.end();
            this.timeStats.end();
            this.needsDraw = true;
        }
    }
});

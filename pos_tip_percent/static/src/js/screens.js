odoo.define('pos_tip_percent.screens', function(require){
"use strict";

    var gui = require('point_of_sale.gui');

    console.log(gui);

    /*
    click_tip: function(){
        var self   = this;
        var order  = this.pos.get_order();
        var tip    = order.get_tip();
        var change = order.get_change();
        var value  = tip;

        if (tip === 0 && change > 0  ) {
            value = change;
        }

        this.gui.show_popup('number',{
            'title': tip ? _t('Change Tip') : _t('Add Tip'),
            'value': self.format_currency_no_symbol(value),
            'confirm': function(value) {
                order.set_tip(formats.parse_value(value, {type: "float"}, 0));
                self.order_changes();
                self.render_paymentlines();
            }
        });
    },
    */


});
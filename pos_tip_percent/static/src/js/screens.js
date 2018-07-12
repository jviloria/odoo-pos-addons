odoo.define('pos_tip_percent.screens', function(require){
"use strict";
    
    var core = require('web.core');
    var _t = core._t;
    var formats = require('web.formats');
    var screens = require('point_of_sale.screens');

    screens.PaymentScreenWidget.include({

        click_tip: function(){
            var self   = this;
            var order  = this.pos.get_order();
            var tip    = order.get_tip();
            var change = order.get_change();
            var value  = tip;
            var total  = order.get_total_without_tax();

            if (tip === 0 && change > 0  ) {
                value = change;
            }
            if (tip === 0 && change === 0  ) {
                var tip_product = this.pos.db.get_product_by_id(this.pos.config.tip_product_id[0]);
                value = total * (tip_product.price/100);
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

    });

});
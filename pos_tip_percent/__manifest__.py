# -*- coding: utf-8 -*-
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    John W. Viloria Amaris <john.viloria.amaris@gmail.com>
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################

{
    "name":"POS Tip Percent",
    "description":"""\
POS Tip Percent
==================================

This module allows you to calculate the tip in 
percentage of the total pos ticket.
    """,
    "depends":["point_of_sale",],
    "category":"Sale",
    "author":"John Viloria Amaris",
    "data":[
        "views/pos_tip_percent.xml",
    ],
    "qweb": ["static/src/xml/*.xml"],
    "installable":True
 }

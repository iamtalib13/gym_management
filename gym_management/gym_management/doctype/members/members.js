// Copyright (c) 2023, Atul Nadekar & Talib Sheikh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Members', {
	refresh: function(frm) {
		let first_name = frm.doc.first_name; // Get the value of the "first_name" field
		let last_name = frm.doc.last_name; // Get the value of the "last_name" field
		let full_name = first_name + " " + last_name; // Concatenate the first_name and last_name with a space in between
		frm.set_value("full_name", full_name); // Set the value of the "full_name" field to the concatenated result
		//
	}
});

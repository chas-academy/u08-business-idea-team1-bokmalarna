const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			max: 50,
		},
		author: {
			type: String,
			required: true,
			max: 50,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
			max: 150,
		},
		genre: {
			type: String,
			required: true,
		},
		condition: {
			type: String,
			required: true,
		},
		released: {
			type: Date,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		borrower: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			default: null,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);

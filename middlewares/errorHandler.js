export const errorHandler = (err, _req, res, next) => {
	console.log(err);
	res.status(500).json({error: "internal server error", message: "Something Unexpected Happened", statusCode: 500})
	next();
}

import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { execFile, exec } from 'child_process';

const app = express();

app.use(express.static('public'));

const upload = multer({
	dest: 'uploads/',
});

const handleError = (err: Error, res: express.Response) => {
	console.error(err);
	res.status(500).sendFile(path.join(__dirname, '../public/error-page.html'));
};

app.post('/upload', upload.single('image' /* name attribute of <file> element in your form */), (req, res) => {
	if (!req.file) {
		return handleError(new Error('NO image'), res);
	}
	const tempPath = req.file!.path;

	const filenameExtension = path.extname(req.file!.originalname).toLowerCase();
	if (filenameExtension === '.png' || filenameExtension === '.jpg' || filenameExtension === '.jpeg') {
		const newFilename = path.join(__dirname, '../uploads', `${new Date().toISOString()}${filenameExtension}`);
		fs.rename(tempPath, newFilename, (err) => {
			execFile(path.join(__dirname, `../show-image.sh`), [newFilename]);
			if (err) return handleError(err, res);

			res.status(200).sendFile(path.join(__dirname, '../public/success-page.html'));
		});
	} else {
		fs.unlink(tempPath, (err) => {
			if (err) return handleError(err, res);

			res.status(403).contentType('text/plain').end('Only .png files are allowed!');
		});
	}
});

app.listen(3000, () => {
	console.log(`Example app listening on port ${3000}`);
});

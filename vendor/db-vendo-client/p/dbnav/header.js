import uuid from 'react-native-uuid';
const uuidv4 = uuid.v4

const getHeaders = (contentType) => {
	return {
		'X-Correlation-ID': uuidv4() + '_' + uuidv4(),
		'Accept': contentType,
		'Content-Type': contentType,
	};
};

export {
	getHeaders
};


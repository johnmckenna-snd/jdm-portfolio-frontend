import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';
import DetailCardNoImage from '../detail-page/DetailCardNoImage';

const cardContent = [
	{
		heading: 'react hooks',
		content: <DetailCardNoImage text="React helps development be faster and more flexible. I have built two websites (including this one) with React Hooks. I have been working with React for 3 months, and I am familiar from start to build with create-react-app. I have used axios, Styled Components, React Router, hooks router, React Window, react transition group, and react google autocomplete." />
	},
	{
		heading: 'mongodb',
		content: <DetailCardNoImage text="MongoDB’s document format makes it incredibly versatile and user friendly. I have used MongoDB for a startup I am working with (references available on request). I am currently working on aggregating over 30gb of documents to create a database for further development of the startup’s website. I have taken MongoDB 001 and 121 from MongoDB University." />
	},
	{
		heading: 'node',
		content: <DetailCardNoImage text="Node makes writing backend servers for JavaScript Developers easy. I built a node/express backend for a startup I’m working with (references available on request). The server uses packages:  aws-sdk, mongodb, and node-fetch. I have also used node to write one serverless backend using aws-lambda to host." />
	},
	{
		heading: 'aws',
		content: <DetailCardNoImage text="Amazon Web Services is incredibly powerful, and a large portion of the web is hosted there. I have deployed two websites on aws with cloud front, elastic beanstalk, s3 static-served frontends, ses, and workmail. I am versed in getting websites up and running and simple CI strategies." />
	}
];

const WebDevelopment = () => {
	return (
		<DetailPage header="web development" cardContent={cardContent} />
	);
};

export default WebDevelopment;

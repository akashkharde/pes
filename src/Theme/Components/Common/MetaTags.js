import React from 'react';
import { Helmet } from 'react-helmet';


const MetaTags = ({ title, description, keywords, route }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <link rel="canonical" href={`https://pnaqengg.com${route}`} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
};

export default MetaTags;

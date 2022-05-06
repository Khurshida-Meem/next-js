import {useRouter} from 'next/router'

const NewsDetail = () => {

    const router = useRouter();
    // query give us the access to nested object

    router.query.newsId;

    router.query

    return (
        <div>
            
        </div>
    );
};

export default NewsDetail;
import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blog = () => {
    return (
        <div className='mt-5 pt-5'>
            <PageTitle title='Blog'/>
            <div className='container'>
                <div className='w-75 mx-auto border px-4 pb-4 rounded mb-4'>
                    <h1 className='text-center my-5'>Difference between Javascript and NodeJs</h1>
                    <article className='fs-3 lh-base'>
                        <strong>Javascript:</strong>Javascript is a high level programming level.Javascript is mostly used in writing script in website.Javascript is based on prototype inheritance.Javascript has capability to change the html document.Javascript can run only the browser.Javascript is used in frontend development.
                    </article>
                    <article className='fs-3 lh-base mt-5'>
                        <strong>NodeJs:</strong>Nodejs is cross-platfrom and opensource javascript run time environment that allows to run javascript in server side.Nodejs is only used in server side.Nodejs comes with lots of modules and mostly used in web development.We can run javascript outside of the browser with nod
                    </article>
                </div>
                <div className='w-75 mx-auto border rounded p-5'>
                    <div className='mb-4'>
                        <h1 className='text-center mb-5'>When should use Nodejs</h1>
                        <article className='fs-3 lh-base'>
                            <strong>When should use Nodejs:</strong>It runs Javascript, so you can use the same language on server and client, and even share some code between them for validation.Node js single threated language.When handle lots of request at once nodejs even driven system is fast.When should you works a big project nodejs is not for the right choice.
                        </article>
                    </div>
                    <div>
                        <h1 className='text-center mb-5'>When should use MongoDB</h1>
                        <article className='fs-3 lh-base'>
                            <strong>When should use MongDB:</strong>Mongodb store data like json format. This is very fast and efficient so you should use it.One of the best advantage of MongoDB is you can store data inside another collection.And most importantly it support More user at a time and also useful if you have large number of fields
                        </article>
                    </div>
                </div>

                <div className='my-5'>
                    <div className='w-75 mx-auto border rounded p-5'>
                        <h1 className='text-center mb-5'>Difference between Sql database and Nosql database</h1>
                        <article className='fs-3 lh-base'>
                            <strong>Sql Database:</strong>Sql database are primarily called as relational database.Sql database defines and manipulates data based structure query language.Seeing from this side this language is extremely powerful.In all most all situtations sql database are horizantoly scalable.Sql data stored table based.
                        </article>
                        <article className='fs-3 lh-base'>
                            <strong>NoSql Database:</strong>A NoSql database has dynamic schema for unstructured data.These databases are best suited for hierarchical data storage.These database are not so good for complex quires.Horizantally scalable data.Follows CAP(consistency, availability, partition tolerance)
                        </article>
                    </div>
                </div>

                <div className='w-75 mx-auto border rounded p-5'>
                    <h1 className='text-center mb-5'>What is the purpose of JWT and how does it work</h1>
                    <article className='fs-3 lh-base'>
                        <strong>Purpose Of JWT:</strong>Jwt can be used in to prevent unwanted access to protected resources.They're often used a bearer token.Which the api will decode and validate before sending response.
                    </article>
                    <article className='fs-3 lh-base'>
                        <strong>How does it work:</strong>When a user log in then server create a token for the user.Then this token send to the server and validate the token.If the token is valid then it gives access.Otherwise it does not give access.
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React, { useState, useEffect } from 'react'
// import { articles } from './articles';
import axios from 'axios';
//api key: 9997bca856054c728e05cf5eb6a9a203
//2nd key: 679100f8d6e344a793d0156096d97c4f

const Newspg = ({ country, category, pageSize }) => {

    const [data, setData] = useState([]);
    // const [filteredData, setfilteredData] = useState([]);
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=679100f8d6e344a793d0156096d97c4f&pagesize=${pageSize}`;
        axios.get(url)
            .then((response) => {
                setData(response.data.articles)
            })
        console.log("loaded");
    });
    // const newdata = data.filter((val)=>{return val.url!=="null"});
    // setfilteredData(newdata);

    return (
        <>
            <section id="news" className='flex flex-wrap justify-center bg-gray-200'>
                {data.map((element) => {
                    return (
                        <div className="p-10" key={element.url}>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg h-[400px] hover:-translate-y-1 hover:scale-110 duration-300 bg-white">
                                <img className="w-full h-52" src={element.urlToImage || "./images/news.png"}/>
                                <div className="px-6 py-4">
                                    <div className="font-bold mb-2">{element.title ? element.title.slice(0, 45) : ""}</div>
                                    <p className="text-gray-700 text-sm">
                                        {element.description ? element.description.slice(0, 88) : ""}
                                    </p>
                                </div>
                                <div className='px-6 text-sm'>By {element.author ? element.author : "Unknown"} on {element.publishedAt.slice(0, 10)}</div>
                                <div className='px-6 py-4 font-semibold text-sm'><a href={element.url} target="_blank">Read more...</a></div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Newspg



{/* <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{element.name}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{element.author}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{element.publishAt}</span>
                                </div> */}
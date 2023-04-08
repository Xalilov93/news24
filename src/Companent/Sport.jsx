import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sport() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=sport&from=2023-03-07&sortBy=publishedAt&apiKey=fdb8c823b0eb42c1bfe0f5b9f97ac325`)
      .then((res) => res.json())
      .then((data)=> setData(data.articles));
  }, [])
  const navigator = useNavigate();
  return (
    <>
    <button onClick={()=>navigator('/')} style={{position: "fixed", top: 40, left: 20 }}>Home</button>
      <main>
        {data && (
          <main className='grid grid-cols-4 gap-4'>
          {data.map((e)=> (
          <div>
            <div key={Math.random} className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href='' >
                    <img className="rounded-t-lg w-full h-40" src={e.urlToImage ? e.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACpCAMAAADqZqpJAAAAXVBMVEXDw8MAAADGxsY+Pj6wsLBISEiZmZnJycmqqqqtra28vLyfn59hYWG5ubl0dHRFRUWDg4NWVlaJiYknJycgICB8fHwUFBQ3NzcuLi5ubm6Pj48PDw8bGxtRUVFbW1uolY/lAAACLklEQVR4nO3ay3aCMBRAUXIFgkERH4hi6/9/ZsUCBaEVmbSXnj1pdWWQs4Tw9DwAAAAAAAAAAAAAAAAAAAAAAAAAAP4+me63pz6OrKPlJFG0VpEoLskXEyXut2c/hvgbM9XG1/Ajih+YNJoiNYGawtBOWGVsqKrw/t9ra6O6QpG173svzFhbobhimwfZC1PWVuhll3J13I6fs7JCiY+fB4DdXAu9rDrEbUefp2grTOqD+GwLi6pwNXAiJp4bWGSVFcpycQ98C/tzFre7Fq73vbJCT+Iycb8bGlLuo5n6wtvfXZbGA1ujhIfyxy3sw/fqCsu2odM28fP79ptHD4n6Cr9zbdagbs5cCm3aXA2msyy0UeuCN+70zKNQ3L5VeOqcDegtFNv6tOrctdi2x6kttPE5rNdUm166N2bS9kClhTbOzVt1eLfxvhtoDnFrpM5CWQe3kOPnAXL93ru7FnztikoLqx0vj8qpn3uBt6NiM1JnoeyqkKsTKQYCzaW5RFZZKNGpLsns8jBUaE5RvQxpLHTBV0kcDAbedsXqClJjoW3veKdvAo05V6P1Fd6mPE5cD1dWKO44svB4v8pQVyjeYmSgMYvypEdfYfK8rJEoLJTw8QztJ/tQtBWKP34bLW18dU/XVs+rOlbafsPsedODTFnh0n/VUlXh3J/jz/1dDM8lU1+nWST9pxl/UflO1KStVMs7Uf/gvTYAAAAAAAAAAAAAAAAAAAAAAAAAwD/3ASsJHv0boaKGAAAAAElFTkSuQmCC'} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {e.title.slice(0, 40)}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {e.content.slice(0, 60)}
                    </p>
                    <a href={e.url} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>
          </div>
        ))}
        </main>
        )}
      </main>
        </>
  )
}

export default Sport
import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ritesh-49')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })



    // }, [])

    return (
        <>
        <div className='w-full h-full p-4 '>
            <div  className='flex justify-stretch items-center mx-auto max-w-screen-xl bg-gray-600 text-white'>
                <img src={data.avatar_url} alt='Git picture' width={300} />
                Github followers: {data.followers}
            </div>

        </div>
        </>
    );
}

export default Github;

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/Ritesh-49")
    
    return response.json();
}
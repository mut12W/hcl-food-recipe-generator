import './App.css';
// var val = title
// const getlink= ({title}) =>{
//     let link = document.getElementById('link');
    
//     console.log(title)
//     return(link.href=`https://www.youtube.com/results?search_query=${title}`)
// }


const recipe = ({title,calories,image,ingredients}) =>{
    return (
        <div className='my-2rem space-y-[1rem] shadow-md rounded px-8 pt-6 pb-8 mb-4 ' id="food">
            <h1 id='food_title' className='bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent'>{title}</h1>
            <ol>
                <h3 className='text-black'><u>ingredients : </u></h3>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <h3 className='text-black'><u>calories : </u></h3>{calories}<br/>
            <img src={image} alt = ""/>
            
            {/* <a href="#" id='link' onClick={getlink}>hi</a> */}
            
            {/* {console.log(recipe)} */}

        </div>
        
    )

}

export default recipe;
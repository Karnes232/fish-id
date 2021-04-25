import React from 'react'
import Card from './Card'

const CardList = ({ fishList }) =>{

    return (
        <div>
            {
                fishList.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={fishList[i].id} 
                        photo={fishList[i]['Species Illustration Photo']}
                        name={fishList[i]['Species Name']} 
                        location={fishList[i]['Location']}
                    />
                )
            })
            }
        </div>
    )
}

export default CardList

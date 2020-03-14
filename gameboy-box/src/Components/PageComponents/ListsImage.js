import React from 'react'
import '../Styles/ListsImage.scss'





const ListsImage = (props) => {
    return (
        <>
            <div className='five-image-container'>
                <div className='firstImage'>
                    <img src={props.firstImage}></img>
                </div>
                <div className='secondImage'>
                    <img src={props.secondImage}></img>
                </div>
                <div className='thirdImage'>
                    <img src={props.thirdImage}></img>
                </div>
                <div className='fourthImage'>
                    <img src={props.fourthImage}></img>
                </div>
                <div className='fifthImage'>
                    <img src={props.fifthImage}></img>
                </div>
            </div>
            <div className='lists-user-container'>
                <p>{props.description}</p>
                <div className='user-image-container'>
                    <div>
                        <img src={props.userImage}/>
                    </div>
                    <p>{props.user}</p>

                </div>
            </div>
        </>
    )
}

export default ListsImage
import React from 'react'

function HeaderTwoButton({secund, minut, numberOfClicks}) {

    return (
        <>
            <div className="count_item">
                <img src="../../images/wood_top.png" alt="" />
                <div className="count_number" >{numberOfClicks}</div>
                </div>
                <div className="time_item">
                <img src="../../images/wood_top.png" alt="" />
                <div className="time_wood">{minut < 10 ? '0' + minut : minut }:{secund < 10 ? '0' + secund : secund}</div>
            </div>
        </>
    )
}

export default HeaderTwoButton

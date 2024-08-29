

const CardSmall = ({ img, title, subtitle, details }) => {
    return (
        <div className='cardSmall container2 '>
            <div>
                <img src={img} />
            </div>
            <div className="my-3">
                <p>{title}</p>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default CardSmall;